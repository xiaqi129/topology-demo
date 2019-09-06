import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { TopoNetwork } from './TopoNetwork';
import { BehaviorSubject } from 'rxjs';

export interface IColorList {
    name: string;
    color: string;
}

@Injectable({
    providedIn: 'root',
})
export class CommonService {
    public network;
    public currentNetork = new BehaviorSubject<object>({});
    public nodesColor = new BehaviorSubject<Array<IColorList>>([]);

    public rgb2hex(rgb) {
        return rgb && rgb.length === 4
            ? '0X' +
            ('0' + parseInt(rgb[0], 10).toString(16)).slice(-2) +
            ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
            ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2)
            : '';
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

    public changeNetwork(network): void {
        this.currentNetork.next(network);
    }

    public changeNodesColor(nodesColor): void {
        this.nodesColor.next(nodesColor);
    }
    public reDraw(topoNetwork) {
        const network = topoNetwork.network;
        _.each(network.getGroupObj(network), function (group, groupId) {
            group.draw();
        });
        _.each(network.getEdgeObj(), function (edge, edgeId) {
            edge.draw();
        });
    }

    public newNode(topoNetwork: TopoNetwork, nodeInfo) {
        const network = topoNetwork.network;
        let node;
        if (nodeInfo.image) {
            node = network.createNode(nodeInfo.image);
            node.iconWidth = nodeInfo.width;
            node.iconHeight = nodeInfo.height;
            node.draw();
        } else {
            node = network.createNode();
        }
        node.labelStyle = nodeInfo.labelStyle || topoNetwork.labelStyle;
        node.x = nodeInfo.location.x;
        node.y = nodeInfo.location.y;
        node.name = nodeInfo.name;
        node.initStyle({
            width: nodeInfo.style.width,
            fillColor: nodeInfo.style.color
        });
        if (nodeInfo.label) {
            const label = node.setLabel(nodeInfo.name, node.labelStyle);
            if (nodeInfo.image) {
                label.anchor.set(0.5, -1);
            } else {
                label.anchor.set(0.5, -1.5);
            }
        }
        if (nodeInfo.tooltip) {
            node.clients = nodeInfo.clients;
            const nodeTooltipContent = `
            <table class="tooltiptable">
            <tr>
            <th colspan="2">
              ${nodeInfo.name}
              </th></tr>
              <tr class="topLine">
              <th>Manufacture:</th>
              <td>${nodeInfo.clients.User_Manufacturer}</td>
              </tr>
              <tr>
              <th>Platform:</th>
              <td>${nodeInfo.clients.platform}</td>
              </tr>
              <tr>
              <th>Device IP:</th>
              <td>${nodeInfo.clients.deviceIP}</td>
              </tr>
              <tr>
              <th>From Source:</th>
              <td>${nodeInfo.clients.device_source}</td>
              </tr>
              </table>`;
            node.setTooltip(nodeTooltipContent, topoNetwork.tooltipStyle);
        }
        network.addElement(node);
        return node;
    }

