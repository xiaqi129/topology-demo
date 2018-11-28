declare class Bezier {
  constructor(...args: any[]);
}

declare module 'node_modules/bezier-js/lib/bezier' {
  export = Bezier;
}
