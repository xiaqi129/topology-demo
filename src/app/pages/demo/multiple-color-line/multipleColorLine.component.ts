import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common-service';
import { TopoNetwork } from '../common/TopoNetwork';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-multipleColorLine',
    templateUrl: './multipleColorLine.component.html',
    styleUrls: ['./multipleColorLine.component.less']
})
export class MultipleColorLineComponent implements OnInit {

    static data = {
        devices: [
            {
                name: 'name-1',
                location: {
                    x: 370.6532663300503, y: 517.3613065332017
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-2',
                location: {
                    x: 471.78492462150757, y: 651.1160804025487
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-3',
                location: {
                    x: 430, y: 292
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-4',
                location: {
                    x: 674.0482412044217, y: 435.80351758847894
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-5',
                location: {
                    x: 722, y: 582
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-6',
                location: {
                    x: 724, y: 176
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-7',
                location: {
                    x: 997.0170854255276, y: 390.13115577943336
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-8',
                location: {
                    x: 1042.6894472345734, y: 577.7140703522975
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-9',
                location: {
                    x: 1215.5919597973866, y: 241.6959799000361
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
            {
                name: 'name-10',
                location: {
                    x: 1349.3467336667336, y: 406.44271356837805
                },
                style: {
                    color: '0X74b9ff',
                    width: 10,
                },
                label: true,
            },
        ],
        multipleLine: [
            {
                name: '1',
                local_host: 'name-1',
                remote_host: 'name-4',
                startLineRatio: 0.3,
                startLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endLineRatio: 0.2,
                endLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                startArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                labels: {
                    1: {
                        content: '30%',
                        ratio: 0.3,
                        style: {
                            fill: 0X20c1a1,
                        }
                    },
                    2: {
                        content: '20%',
                        ratio: 1.8,
                        style: {
                            fill: 0X20c1a1,
                        }
                    }
                }
            },
            {
                name: '2',
                local_host: 'name-2',
                remote_host: 'name-4',
                startLineRatio: 0.7,
                startLineStyle: {
                    color: 0Xef5050,
                    opacity: 1,
                },
                endLineRatio: 0.3,
                endLineStyle: {
                    color: 0Xfcc242,
                    opacity: 1,
                },
                endArrowStyle: {
                    color: 0Xfcc242,
                    opacity: 1,
                },
                startArrowStyle: {
                    color: 0Xef5050,
                    opacity: 1,
                },
                labels: {
                    1: {
                        content: '70%',
                        ratio: 0.7,
                        style: {
                            fill: 0Xef5050,
                        }
                    },
                    2: {
                        content: '30%',
                        ratio: 1.7,
                        style: {
                            fill: 0Xfcc242,
                        }
                    }
                }
            },
            {
                name: '3',
                local_host: 'name-3',
                remote_host: 'name-4',
                startLineRatio: 0.35,
                startLineStyle: {
                    color: 0Xfcc242,
                    opacity: 1,
                },
                endLineRatio: 0.25,
                endLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                startArrowStyle: {
                    color: 0Xfcc242,
                    opacity: 1,
                },
                labels: {
                    1: {
                        content: '35%',
                        ratio: 0.7,
                        style: {
                            fill: 0Xfcc242,
                        }
                    },
                    2: {
                        content: '25%',
                        ratio: 1.75,
                        style: {
                            fill: 0X20c1a1,
                        }
                    }
                }
            },
            {
                name: '4',
                local_host: 'name-4',
                remote_host: 'name-5',
                startLineRatio: 0.1,
                startLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endLineRatio: 0.1,
                endLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                startArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                labels: {
                    1: {
                        content: '10%',
                        ratio: 0.1,
                        style: {
                            fill: 0X20c1a1,
                        }
                    },
                    2: {
                        content: '10%',
                        ratio: 1.9,
                        style: {
                            fill: 0X20c1a1,
                        }
                    }
                }
            },
            {
                name: '5',
                local_host: 'name-4',
                remote_host: 'name-6',
                startLineRatio: 0.25,
                startLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endLineRatio: 0.65,
                endLineStyle: {
                    color: 0Xef5050,
                    opacity: 1,
                },
                endArrowStyle: {
                    color: 0Xef5050,
                    opacity: 1,
                },
                startArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                labels: {
                    1: {
                        content: '25%',
                        ratio: 0.1,
                        style: {
                            fill: 0X20c1a1,
                        }
                    },
                    2: {
                        content: '65%',
                        ratio: 1.35,
                        style: {
                            fill: 0Xef5050,
                        }
                    }
                }
            },
            {
                name: '6',
                local_host: 'name-4',
                remote_host: 'name-7',
                startLineRatio: 0.4,
                startLineStyle: {
                    color: 0Xfcc242,
                    opacity: 1,
                },
                endLineRatio: 0.1,
                endLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                startArrowStyle: {
                    color: 0Xfcc242,
                    opacity: 1,
                },
                labels: {
                    1: {
                        content: '40%',
                        ratio: 0.4,
                        style: {
                            fill: 0Xfcc242,
                        }
                    },
                    2: {
                        content: '10%',
                        ratio: 1.9,
                        style: {
                            fill: 0X20c1a1,
                        }
                    }
                }
            },
            {
                name: '7',
                local_host: 'name-7',
                remote_host: 'name-8',
                startLineRatio: 0.2,
                startLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endLineRatio: 0.3,
                endLineStyle: {
                    color: 0Xfcc242,
                    opacity: 1,
                },
                endArrowStyle: {
                    color: 0Xfcc242,
                    opacity: 1,
                },
                startArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                labels: {
                    1: {
                        content: '20%',
                        ratio: 0.2,
                        style: {
                            fill: 0X20c1a1,
                        }
                    },
                    2: {
                        content: '30%',
                        ratio: 1.7,
                        style: {
                            fill: 0Xfcc242,
                        }
                    }
                }
            },
            {
                name: '8',
                local_host: 'name-7',
                remote_host: 'name-9',
                startLineRatio: 0.15,
                startLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endLineRatio: 0.2,
                endLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                startArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                labels: {
                    1: {
                        content: '15%',
                        ratio: 0.15,
                        style: {
                            fill: 0X20c1a1,
                        }
                    },
                    2: {
                        content: '20%',
                        ratio: 1.8,
                        style: {
                            fill: 0X20c1a1,
                        }
                    }
                }
            },
            {
                name: '9',
                local_host: 'name-6',
                remote_host: 'name-9',
                startLineRatio: 0.35,
                startLineStyle: {
                    color: 0Xfcc242,
                    opacity: 1,
                },
                endLineRatio: 0.25,
                endLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                startArrowStyle: {
                    color: 0Xfcc242,
                    opacity: 1,
                },
                labels: {
                    1: {
                        content: '35%',
                        ratio: 0.15,
                        style: {
                            fill: 0Xfcc242,
                        }
                    },
                    2: {
                        content: '25%',
                        ratio: 1.75,
                        style: {
                            fill: 0X20c1a1,
                        }
                    }
                }
            },
            {
                name: '10',
                local_host: 'name-9',
                remote_host: 'name-10',
                startLineRatio: 0.35,
                startLineStyle: {
                    color: 0Xfcc242,
                    opacity: 1,
                },
                endLineRatio: 0.15,
                endLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                startArrowStyle: {
                    color: 0Xfcc242,
                    opacity: 1,
                },
                labels: {
                    1: {
                        content: '35%',
                        ratio: 0.15,
                        style: {
                            fill: 0Xfcc242,
                        }
                    },
                    2: {
                        content: '15%',
                        ratio: 1.85,
                        style: {
                            fill: 0X20c1a1,
                        }
                    }
                }
            },
            {
                name: '11',
                local_host: 'name-4',
                remote_host: 'name-7',
                startLineRatio: 0.25,
                startLineStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                endLineRatio: 0.65,
                endLineStyle: {
                    color: 0Xef5050,
                    opacity: 1,
                },
                endArrowStyle: {
                    color: 0Xef5050,
                    opacity: 1,
                },
                startArrowStyle: {
                    color: 0X20c1a1,
                    opacity: 1,
                },
                labels: {
                    1: {
                        content: '25%',
                        ratio: 0.1,
                        style: {
                            fill: 0X20c1a1,
                        }
                    },
                    2: {
                        content: '65%',
                        ratio: 1.35,
                        style: {
                            fill: 0Xef5050,
                        }
                    }
                }
            },
        ],
        groups: [],
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
        network.drawNoIConTopology(MultipleColorLineComponent.data);
        network.network.setBundleExpanded(true);
    }
}