    public newEdge(topoNetwork: TopoNetwork, edgeInfo) {
        const network = topoNetwork.network;
        const srcNodeName = edgeInfo.local_host;
        const destNodeName = edgeInfo.remote_host;
        const srcNode = topoNetwork.sourceNodes[srcNodeName];
        const destNode = topoNetwork.sourceNodes[destNodeName];
        if (srcNode && destNode) {
            const edge = network.createEdge(srcNode, destNode);
            const linkTooltipContent = `
                <table class="tooltiptable">
                  <tr>
                  <th>Local Name</th>
                  <td>${edgeInfo.local_host}</td>
                  </tr>
                  <tr>
                  <th>Local Interface</th>
                  <td>${edgeInfo.local_int}</td>
                  </tr>
                  <tr>
                  <th>Remote Interface</th>
                  <td>${edgeInfo.remote_int}</td>
                  </tr>
                  <tr>
                  <th>Remote name</th>
                  <td>${edgeInfo.remote_host}</td>
                  </tr>
                  <tr>
                  <th>Link Protocol</th>
                  <td>${edgeInfo.link_protocol}</td>
                  </tr>
                  <tr>
                  <th>Link State</th>
                  <td>${edgeInfo.link_state}</td>
                  </tr>
                  </table>`;
            edge.fromId = srcNodeName;
            edge.endId = destNodeName;
            edge.name = edgeInfo.name;
            const style = _.cloneDeep(topoNetwork.defaultLineStyle);
            if (edgeInfo.style) {
                _.extend(style, edgeInfo.style);
            }
            edge.initStyle(style);
            if (edgeInfo.label) {
                edge.setLabel(edgeInfo.local_int, edgeInfo.remote_int, {
                    fontSize: 12,
                });
            }
            if (edgeInfo.tooltip) {
                edge.setTooltip(linkTooltipContent, topoNetwork.tooltipStyle);
            }
            network.addElement(edge);
            return edge;
        }
    }

    public newGroup(topoNetwork: TopoNetwork, groupInfo) {
        const network = topoNetwork.network;
        const nodes = topoNetwork.sourceNodes;
        const bgColor = groupInfo.style.bgColor;
        const opacity = groupInfo.style.opacity || 0.5;
        const newGroup = network.createGroup();
        newGroup.name = groupInfo.name;
        if (typeof groupInfo.display_style === 'string') {
            switch (groupInfo.display_style) {
                case 'polygon':
                    newGroup.setOutlineStyle(1);
                    break;
                case 'rect':
                    newGroup.setOutlineStyle(3);
                    break;
                case 'Ellipse':
                    newGroup.setOutlineStyle(2);
                    break;
                default:
                    break;
            }
        } else {
            newGroup.setOutlineStyle(groupInfo.display_style);
        }
        newGroup.display_style = groupInfo.display_style;
        newGroup.clients = groupInfo.clients;
        _.each(groupInfo.children, nodeName => {
            const groupNode = nodes[nodeName];
            if (groupNode) {
                newGroup.addChildNodes(groupNode);
            }
        });
        if (groupInfo.style) {
            newGroup.initStyle(groupInfo.style);
        }
        if (groupInfo.label) {
            newGroup.setLabel(groupInfo.name, groupInfo.label_position);
        }
        if (groupInfo.toggle) {
            newGroup.setToggleExpanded(groupInfo.toggle);
        }
        network.addElement(newGroup);
        return newGroup;
    }

    public newEdgeGroup(topoNetwork: TopoNetwork, groupInfo) {
        const network = topoNetwork.network;
        const edges = topoNetwork.sourceEdges;
        const newGroup = network.createEdgeGroup();
        newGroup.name = groupInfo.name;
        newGroup.clients = groupInfo.clients;
        _.each(groupInfo.children, (child) => {
            const edge: any = _.find(edges, (e: any) => {
                return e.name === child;
            });
            if (edge) {
                newGroup.addChildEdges(edge);
            }
        });
        if (groupInfo.style) {
            newGroup.initStyle(groupInfo.style);
        }
        network.addElement(newGroup);
        return newGroup;
    }

    public newDataFlow(topoNetwork: TopoNetwork, edgeInfo) {
        const network = topoNetwork.network;
        const srcNodeName = edgeInfo.local_host;
        const destNodeName = edgeInfo.remote_host;
        const srcNode = topoNetwork.sourceNodes[srcNodeName];
        const destNode = topoNetwork.sourceNodes[destNodeName];
        if (srcNode && destNode) {
            const dataflow = network.createDataFlow(srcNode, destNode);
            dataflow.name = edgeInfo.name;
            const style = _.cloneDeep(topoNetwork.defaultLineStyle);
            if (edgeInfo.style) {
                _.extend(style, edgeInfo.style);
            }
            dataflow.initStyle(style);
            network.addElement(dataflow);
            return dataflow;
        }
    }
}
