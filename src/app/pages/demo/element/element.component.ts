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
    const num = 8;
    network.addResourceCache('router', './assets/pic/cisco-18.png');

    for (let i = 0, len: number = num; i < len;) {
      i += 1;
      const node = network.createNode();
      network.addElement(node);
      node.x = Math.random() * 1800;
      node.y = Math.random() * 900;
    }
    const nodes = network.getElements();
    for (let i = 0, len: number = num; i < len;) {
      const srcNode = nodes[i];
      const destNode = nodes[i + 1];
      for (let j = 0; j < 2;) {
        const edge = network.createEdge(srcNode, destNode);
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
        network.addElement(edge);

        j += 1;
      }
      i += 2;

    }

    network.syncView();
    // network.setSelect();

    const zoomIn = document.querySelector('button.btn_zoomIn');
    zoomIn.addEventListener('click', () => {
      network.setZoom(0.3);
    });
  }

}
