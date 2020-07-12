import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "firstLetterUppercase",
})
export class FirstLetterUppercasePipe implements PipeTransform {
    public transform(value: string): any {
        return value[0].toUpperCase() + value.slice(1);
    }
}
