import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Result, ResultShape } from '../results/Result';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculationService } from '../calculation.service';
import { Triangle } from '../entities/Triangle';
import { Disk } from '../entities/Disck';
import { IShape } from '../entities/IShape';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.scss'],
})
export class DataInputComponent implements OnInit {
  @Output() formData = new EventEmitter<Result>();

  dataForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private calculationService: CalculationService
  ) {}

  ngOnInit() {
    this.dataForm = this.fb.group({
      trianglesCount: ['', [Validators.required, Validators.min(0)]],
      diskCount: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.dataForm.valid) {
      const formDataValue = this.dataForm.value;

      const result: Result = {
        shapes: [],
      };

      const createShapes = (count: number, type: string) => {
        for (let index = 0; index < count; index++) {
          let shape: IShape;
          let name: string;

          if (type === 'triangle') {
            shape = this.generateValidTriangle();
            name = 'Трикутник' + (index + 1);
          } else {
            shape = new Disk(Math.random() * 10 + 1);
            name = 'Коло' + (index + 1);
          }

          const perimeter = this.calculationService.calculatePerimeter(shape);
          const area = this.calculationService.calculateArea(shape);

          const shapeData: ResultShape = {
            name: name,
            perimeter: perimeter,
            data: shape.ToString(),
            area: area,
          };

          result.shapes.push(shapeData);
        }
      };

      createShapes(formDataValue.trianglesCount, 'triangle');

      createShapes(formDataValue.diskCount, 'disk');

      this.formData.emit(result);
    }
  }

  generateValidTriangle(): Triangle {
    let sideA, sideB, sideC;

    do {
      sideA = Math.random() * 10 + 1;
      sideB = Math.random() * 10 + 1;
      sideC = Math.random() * 10 + 1;
    } while (!this.isValidTriangle(sideA, sideB, sideC));

    return new Triangle(sideA, sideB, sideC);
  }

  isValidTriangle(a: number, b: number, c: number): boolean {
    return a + b > c && a + c > b && b + c > a;
  }
}
