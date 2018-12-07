import * as _ from 'lodash';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Network } from 'src/network/network';
import { data as topoData } from './simpleData';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.html',
  styleUrls: ['./simple.style.less']
}) export class SimpleComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
    this.renderTopo();
    console.log(topoData);
  }

  ngOnDestroy() {
    PIXI.loader.reset();
  }

  public renderTopo() {
    const network = new Network('div#network');
    const devices = topoData.devices;
    const links = topoData.links;
    const groups = topoData.groups;
    network.addResourceCache('switch', './assets/pic/cisco-WS-C49.png');
    network.addResourceCache('switchLayer3', './assets/pic/cisco-WS-C68.png');
    network.addResourceCache('router', './assets/pic/cisco-18.png');

    // create Node
    _.each(devices, (device) => {
      const client = device.clients.User_Mark;
      if (!(client === 'Hidden')) {
        const node = network.createNode();
        network.addElement(node);
        node.x = device.location.x;
        node.y = device.location.y;
        node.name = device.name;
        node.setLabel(node.name);
        node.setTooltip(node.name);
      }
    });
    // create Links

    const nodes = network.getNodeObj();

    _.each(links, (link) => {
      const srcNodeName = link.local_host;
      const destNodeName = link.remote_host;
      const srcNode = _.get(nodes, srcNodeName);
      const destNode = _.get(nodes, destNodeName);
      if (srcNode && destNode) {
        const edge = network.createEdge(srcNode, destNode);
        edge.setStyle({
          arrowColor: 0X006aad,
          arrowLength: 15,
          arrowType: 0,
          arrowWidth: 1,
          fillArrow: true,
          lineColor: 0xC7254E,
          lineDistance: 5,
          lineType: 0,
          lineWidth: 1,
        });
        network.addElement(edge);
        edge.setTooltip(`${edge.startNode.name} >>> ${edge.endNode.name}`);
      }
    });

    const group = _.get(groups, 'Country#@Malaysia&@City#@Kuala Lumpur&@Site#@Remote_ATM');
    const newGroup = network.createGroup();
    const bgColor = group.style.bgColor;
    network.addElement(newGroup);
    newGroup.name = group.id;
    _.each(group.children, (node) => {
      const groupNode = _.get(nodes, node);
      if (groupNode) {
        newGroup.addChildNodes(groupNode);
      }
    });
    newGroup.setStyle({
      fillOpacity: 1,
      fillColor: this.rgb2hex(bgColor)
    });
    console.log(newGroup);
    // newGroup.setExpaned(false);
    // _.each(groups, (group) => {
    //   const bgColor = group.style.bgColor;
    //   const newGroup = network.createGroup();
    //   const children = group.children;
    //   network.addElement(newGroup);
    //   newGroup.name = group.id;
    //   _.each(children, (node) => {
    //     const groupNode = _.get(nodes, node);
    //     if (groupNode) {
    //       newGroup.addChildNodes(groupNode);
    //     }
    //   });
    //   newGroup.setStyle({
    //     fillOpacity: 1,
    //     fillColor: this.rgb2hex(bgColor)
    //   });
    // });
    console.log(network.getElements());

    // const groupA = network.createGroup();
    // network.addElement(groupA);
    // const groupANodes = _.slice(_.shuffle(_.dropRight(nodes, (num / 2) + 1)), 0, 3);
    // _.each(groupANodes, (node) => {
    //   node.setStyle({ lineColor: 0xf55d54 });
    //   groupA.addChildNodes(node);
    //   groupA.setStyle({
    //     fillOpacity: 0.6,
    //     fillColor: 0xcddc39,
    //   });
    // });
    // groupA.addEventListener('click', (edges: any) => {
    //   alert(`${edges.length} link[s] referenced.`);
    // });


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

  public rgb2hex(rgb) {
    return (rgb && rgb.length === 4) ? '0X' +
     ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) +
     ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
     ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) : '';
   }
}
