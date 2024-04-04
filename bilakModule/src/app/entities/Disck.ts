import { IShape } from './IShape';

export class Disk implements IShape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  ToString(): string {
    return 'Радіус: ' + this.radius.toFixed(2);
  }

  Perimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  Area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
