import * as _ from 'lodash';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Network } from 'src/network/network';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.less']
})
export class ElementComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    this.renderTopo();
  }

  ngOnDestroy() {
    PIXI.loader.reset();
  }

  public renderTopo() {
    const network = new Network('div#network');
    network.addResourceCache('switch', './assets/pic/cisco-WS-C49.png');

    // add nodes
    const num = 5;
    for (let i = 0, len: number = num; i < len;) {
      i += 1;
      const node = network.createNode();
      network.addElement(node);

      // add label
      const labelStyleOptions = {
        fontSize: 10,
        fontWeight: 'bold',
      };
      const label = network.createLabel(node.getUID(), labelStyleOptions);
      node.addChild(label);
    }

    const nodes = network.getElements();

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
    this.createEdge(nodes[0], nodes[1], 2, edgeStyles, network);
    this.createEdge(nodes[1], nodes[2], 4, edgeStyles, network);
    this.createEdge(nodes[2], nodes[3], 1, edgeStyles, network);
    this.createEdge(nodes[4], nodes[2], 1, edgeStyles, network);
    this.createEdge(nodes[3], nodes[0], 1, edgeStyles, network);
    this.createEdge(nodes[3], nodes[4], 1, edgeStyles, network);
    for (let i = 0; i < 2; i++) {
      this.createEdge(nodes[1], nodes[i + 3], 1, edgeStyles, network);
    }

    network.syncView();
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
}
