import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
    name: "effectAffectsSum",
})
export class EffectAffectsSumPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public transform(val: any): SafeHtml {
        let affects = "";
        val.forEach((a) => {
            affects += `${a.number}x ${a.name}<br>`;
        });
        return this.sanitizer.bypassSecurityTrustHtml(affects);
    }
}
