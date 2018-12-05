/**
 * @license
 * Copyright Cisco Inc. All Rights Reserved.
 *
 * Author: gsp-dalian-ued@cisco.com
 */

import * as _ from 'lodash';
import * as PIXI from 'pixi.js/dist/pixi.js';

export interface IStyles {
  lineWidth: number;
  lineColor: number;
  lineType: number;
  bezierLineDistance: number;
  bezierLineDegree: number;
  bezierOacity: number;
  fillColor: any;
  fillOpacity: number;
  arrowColor: number;
  arrowLength: number;
  arrowType: number;
  arrowWidth: number;
  arrowAngle: number;
  arrowMiddleLength: number;
  fillArrow: boolean;
  lineDistance: number;
  padding: number;
  margin: number;
  height: number;
  width: number;
}

export interface IPosition {
  x: number;
  y: number;
}

export abstract class CommonElement extends PIXI.Container {
  public renderer: any;
  public defaultStyle: IStyles = {
    lineWidth: 1,
    lineColor: 0xEEEEEE,
    lineType: 0, // 0: line, 1: besizer
    fillColor: 0xDDDDDD,
    bezierOacity: 1,
    fillOpacity: 1,
    arrowColor: 0Xc71bd3,
    arrowLength: 15,
    arrowType: 1, // 0: src  to target, 1: target to src, 2: bidirection
    arrowWidth: 1,
    arrowAngle: 20,
    arrowMiddleLength: 10,
    bezierLineDistance: 5,
    bezierLineDegree: 20,
    fillArrow: true,
    lineDistance: 5,
    padding: 5,
    margin: 5,
    height: 15,
    width: 15,
  };
  private id: string = _.uniqueId('element_');

  constructor() {
    super();
  }

  public addChildren(elements: PIXI.DisplayObject[]) {
    _.each(elements, (element: PIXI.DisplayObject) => {
      this.addChild(element);
    });
  }

  public clearDisplayObjects() {
    const childNodes = _.filter(this.children, (child) => {
      return child instanceof PIXI.Graphics;
    });
    _.each(childNodes, (node: any) => {
      node.destroy();
    });
  }

  public clearBorder() {
    const childNodes = _.filter(this.children, (child) => {
      return child.name === 'node_border';
    });
    _.each(childNodes, (node: any) => {
      node.destroy();
    });
  }

  public getUID() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public setStyle(styles: any, draw: boolean = true) {
    _.extend(this.defaultStyle, styles);
    if (draw) {
      this.draw();
    }
  }

  public abstract draw(): void;

  public addEventListener(...args: any[]) {
    this.interactive = true;
    this.buttonMode = true;
    this.on.apply(this, args);
  }

}
