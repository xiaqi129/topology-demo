import * as _ from 'lodash';
import { Network } from '../../../../assets/lib/network.js';
import { TopoContext } from '../common/TopoContext';
import { CommonService } from './common-service';

export class TopoNetwork {
    public network: Network;
    public commonService: CommonService;
    public sourceNodes;
    public sourceEdges;
    public sourceGroups;
    // label
    public labelStyle = {
        fontSize: 12,
        fontWeight: 'bold',
        align: 'center',
        wordWrap: true,
    };
    // tooltip
    public tooltipStyle = {
        'backgroundColor': 'transparent',
        'color': 'black',
        'padding': '5px 20px',
        'border': '2px solid #ebebeb',
        'border-radius': '10px',
        'userSelect': 'none',
    };
    public defaultLineStyle = {
        arrowColor: 0x3099f1,
        lineColor: 0xDDDDDD,
        arrowAngle: 10,
        lineType: 0,
        lineFull: 0,
        lineWidth: 1,
    };
    private domRegex;
    constructor(
        domRegex: string,
        commonService: CommonService,
    ) {
        this.network = new Network(domRegex);
        this.domRegex = domRegex;
        (window as any).topo = this.network;
        this.commonService = commonService;
        this.sourceNodes = {};
        this.sourceEdges = [];
        this.sourceGroups = {};
    }

    public drawNoIConTopology(topoData) {
        const network = this.network;
        const devices = topoData.devices;
        const links = topoData.links;
        const groups = topoData.groups;
        const edgeGroups = topoData.edgeGroups;
        const dataFlows = topoData.dataFlows;
        const groupsList = this.commonService.keySort(groups);
        // create Node
        this.initNodesData(devices);
        // create Links
        this.initEdgesData(links);
        // create group
        this.initGroupsData(groupsList);
        // create edge group
        this.initEdgeGroupsData(edgeGroups);
        // create data flow
        this.initDataFlowsData(dataFlows);
        network.syncView();
        network.setDrag();
        network.setZoom();
        network.setClick();
        network.moveCenter();
        network.setBundelExpanded(false);
        network.toggleLabel(1, 2);
        window.addEventListener('resize', () => {
            network.moveCenter();
        });
        this.commonService.changeNetwork(network);
        this.doMouseWheel();
        // window.topo = this.network;
    }

    public drawTopology(topoData, imageData, callbacksecFunction?: any) {
        const network = this.network;
        network.initIconResource(imageData);
        const devices = topoData.devices;
        const links = topoData.links;
        const groups = topoData.groups;
        const dataFlows = topoData.dataFlows;
        const groupsList = this.commonService.keySort(groups);
        network.callback = () => {
            // create Node
            this.initNodesData(devices);
            // create Links
            this.initEdgesData(links);
            // create group
            this.initGroupsData(groupsList);
            network.syncView();
            network.setDrag();
            network.setZoom();
            network.setClick();
            network.moveCenter();
            network.setBundelExpanded(false);
            network.toggleLabel(1, 2);
            window.addEventListener('resize', () => {
                network.moveCenter();
            });
            this.commonService.changeNetwork(network);
            this.commonService.network = network;
            if (callbacksecFunction) {
                callbacksecFunction();
            }
        };
        this.doMouseWheel();
        // window.topo = this.network;

    }

    public initNodesData(devices) {
        const _t = this;
        const nodeObjList = [];
        const nodesColor = [];
        _.each(devices, device => {
            const node = _t.commonService.newNode(_t, device);
            _t.initNodeRightClickMenu(node);
            nodeObjList.push(node);
            nodesColor.push({
                'name': device.name,
                'color': device.style.color,
            });
            this.sourceNodes[device.name] = node;
        });
        this.commonService.changeNodesColor(nodesColor);
    }

    public initEdgesData(links) {
        const _t = this;
        const edgeObjList = [];
        _.each(links, link => {
            const edge = _t.commonService.newEdge(_t, link);
            // _t.initPhysicalEdgeRightClickMenu(edge);
            if (edge) {
                edgeObjList.push(edge);
            }
            this.sourceEdges = edgeObjList;
        });
    }

    public initGroupsData(groupsMap) {
        const groupObjList = [];
        const _t = this;
        _.each(groupsMap, (group, groupId) => {
            const newGroup = _t.commonService.newGroup(_t, group);
            groupObjList.push(newGroup);
            this.sourceGroups[groupId] = newGroup;
            // _t.initPhysicalGroupRightClickMenu(newGroup);
        });
        return groupObjList;
    }

    public initEdgeGroupsData(groupsMap) {
        const groupObjList = [];
        const _t = this;
        _.each(groupsMap, (group, groupId) => {
            const newGroup = _t.commonService.newEdgeGroup(_t, group);
            groupObjList.push(newGroup);
            this.sourceGroups[groupId] = newGroup;
            // _t.initPhysicalGroupRightClickMenu(newGroup);
        });
        return groupObjList;
    }

    public initDataFlowsData(dataFlows) {
        const groupObjList = [];
        const _t = this;
        _.each(dataFlows, (dataflow, groupId) => {
            const newGroup = _t.commonService.newDataFlow(_t, dataflow);
            groupObjList.push(newGroup);
            this.sourceGroups[groupId] = newGroup;
            // _t.initPhysicalGroupRightClickMenu(newGroup);
        });
        return groupObjList;
    }

    public initNodeRightClickMenu(node: Network.Node) {
        const _t = this;
        node.on('rightclick', (event: any) => {
            _t.network.menu.setMenuItems(TopoContext.nodeRightMenu);
            _t.network.menu.menuOnAction = id => {
                if (id === 'debug') {
                    const nodes = _t.network.getNodeObj();
                    const positionList = [];
                    _.each(nodes, (n) => {
                        positionList.push({
                            name: n.name,
                            x: n.x,
                            y: n.y,
                        });
                    });
                    console.log(positionList);
                }
            };
            _t.network.menu.setClass('popMenu');
            _t.network.menu.showMenu(event);
        });
    }

    public doMouseWheel() {
        const body = document.getElementById(this.domRegex);
        const network = this.network;
        body.addEventListener('wheel', () => {
            if (!TopoContext.labelToggle && !TopoContext.edgeLabelToggle) {
                network.toggleLabel(1, 2);
            } else if (
                TopoContext.labelToggle &&
                !TopoContext.edgeLabelToggle
            ) {
                network.toggleLabel(0, 2);
            } else if (
                !TopoContext.labelToggle &&
                TopoContext.edgeLabelToggle
            ) {
                network.toggleLabel(1, 0);
            } else if (TopoContext.labelToggle && TopoContext.edgeLabelToggle) {
                network.toggleLabel(0, 0);
            }
        });
    }

}
