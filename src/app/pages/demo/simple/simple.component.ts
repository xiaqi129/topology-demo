import * as _ from 'lodash';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Network } from 'src/network/network';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.html',
  styleUrls: ['./simple.style.less']
}) export class SimpleComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
    this.renderTopo();
  }

  ngOnDestroy() {
    PIXI.loader.reset();
  }

  public renderTopo() {
    const network = new Network('div#network');
    const num = 50;
    network.addResourceCache('switch', './assets/pic/cisco-WS-C49.png');
    network.addResourceCache('switchLayer3', './assets/pic/cisco-WS-C68.png');
    network.addResourceCache('router', './assets/pic/cisco-18.png');

    for (let i = 0, len: number = num; i < len;) {
      i += 1;
      const node = network.createNode('router');
      network.addElement(node);
      node.x = Math.random() * 1800;
      node.y = Math.random() * 900;

      const labelStyleOptions = {
        fontSize: 10,
        fontWeight: 'bold',
      };
      const label = network.createLabel(node.getUID(), labelStyleOptions);
      node.addChild(label);
      network.addTooltip(node);
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
        network.addTooltip(edge);
        network.addElement(edge);

        // edge.setBundleStyle(1);
        j += 1;
      }
      i += 2;

    }

    const groupA = network.createGroup();
    network.addElement(groupA);

    const groupANodes = _.slice(_.shuffle(_.dropRight(nodes, (num / 2) + 1)), 0, 3);
    _.each(groupANodes, (node) => {
      node.setStyle({ lineColor: 0xf55d54 });
      groupA.addChildNodes(node);
      groupA.setStyle({
        fillOpacity: 0.6,
        fillColor: 0xcddc39,
      });
    });
    groupA.addEventListener('click', (edges: any) => {
      alert(`${edges.length} link[s] referenced.`);
    });

    const groupB = network.createGroup();
    network.addElement(groupB);

    const groupBNodes = _.slice(_.shuffle(_.dropRight(nodes, (num / 2) + 1)), 0, 3);
    _.each(groupBNodes, (node) => {
      node.setStyle({ lineColor: 0xe91e63 });
      groupB.addChildNodes(node);
      groupB.setStyle({
        fillOpacity: 0.6,
        fillColor: 0xe91e63,
      });
    });
    groupB.addEventListener('click', (edges: any) => {
      alert(`${edges.length} link[s] referenced.`);
    });
    // group.setExpaned(false);

    network.syncView();
    network.setDrag();
    network.setClick();

    const zoomIn = document.querySelector('button.btn_zoomIn');
    const zoomOut = document.querySelector('button.btn_zoomOut');
    const zoomOver = document.querySelector('button.btn_zoomOver');
    const dragOrSelect = document.querySelector('button.btn_dragOrSelect');
    const tooltipToggle = document.querySelector('button.btn_tooltipToggle');
    zoomIn.addEventListener('click', () => {
      network.setZoom(0.3);
    });
    zoomOut.addEventListener('click', () => {
      network.setZoom(-0.3);
    });
    if (zoomOver) {
      let isZoom = true;
      zoomOver.addEventListener('click', () => {
        if (isZoom) {
          network.zoomOver();
        } else {
          network.zoomReset();
        }
        isZoom = !isZoom;
      });
    }
    if (dragOrSelect) {
      let isDrag = false;
      dragOrSelect.addEventListener('click', () => {
        if (isDrag) {
          network.setDrag();
        } else {
          network.setSelect();
        }
        isDrag = !isDrag;
      });
    }
    if (tooltipToggle) {
      let isDisplay = true;
      tooltipToggle.addEventListener('click', () => {
        isDisplay = !isDisplay;
        network.setTooltipDisplay(isDisplay);
      });
    }
  }
}
