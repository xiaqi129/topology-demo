/**
 * @license
 * Copyright Cisco Inc. All Rights Reserved.
 *
 * Author: gsp-dalian-ued@cisco.com
 */

import * as _ from 'lodash';
import { CommonElement, IStyles } from './common-element';

import { Edge } from './edge';
import { EdgeBundle } from './edge-bundle';
import { Group } from './group';
import { Label } from './label';
import { Tooltip } from './tooltip';

export class Node extends CommonElement {
  private parentNode: Group | null = null;
  private data: any;
  private edgesGroupByNodes: { [key: string]: Edge[] };
  private elements: Edge | CommonElement[];
  private selectedNodes: any[] = [];
  private dragging: boolean;
  private last: any;
  private tooltip: Tooltip;
  private labelContent: string = '';

  constructor(
    edgesGroupByNodes: { [key: string]: Edge[] },
    elements: Edge | CommonElement[],
    selectedNodes: any[] = [],
    icon: any) {
    super();
    this.edgesGroupByNodes = edgesGroupByNodes;
    this.data = null;
    this.dragging = false;
    this.elements = elements;
    this.selectedNodes = selectedNodes;
    // this.draw();  // 圆点
    // this.createSprite(resourceName || 'switch');  // 从loader中加载icon, 默认switch
    this.draw(icon);
    this.tooltip = new Tooltip();
    this.setTooltip();
  }

  public setParentNode(node: Group) {
    this.parentNode = node;
  }

  public getChildNode() {
    return this.children[0];
  }

  public getParentNode() {
    return this.parentNode;
  }

  public draw(icon?: any) {
    if (icon) {
      this.drawSprite(icon);
    } else {
      this.drawGraph();
    }
  }

  public drawGraph() {
    this.clearDisplayObjects();
    const style = this.defaultStyle;
    const graph = new PIXI.Graphics();
    graph.name = 'node_graph';
    graph.lineStyle(style.lineWidth, style.lineColor);
    graph.beginFill(style.fillColor, style.fillOpacity);
    graph.drawCircle(0, 0, 5);
    graph.endFill();
    graph.interactive = true;
    graph.buttonMode = true;
    graph
      .on('mousedown', this.onDragStart.bind(this))
      .on('mouseup', this.onDragEnd.bind(this))
      .on('mouseupoutside', this.onDragEnd.bind(this))
      .on('mousemove', this.onDragMove.bind(this));
    this.addChild(graph);
  }

  public onDragStart(event: PIXI.interaction.InteractionEvent) {
    const parent = this.parent.toLocal(event.data.global);
    const isInSelect = _.find(this.selectedNodes, (node) => {
      return node === this;
    });
    if (!(this.selectedNodes.length > 0 && isInSelect)) {
      _.remove(this.selectedNodes);
    }
    this.dragging = true;
    this.data = event.data;
    this.last = { parents: parent, x: event.data.global.x, y: event.data.global.y };
  }

  public onDragEnd() {
    this.dragging = false;
    this.data = null;
    this.last = null;
  }

  public onDragMove(event: PIXI.interaction.InteractionEvent) {
    if (this.dragging) {
      // event.stopPropagation();
      const newPosition = this.data.getLocalPosition(this.parent);
      const isInSelect = _.find(this.selectedNodes, (node) => {
        return node === this;
      });
      if (this.selectedNodes.length > 0 && isInSelect
        && this.last) {
        const distX = event.data.global.x;
        const distY = event.data.global.y;
        _.each(this.selectedNodes, (node) => {
          node.position.x += (newPosition.x - this.last.parents.x);
          node.position.y += (newPosition.y - this.last.parents.y);
          node.redrawEdge();
        });
        this.last = { parents: newPosition, x: distX, y: distY };
      } else {
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
      }
      this.redrawEdge();
    }
  }

  public redrawEdge() {
    _.each(this.elements, (element: any) => {
      const groupEdges = element.groupEdges;
      const isExpanded = element.isExpanded;
      // when the group is Expanded redraw it
      if (element instanceof Group && element.isExpanded) {
        element.draw();
      }
      // when the group is close on redraw groupEdges
      if (element instanceof Group && !isExpanded) {
        element.rmElements(groupEdges);
        element.drawEdges();
      }
    });
    // redraw all of the EdgeBundle and Edge
    _.each(this.edgesGroupByNodes, (edgesGroup, key) => {
      if (_.includes(key, this.getUID())) {
        _.each(edgesGroup, (edge: Edge) => {
          edge.draw();
        });
      }
    });
  }

