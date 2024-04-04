import { Disk } from "./Disck";
import { Triangle } from "./Triangle";


describe('Triangle', () => {
  it('should create a triangle with given sides', () => {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle).toBeTruthy();
    expect(triangle.ToString()).toBe('Сторони: 3.00 4.00 5.00');
  });

  it('should calculate perimeter correctly', () => {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle.Perimeter()).toBe(12);
  });

  it('should calculate area correctly', () => {
    const triangle = new Triangle(3, 4, 5);
    expect(triangle.Area()).toBe(6);
  });
});

describe('Disk', () => {
  it('should create a disk with given radius', () => {
    const disk = new Disk(5);
    expect(disk).toBeTruthy();
    expect(disk.ToString()).toBe('Радіус: 5.00');
  });

  it('should calculate perimeter correctly', () => {
    const disk = new Disk(5);
    expect(disk.Perimeter()).toBeCloseTo(31.42, 2);
  });

  it('should calculate area correctly', () => {
    const disk = new Disk(5);
    expect(disk.Area()).toBeCloseTo(78.54, 2);
  });
});
