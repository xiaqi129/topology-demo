import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Network } from 'src/network/network';
import { Node } from 'src/network/node';
import { Edge } from 'src/network/edge';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.less']
})
export class IconComponent implements OnInit {

  network: Network;
  iconResource = {
    switch: { name: 'switch', url: './pic/cisco-WS-C49.png', width: '40', height: '40' },
    switchLayer3: { name: 'switchLayer3', url: './pic/cisco-WS-C68.png', width: '40', height: '40' },
    router: { name: 'router', url: './pic/cisco-18.png', width: '40', height: '40' },
  };

  constructor() { }

  ngOnInit() {
    this.network = new Network('div#network');
    this.network.addIconResource(this.iconResource);
    this.network.callback = () => {
      this.renderTopo('switch');
    };
  }

  public renderTopo(name?: string) {

    // add nodes
    const num = 5;
    for (let i = 0, len: number = num; i < len; i++) {
      const node = this.network.createNode(name);
      this.network.addElement(node);
    }

    const nodes = this.network.getElements();

    // positon nodes
    nodes[0].x = 200;
    nodes[0].y = 200;
    nodes[1].x = 400;
    nodes[1].y = 100;
    nodes[2].x = 600;
    nodes[2].y = 100;
    nodes[3].x = 400;
    nodes[3].y = 300;
    nodes[4].x = 600;
    nodes[4].y = 300;

    // edge styles
    const edgeStyles = {
      arrowColor: 0X006aad,
      arrowLength: 15,
      arrowType: 0,
      arrowWidth: 1,
      fillArrow: true,
      lineColor: 0xb7b7b7,
      lineDistance: 5,
      lineType: 0,
      lineWidth: 1,
    };

    // draw edges
    this.createEdge(nodes[0], nodes[1], 2, edgeStyles, this.network);
    this.createEdge(nodes[1], nodes[2], 4, edgeStyles, this.network);
    this.createEdge(nodes[2], nodes[3], 1, edgeStyles, this.network);
    this.createEdge(nodes[4], nodes[2], 1, edgeStyles, this.network);
    this.createEdge(nodes[3], nodes[0], 1, edgeStyles, this.network);
    this.createEdge(nodes[3], nodes[4], 1, edgeStyles, this.network);
    for (let i = 0; i < 2; i++) {
      this.createEdge(nodes[1], nodes[i + 3], 1, edgeStyles, this.network);
    }

    this.network.syncView();

  }

  /**
   * createEdgeTools
   * @param src str node
   * @param dest dest node
   * @param num num of edge
   * @param styles edge styles
   * @param container the container to add edge
   */
  public createEdge(src: Node, dest: Node, num: number, styles: any, container: any) {
    for (let i = 0; i < num; i++) {
      const edge = container.createEdge(src, dest);
      edge.setStyle(styles);
      container.addElement(edge);
    }
  }

  /**
   * create node with random position
   */
  public createNode(name?: string) {
    const node = this.network.createNode(name);
    node.x = Math.random() * 400;
    node.y = Math.random() * 300;
    this.network.addElement(node);

    this.network.syncView();
  }

  public changeNode(name: string) {

    this.network.clear();
    this.renderTopo(name);
  }
}
