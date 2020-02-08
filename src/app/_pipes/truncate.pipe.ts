import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "truncate"
})
export class TruncatePipe implements PipeTransform {

    public transform(textContent: string, options = { sliceStart: 0, sliceEnd: 30, prepend: "", append: "..." }): string {
        if (textContent.length >= options.sliceEnd) {
            let truncatedText = textContent.slice(options.sliceStart, options.sliceEnd);
            if (options.prepend) { truncatedText = `${options.prepend}${truncatedText}`; }
            if (options.append) { truncatedText = `${truncatedText}${options.append}`; }
            return truncatedText;
        }
        return textContent;
    }
}