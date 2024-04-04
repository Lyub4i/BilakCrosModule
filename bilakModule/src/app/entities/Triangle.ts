import { IShape } from './IShape';

export class Triangle implements IShape {
  private sideA: number;
  private sideB: number;
  private sideC: number;

  constructor(sideA: number, sideB: number, sideC: number) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  ToString(): string {
    return (
      'Сторони: ' +
      this.sideA.toFixed(2) +
      ' ' +
      this.sideB.toFixed(2) +
      ' ' +
      this.sideC.toFixed(2)
    );
  }

  Perimeter(): number {
    return this.sideA + this.sideB + this.sideC;
  }

  Area(): number {
    const s = this.Perimeter() / 2;
    return Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)
    );
  }
}