  public drawSprite(icon: any) {
    // let nodeSprite: PIXI.Sprite = new PIXI.Sprite();
    // const loader = PIXI.loader;
    // loader
    //   .load((load: any, resources: any) => {
    //     console.log('load', load);
    //     console.log('res', resources);
    //     const resource = resources[resourceName];
    //     if (resource) {
    //       nodeSprite = new PIXI.Sprite(resource.texture);
    //     } else {
    //       nodeSprite = new PIXI.Sprite(resources.switch.texture);
    //     }
    //   }).onComplete.add(() => {
    //     const node = nodeSprite;
    //     node.width = 40;
    //     node.height = 40;
    //     node.anchor.set(0.5, 0.5);
    //     node.interactive = true;
    //     node.buttonMode = true;
    //     node
    //       .on('mousedown', this.onDragStart.bind(this))
    //       .on('mouseup', this.onDragEnd.bind(this))
    //       .on('mouseupoutside', this.onDragEnd.bind(this))
    //       .on('mousemove', this.onDragMove.bind(this));
    //     node.name = 'node_sprite';
    //     this.addChild(node);
    //   });
    // if (!loader.loading) {
    //   const node = nodeSprite;
    //   node.width = 40;
    //   node.height = 40;
    //   node.anchor.set(0.5, 0.5);
    //   node.interactive = true;
    //   node.buttonMode = true;
    //   node
    //     .on('mousedown', this.onDragStart.bind(this))
    //     .on('mouseup', this.onDragEnd.bind(this))
    //     .on('mouseupoutside', this.onDragEnd.bind(this))
    //     .on('mousemove', this.onDragMove.bind(this));
    //   node.name = 'node_sprite';
    //   this.addChild(node);
    // }
    const node = new PIXI.Sprite(icon.texture);
    node.width = icon.width;
    node.height = icon.height;
    node.anchor.set(0.5, 0.5);
    node.interactive = true;
    node.buttonMode = true;
    node
      .on('mousedown', this.onDragStart.bind(this))
      .on('mouseup', this.onDragEnd.bind(this))
      .on('mouseupoutside', this.onDragEnd.bind(this))
      .on('mousemove', this.onDragMove.bind(this));
    node.name = 'node_sprite';
    this.addChild(node);
  }

  public getWidth() {
    return this.width;
  }

  public getHeight() {
    return this.height;
  }

  public selectOne(color?: any) {
    const isInSelect = _.find(this.selectedNodes, (node) => {
      return node === this;
    });
    if (this.selectedNodes.length > 0 && isInSelect) {
      this.selectOn(color);
    } else {
      _.each(this.elements, (element: any) => {
        if (element instanceof Node) {
          // element.clearBorder();
          element.selectOff();
        }
      });
      this.selectOn(color);
    }
  }

  public selectOn(color?: any) {
    // this.clearBorder();
    this.selectOff();

    const children = this.children;
    _.each(children, (child) => {
      if (child.name === 'node_sprite') {
        const border = new PIXI.Graphics();
        const lineWidth = 8;
        border.lineStyle(lineWidth, color || 0X00e5ff, 1);
        border.drawRoundedRect(
          -((child as any).texture.width + lineWidth) / 2,
          -((child as any).texture.height + lineWidth) / 2,
          (child as any).texture.width + lineWidth,
          (child as any).texture.height + lineWidth,
          5,
        );
        border.name = 'node_border';
        (child as any).addChild(border);
      }
      if (child.name === 'node_graph') {
        const border = new PIXI.Graphics();
        const lineWidth = 2;
        border.lineStyle(lineWidth, color || 0X00e5ff, 1);
        border.drawRoundedRect(
          -((child as any).width + lineWidth) / 2,
          -((child as any).height + lineWidth) / 2,
          (child as any).width + lineWidth,
          (child as any).height + lineWidth,
          7,
        );
        border.name = 'node_border';
        (child as any).addChild(border);
      }
    });
  }

  public selectOff() {
    const children = this.children;
    _.each(children, (child) => {
      if (child instanceof PIXI.Sprite || child.name === 'node_graph') {
        (child as any).removeChild((child as any).getChildByName('node_border'));
      }
    });
  }

  public setTooltip(content?: string) {
    this.removeAllListeners();
    this.tooltip.addTooltip(this, content || this.getUID());
  }

  public setLabel(content?: string, style?: PIXI.TextStyleOptions) {

    const oldLabel = this.getChildByName('node_label');
    if (oldLabel) {
      (oldLabel as any).setText(content || this.getUID());
      this.labelContent = (oldLabel as any).text;
    } else {
      const labelStyleOptions = {
        fontSize: 10,
        fontWeight: 'bold',
      };
      const label = new Label(content || this.getUID(), style || labelStyleOptions);
      label.name = 'node_label';
      this.addChild(label);
      this.labelContent = label.text;
    }
  }

  public getLabelContent() {
    return this.labelContent;
  }
}
