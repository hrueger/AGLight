import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "numberArray",
})
export class NumberArrayPipe implements PipeTransform {

  public transform(value: number): any {
    console.log(value);
    const res = [];
    for (let i = 0; i < value; i++) {
      res.push(i);
    }
    console.log(res);
    return res;
  }
}
