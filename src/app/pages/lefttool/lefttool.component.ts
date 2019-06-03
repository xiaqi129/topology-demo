import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CommonService } from '../demo/common/common-service';

export interface IColorList {
    name: string;
    color: string;
}

@Component({
    selector: 'app-lefttool',
    templateUrl: './lefttool.html',
    styleUrls: ['./lefttool.style.less']
})
export class LeftToolComponent implements OnInit {
    public network: any;
    private isDrag: boolean = true;
    private visibleLabel: boolean = true;
    private nodesColorList: IColorList[] = [];
    constructor(
        private commonService: CommonService,
    ) { }
    ngOnInit() {
        this.commonService.currentNetork.subscribe(network => this.network = network);
        this.commonService.nodesColor.subscribe(nodesColorList => this.nodesColorList = nodesColorList);
        this.setStyle();
    }

    public setSelect() {
        this.isDrag = false;
        this.setStyle();
        this.network.setSelect();
    }

    public toggleLabel() {
        this.visibleLabel = !this.visibleLabel;
        this.network.nodeLabelToggle(this.visibleLabel);
    }

    public setDrag() {
        this.isDrag = true;
        this.setStyle();
        this.network.setDrag();
    }

    public moveCenter() {
        const network = this.network;
        const groups = network.getGroupObj();
        const groupsIsExpandedList = [];
        if (groups) {
            _.each(groups, (group) => {
                groupsIsExpandedList.push(group.isExpanded);
            });
        }
        const flag = _.every(groupsIsExpandedList, Boolean);
        if (flag) {
            this.network.zoomOver();
        }
    }

    public showTooltip() {
        const pop = document.getElementById('pop');
        pop.style.display = 'block';
    }

    public hideTooltip() {
        const pop = document.getElementById('pop');
        pop.style.display = 'none';
    }

    public showElements() {
        const edges = this.network.getEdgeObj();
        const nodes = this.network.getNodeObj();
        const groups = this.network.getGroupObj();
        const groupsIsExpandedList = [];
        if (groups) {
            _.each(groups, (group) => {
                groupsIsExpandedList.push(group.isExpanded);
            });
        }
        const flag = _.every(groupsIsExpandedList, Boolean);
        if (flag) {
            _.each(edges, (edge) => {
                edge.visible = true;
            });
            _.each(nodes, (node) => {
                node.visible = true;
            });
        }
        _.each(groups, (group) => {
            group.draw();
        });
    }

    public hideElement() {
        const selectNodes = this.network.getSelectedNodes();
        const selectEdge = this.network.getSelectEdge();
        if (selectNodes) {
            _.each(selectNodes, (node) => {
                this.network.hideElement(node);
            });
        }
        if (selectEdge) {
            selectEdge.visible = false;
        }
    }

    public changeTheme(value) {
        const nodes = this.network.getNodeObj();
        switch (value) {
            case 'base':
                this.network.changeBackgroundColor(0XFFFFFF);
                _.each(this.nodesColorList, (n: IColorList) => {
                    const node = nodes[n.name];
                    node.setStyle({
                        fillColor: n.color,
                    });
                    if (node.getChildByName('node_label')) {
                        node.setLabelStyle({
                            fill: 0x0386d2,
                        });
                    }
                });
                this.network.changeBundleLabelColor(0X0081cf);
                break;
            case 'blue':
                this.network.changeBackgroundColor(0X000000);
                _.each(nodes, (node) => {
                    node.setStyle({
                        fillColor: 0X74b9ff
                    });
                    if (node.getChildByName('node_label')) {
                        node.setLabelStyle({
                            fill: 0X74b9ff,
                        });
                    }
                });
                this.network.changeBundleLabelColor(0X0081cf);
                break;
            case 'green':
                this.network.changeBackgroundColor(0X000000);
                _.each(nodes, (node) => {
                    node.setStyle({
                        fillColor: 0X55efc4
                    });
                    if (node.getChildByName('node_label')) {
                        node.setLabelStyle({
                            fill: 0X55efc4,
                        });
                    }
                });
                this.network.changeBundleLabelColor(0X55efc4);
                break;
            case 'dark':
                this.network.changeBackgroundColor(0X000000);
                _.each(this.nodesColorList, (n: IColorList) => {
                    const node = nodes[n.name];
                    node.setStyle({
                        fillColor: n.color,
                    });
                    if (node.getChildByName('node_label')) {
                        node.setLabelStyle({
                            fill: 0X74b9ff,
                        });
                    }
                });
                this.network.changeBundleLabelColor(0X0081cf);
                break;
            case 'slate':
                this.network.changeBackgroundColor(0X262b3e);
                _.each(nodes, (node) => {
                    node.setStyle({
                        fillColor: 0Xffffff
                    });
                    if (node.getChildByName('node_label')) {
                        node.setLabelStyle({
                            fill: 0Xffffff,
                        });
                    }
                });
                this.network.changeBundleLabelColor(0X0081cf);
                break;
            case 'yellow':
                this.network.changeBackgroundColor(0X000000);
                _.each(nodes, (node) => {
                    node.setStyle({
                        fillColor: 0Xfdca6d
                    });
                    if (node.getChildByName('node_label')) {
                        node.setLabelStyle({
                            fill: 0Xfdca6d,
                        });
                    }
                });
                this.network.changeBundleLabelColor(0Xfdca6d);
                break;
            case 'default':
                this.network.changeBackgroundColor(0XFFFFFF);
                _.each(this.nodesColorList, (n: IColorList) => {
                    const node = nodes[n.name];
                    node.setStyle({
                        fillColor: n.color,
                    });
                    if (node.getChildByName('node_label')) {
                        node.setLabelStyle({
                            fill: 0X74b9ff,
                        });
                    }
                });
                this.network.changeBundleLabelColor(0X0081cf);
                break;
        }
    }

    private setStyle() {
        const select = document.getElementById('select');
        const drag = document.getElementById('drag');
        if (this.isDrag) {
            drag.classList.add('selected');
            select.classList.remove('selected');
        } else {
            select.classList.add('selected');
            drag.classList.remove('selected');
        }
    }

}
