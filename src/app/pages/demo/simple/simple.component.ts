import * as _ from 'lodash';
import { Component, OnInit } from '@angular/core';
import { Network } from 'src/network/network';
import { data as topoData } from './simpleData';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.html',
  styleUrls: ['./simple.style.less']
}) export class SimpleComponent implements OnInit {

  network: Network;

  constructor() {
  }

  ngOnInit() {
    this.renderTopo();
  }

  public renderTopo() {
    const iconResource = {
      switch: { name: 'switch', url: './pic/cisco-WS-C49.png', width: '10', height: '10' },
      switchLayer3: { name: 'switchLayer3', url: './pic/cisco-WS-C68.png', width: '20', height: '20' },
      router: { name: 'router', url: './pic/cisco-18.png', width: '10', height: '10' },
    };
    this.network = new Network('div#network');
    this.network.addIconResource(iconResource);

    this.network.callback = () => {
      const devices = topoData.devices;
      const links = topoData.links;
      const groups = topoData.groups;
      const groupsList = this.keySort(groups);

      // create Node

      const labelStyle = {
        fontSize: '0.6em',
        fontWeight: 'bold',
      };
      _.each(devices, (device) => {
        const client = device.clients.User_Mark;
        if (!(client === 'Hidden')) {
          const node = this.network.createNode('router');
          this.network.addElement(node);
          node.x = device.location.x;
          node.y = device.location.y;
          node.name = device.name;
          // node.setLabel(node.name, labelStyle);
          node.setTooltip(node.name);
        }
      });
      // create Links

      const nodes = this.network.getNodeObj();

      _.each(links, (link) => {
        const srcNodeName = link.local_host;
        const destNodeName = link.remote_host;
        const srcNode = _.get(nodes, srcNodeName);
        const destNode = _.get(nodes, destNodeName);
        if (srcNode && destNode) {
          const edge = this.network.createEdge(srcNode, destNode);
          edge.setStyle({
            arrowColor: 0X006aad,
            arrowLength: 13,
            arrowType: 3,
            arrowWidth: 0.01,
            arrowAngle: 10,
            fillArrow: true,
            lineColor: 0xC7254E,
            lineDistance: 0,
            lineType: 0,
            lineWidth: 0.1,
          });
          this.network.addElement(edge);
          edge.setTooltip(`${edge.startNode.name} >>> ${edge.endNode.name}`);
        }
      });

      _.each(groupsList, (group) => {
        const bgColor = group.style.bgColor;
        const newGroup = this.network.createGroup();
        const children = group.children;
        this.network.addElement(newGroup);
        newGroup.name = group.id;
        newGroup.setOutlineStyle(2);
        _.each(children, (node) => {
          const groupNode = _.get(nodes, node);
          if (groupNode) {
            newGroup.addChildNodes(groupNode);
          }
        });
        newGroup.setStyle({
          fillOpacity: 0.3,
          fillColor: this.rgb2hex(bgColor)
        });
      });
      console.log(this.network.getElements());


      this.network.syncView();
      this.network.setDrag();
      this.network.setClick();

      const zoomIn = document.querySelector('button.btn_zoomIn');
      const zoomOut = document.querySelector('button.btn_zoomOut');
      const zoomOver = document.querySelector('button.btn_zoomOver');
      const dragOrSelect = document.querySelector('button.btn_dragOrSelect');
      const tooltipToggle = document.querySelector('button.btn_tooltipToggle');
      zoomIn.addEventListener('click', () => {
        this.network.setZoom(0.3);
      });
      zoomOut.addEventListener('click', () => {
        this.network.setZoom(-0.3);
      });
      if (zoomOver) {
        let isZoom = true;
        zoomOver.addEventListener('click', () => {
          if (isZoom) {
            this.network.zoomOver();
          } else {
            this.network.zoomReset();
          }
          isZoom = !isZoom;
        });
      }
      if (dragOrSelect) {
        let isDrag = false;
        dragOrSelect.addEventListener('click', () => {
          if (isDrag) {
            this.network.setDrag();
          } else {
            this.network.setSelect();
          }
          isDrag = !isDrag;
        });
      }
      if (tooltipToggle) {
        let isDisplay = true;
        tooltipToggle.addEventListener('click', () => {
          isDisplay = !isDisplay;
          this.network.setTooltipDisplay(isDisplay);
        });
      }
    };

  }

  public rgb2hex(rgb) {
    return (rgb && rgb.length === 4) ? '0X' +
      ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) +
      ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) : '';
  }

  public keySort(obj) {
    const keys = Object.keys(obj).sort();
    const sortedObj = {};
    for (const i in keys) {
      if (keys.hasOwnProperty(i)) {

        sortedObj[keys[i]] = obj[keys[i]];
      }
    }
    return sortedObj;
  }
}
