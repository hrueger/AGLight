import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "channelNumberSum",
    pure: false,
})
export class ChannelNumberSumPipe implements PipeTransform {
    public transform(input: any[]): any {
        if (input) {
            return input.reduce((a, b) => a + b.length, 0);
        }
        return input;
    }
}
