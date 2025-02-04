declare module "three-globe" {
    import { Object3D } from "three";
  
    export default class ThreeGlobe extends Object3D {
      constructor();
      globeMaterial(): unknown;
      hexPolygonsData(data: any[]): this;
      hexPolygonResolution(res: number): this;
      hexPolygonMargin(margin: number): this;
      hexPolygonColor(callback: (data: any) => string): this;
      showAtmosphere(value: boolean): this;
      atmosphereColor(color: string): this;
      atmosphereAltitude(altitude: number): this;
      arcsData(data: any[]): this;
      arcStartLat(callback: (data: any) => number): this;
      arcStartLng(callback: (data: any) => number): this;
      arcEndLat(callback: (data: any) => number): this;
      arcEndLng(callback: (data: any) => number): this;
      arcColor(callback: (data: any) => string): this;
      arcAltitude(callback: (data: any) => number): this;
      arcStroke(callback: (data: any) => number): this;
      arcDashLength(length: number): this;
      arcDashInitialGap(callback: (data: any) => number): this;
      arcDashGap(gap: number): this;
      arcDashAnimateTime(callback: (data: any) => number): this;
      pointsData(data: any[]): this;
      pointColor(callback: (data: any) => string): this;
      pointsMerge(value: boolean): this;
      pointAltitude(altitude: number): this;
      pointRadius(radius: number): this;
      ringsData(data: any[]): this;
      ringColor(callback: (data: any) => (t: number) => string): this;
      ringMaxRadius(radius: number): this;
      ringPropagationSpeed(speed: number): this;
      ringRepeatPeriod(period: number): this;
    }
  }
  