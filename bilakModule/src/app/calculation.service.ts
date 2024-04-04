import { Injectable } from '@angular/core';
import { IShape } from './entities/IShape';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor() {}

  calculatePerimeter(shape: IShape): number {
    const perimeter = shape.Perimeter();
    if (perimeter < 0) {
      console.log('Perimeter less than zero!');
      return 0;
    }

    return Math.round(perimeter * 100) / 100;
  }

  calculateArea(shape: IShape): number {
    const area = shape.Area();
    if (area < 0) {
      console.log('Area less than zero!');
      return 0;
    }

    return Math.round(area * 100) / 100;
  }

  showInfoAboutAllShapes(shapes: IShape[]) {
    shapes.forEach((shape) => {
      console.log(shape.ToString());
    });
  }
}
