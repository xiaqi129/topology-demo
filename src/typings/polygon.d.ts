declare class Polygon {
  public center: any;
  public dedupe: any;
  public toArray: any;
  public aabb: any;
  public offset: any;
  constructor(points: any);
}

declare module 'node_modules/polygon' {
  export = Polygon;
}
