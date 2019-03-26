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
        lineDistance: 0,
        lineType: 0,
        lineFull: 0,
        lineWidth: 1,
    };
    constructor(
        domRegex: string,
        commonService: CommonService,
    ) {
        this.network = new Network(domRegex);
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
        const groupsList = this.commonService.keySort(groups);
        // create Node
        this.initNodesData(devices);
        // // create Links
        this.initEdgesData(links);
        // // create group
        this.initGroupsData(groupsList);
        // this.commonService.reDraw(this);
        this.addElements();
        network.syncView();
        network.setDrag();
        network.setZoom();
        network.moveCenter();
        network.setBundelExpanded(false);
        TopoContext.labelToggle = true;
        network.nodeLabelToggle(true);
        TopoContext.edgeLabelToggle = false;
        network.edgeLabelToggle(false);
        this.commonService.reDraw(this);
        window.addEventListener('resize', () => {
            network.moveCenter();
        });
        // window.topo = this.network;
    }

    public initNodesData(devices) {
        const _t = this;
        const nodeObjList = [];
        _.each(devices, device => {
            const node = _t.commonService.newNoIConNode(_t, device);
            _t.initNodeRightClickMenu(node);
            nodeObjList.push(node);
            this.sourceNodes[device.name] = node;
        });
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

    public addElements() {
        const network = this.network;
        network.clear();
        // add nodes
        network.addElements(this.sourceNodes);
        // add edges
        network.addElements(this.sourceEdges);
        // add groups
        network.addElements(this.sourceGroups);
    }

    public initNodeRightClickMenu(node: Network.Node) {
        const _t = this;
        node.on('rightclick', (event: any) => {
            _t.network.menu.setMenuItems(TopoContext.nodeRightMenu);
            _t.network.menu.menuOnAction = id => {
                if (id === 'debug') {
                    console.log('Node:', node);
                }
            };
            _t.network.menu.setClass('popMenu');
            _t.network.menu.showMenu(event);
        });
    }

}
