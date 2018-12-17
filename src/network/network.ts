/**
 * @license
 * Copyright Cisco Inc. All Rights Reserved.
 *
 * Author: gsp-dalian-ued@cisco.com
 */

import * as _ from 'lodash';
import { Application } from './application';
import { CommonAction } from './common-action';
import { Drawer } from './drawer';
import { Edge } from './edge';
import { Group } from './group';
import { Node } from './node';
import { Tooltip } from './tooltip';

import { Topo } from './topo';

export class Network {
  public icons: any = {};
  public callback: any;
  private loader = PIXI.loader;
  private topo: Topo;
  private drawer: Drawer;
  private app: Application;
  private action: CommonAction;
  private tooltip: Tooltip;

  constructor(domRegex: string) {
    PIXI.utils.skipHello();
    this.topo = new Topo(this.loader);
    this.drawer = new Drawer(domRegex, this.topo);
    this.app = this.drawer.getWhiteBoard();
    this.tooltip = new Tooltip();
    this.action = new CommonAction(this.app, this.topo, this.tooltip);
  }

  public addIconResource(iconList: any) {
    // this.loader.add(key, image);
    // return this.loader;
    PIXI.loader.reset();
    _.each(iconList, (icon) => {
      PIXI.loader.add(icon.name, icon.url);
    });
    PIXI.loader
      .load((loader: any, resources: any) => {
        _.each(resources, (resource) => {
          this.icons[resource.name] = {
            texture: resource.texture,
            width: iconList[resource.name].width,
            height: iconList[resource.name].height,
          };
        });
        this.callback();
        this.callback = Function();
      });
  }

  public createNode(iconName?: string) {
    const name = iconName;
    let icon: any;
    if (name) {
      icon = this.icons[name];
    } else {
      icon = undefined;
    }
    return this.topo.createNode(icon);
  }

  public createGroup() {
    return this.topo.createGroup();
  }

  public createEdge(startNode: Node | Group, endNode: Node | Group) {
    return this.topo.createEdge(startNode, endNode);
  }

  public clear() {
    const elements = this.topo.getElements();
    _.each(elements, (element) => {
      element.destroy();
    });
    _.remove(elements, undefined);
  }

  public getElements() {
    return this.topo.getElements();
  }

  public getNodes() {
    const elements = this.topo.getElements();
    const nodes = _.filter(elements, (node) => {
      return node instanceof Node;
    });
    return nodes;
  }

  public getNodeObj() {
    const nodeObj = {};
    const elements = this.topo.getElements();
    _.each(elements, (node) => {
      if (node instanceof Node && node.name) {
        const name: string = node.name;
        _.extend(nodeObj, {
          [name]: node,
        });
      }
    });
    return nodeObj;
  }

  public addElement(element: Node | Group | Edge) {
    this.topo.addElement(element);
  }

  public addElements(elements: Node[] | Group[] | Edge[]) {
    this.topo.addElements(elements);
  }

  public removeElements(element: PIXI.Container) {
    const elements = this.topo.getElements();
    _.remove(elements, elem => element === elem);
    if (element instanceof Edge) {
      const edgesGroupByNodesUID = this.topo.getEdgesGroup();
      const uidStr = element.edgeNodesSortUIDStr();
      const edge = _.get(edgesGroupByNodesUID, uidStr);
      edge[0].removeBrotherEdge(element);
    }
    element.destroy();
  }

  public setDrag() {
    this.action.dragContainer();
  }

  public setSelect() {
    this.action.setSelect();
  }

  public setZoom(num: number) {
    this.action.setZoom(num);
  }

  public zoomOver() {
    this.action.zoomOver();
  }

  public zoomReset() {
    this.action.zoomReset();
  }

  public syncView() {
    this.drawer.syncView();
  }

  public setClick(color?: any) {
    this.action.setClick(color);
  }

  public setTooltipDisplay(isDisplay: any) {
    this.tooltip.setTooltipDisplay(isDisplay);
  }

  public setBundle(edge: any) {
    this.action.setBundle(edge);
  }

  public bundleLabelToggle() {
    this.action.bundleLabelToggle();
  }

  public nodeLabelToggle() {
    this.action.nodeLabelToggle();
  }

}
