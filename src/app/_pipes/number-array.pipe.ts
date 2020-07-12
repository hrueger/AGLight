import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "numberArray",
})
export class NumberArrayPipe implements PipeTransform {
    public transform(value: number): any {
        const res = [];
        for (let i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    }
}
