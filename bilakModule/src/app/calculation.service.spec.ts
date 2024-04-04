import { TestBed } from '@angular/core/testing';
import { CalculationService } from './calculation.service';
import { Triangle } from './entities/Triangle';
import { Disk } from './entities/Disck';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculationService],
    });
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculatePerimeter', () => {
    it('should calculate perimeter of a triangle', () => {
      const triangle = new Triangle(3, 4, 5);
      const perimeter = service.calculatePerimeter(triangle);
      expect(perimeter).toBe(12);
    });

    it('should calculate perimeter of a disk', () => {
      const disk = new Disk(5);
      const perimeter = service.calculatePerimeter(disk);
      expect(perimeter).toBeCloseTo(31.42, 2);
    });

    it('should round perimeter to 2 decimal places', () => {
      const triangle = new Triangle(1.123456, 2.987654, 3.123456);
      const perimeter = service.calculatePerimeter(triangle);
      expect(perimeter).toBe(7.23);
    });

    it('should return 0 if perimeter is less than 0', () => {
      const triangle = new Triangle(-1, -2, -3);
      const perimeter = service.calculatePerimeter(triangle);
      expect(perimeter).toBe(0);
    });
  });

  describe('calculateArea', () => {
    it('should calculate area of a triangle', () => {
      const triangle = new Triangle(3, 4, 5);
      const area = service.calculateArea(triangle);
      expect(area).toBe(6);
    });

    it('should calculate area of a disk', () => {
      const disk = new Disk(5);
      const area = service.calculateArea(disk);
      expect(area).toBeCloseTo(78.54, 2);
    });

    it('should round area to 2 decimal places', () => {
      const triangle = new Triangle(5, 7, 8);
      const area = service.calculateArea(triangle);
      expect(area).toBe(17.32);
    });
  });
});
