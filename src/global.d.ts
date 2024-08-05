//  css module
declare module '*.module.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

//  asset module
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

// declare module "*.svg"; // для обычного asset loader'a

// Для svgr loader'a
declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
