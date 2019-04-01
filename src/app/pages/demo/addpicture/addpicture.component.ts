import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
  selector: 'app-addpicture',
  templateUrl: './addpicture.component.html',
  styleUrls: ['./addpicture.component.less']
})
export class AddPictureComponent implements OnInit {
  static data = {
    devices: [
      {
        'name': 'name-1',
        'location': {
          'x': 200,
          'y': 200,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X74b9ff',
          'width': 20,
        },
      },
      {
        'name': 'name-2',
        'location': {
          'x': 350,
          'y': 250,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X55efc4',
          'width': 20,
        },
      },
      {
        'name': 'name-3',
        'location': {
          'x': 500,
          'y': 320,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xacbfeb',
          'width': 20,
        },
      },
      {
        'name': 'name-4',
        'location': {
          'x': 430,
          'y': 450,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X0984e3',
          'width': 20,
        },
      },
      {
        'name': 'name-5',
        'location': {
          'x': 270,
          'y': 500,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xfcc242',
          'width': 20,
        },
      },
      {
        'name': 'name-6',
        'location': {
          'x': 150,
          'y': 400,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xa378b4',
          'width': 20,
        },
      },
      {
        'name': 'name-7',
        'location': {
          'x': 50,
          'y': 300,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0X55a6cb',
          'width': 20,
        },
      },
      {
        'name': 'name-8',
        'location': {
          'x': 0,
          'y': 500,
        },
        'label': true,
        'tooltip': false,
        'style': {
          'color': '0Xa3d89f',
          'width': 20,
        },
      },

    ],
    links: [
      {
        'local_host': 'name-1',
        'remote_host': 'name-2',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-2',
        'remote_host': 'name-3',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-1',
        'remote_host': 'name-4',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-1',
        'remote_host': 'name-7',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-2',
        'remote_host': 'name-4',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-3',
        'remote_host': 'name-7',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-3',
        'remote_host': 'name-6',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-3',
        'remote_host': 'name-8',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-3',
        'remote_host': 'name-4',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-6',
        'remote_host': 'name-5',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-6',
        'remote_host': 'name-7',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-6',
        'remote_host': 'name-8',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-5',
        'remote_host': 'name-8',
        'label': true,
        'tooltip': false,
      },
      {
        'local_host': 'name-7',
        'remote_host': 'name-8',
        'label': true,
        'tooltip': false,
      },

    ],
    groups: [

    ]
  };
  static iconResource = {
    resources: { name: 'resources', url: '../../../../assets/pic/flag.json' },
  };
  constructor(
    public commonService: CommonService,
  ) { }

  ngOnInit() {
    this.renderTopo();
  }

  public renderTopo() {
    const network = new TopoNetwork(
      'network',
      this.commonService,
    );
    network.drawTopology(AddPictureComponent.data, AddPictureComponent.iconResource, this.addMark.bind(this));
  }

  public addMark() {
    const nodes = this.commonService.network.getNodeObj();
    _.each(nodes, (node) => {
      node.addNodeMark('flag', 'top-right', 30, 30);
    });
  }
}
