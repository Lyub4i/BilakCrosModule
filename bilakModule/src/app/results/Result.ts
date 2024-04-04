import { Disk } from "../entities/Disck";
import { Triangle } from "../entities/Triangle";

export interface ResultShape{
    name: string,
    data: string,
    perimeter: number,
    area:number
}

export interface Result{
    shapes:ResultShape[];
}