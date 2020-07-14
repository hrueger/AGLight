import { Pipe, PipeTransform } from "@angular/core";
import { effectWidgets } from "../_ressources/widgets";
@Pipe({
    name: "effectName",
})
export class EffectNamePipe implements PipeTransform {
    public transform(value: string): string {
        return effectWidgets.filter((e) => e.value == value)[0].name || "Effect";
    }
}
