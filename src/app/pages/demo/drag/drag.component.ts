import * as _ from 'lodash';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Network } from 'src/network/network';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.less']
})
export class DragComponent implements OnInit, OnDestroy {

  network: Network;

  constructor() { }

  ngOnInit() {
    this.renderTopo();
  }

  ngOnDestroy() {
    PIXI.loader.reset();
  }

  public renderTopo() {
    const iconResource = {
      switch: { name: 'switch', url: './pic/cisco-WS-C49.png', width: '40', height: '40' },
      switchLayer3: { name: 'switchLayer3', url: './pic/cisco-WS-C68.png', width: '40', height: '40' },
      router: { name: 'router', url: './pic/cisco-18.png', width: '40', height: '40' },
    };
    this.network = new Network('div#network');
    this.network.addIconResource(iconResource);
    this.network.callback = () => {
      const num = 50;
      for (let i = 0, len: number = num; i < len;) {
        i += 1;
        const node = this.network.createNode('router');
        this.network.addElement(node);
        node.x = Math.random() * 1800;
        node.y = Math.random() * 900;
      }
      const nodes = this.network.getElements();
      for (let i = 0, len: number = num; i < len;) {
        const srcNode = nodes[i];
        const destNode = nodes[i + 1];
        for (let j = 0; j < 2;) {
          const edge = this.network.createEdge(srcNode, destNode);
          edge.setStyle({
            arrowColor: 0X006aad,
            arrowLength: 15,
            arrowType: 0,
            arrowWidth: 1,
            fillArrow: true,
            lineColor: 0xb7b7b7,
            lineDistance: 5,
            lineType: 1,
            lineWidth: 1,
          });
          this.network.addElement(edge);
          j += 1;
        }
        i += 2;

      }

      this.network.syncView();
      this.network.setDrag();
    };
  }
}
