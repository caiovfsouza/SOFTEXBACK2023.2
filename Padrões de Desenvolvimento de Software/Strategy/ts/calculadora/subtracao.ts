import { Strategy } from "./interfaceStrategy";

export class Subtracao implements Strategy {
    execute(num1: number, num2: number): number {
        return num1 - num2;
    }
}