import { Widget } from "../_entities/widget";
import { Fixture } from "../_entities/fixture";
import { FixedChannel } from "../_entities/fixed-channel";
import { getChannelCount } from "./channel-count";

export function findChannelAddresses(fixture: Fixture, widget: Widget | FixedChannel): number[] {
    return new Array(fixture.number)
        .fill(null)
        .map((_, idx) => fixture.startAddress
            + (getChannelCount(fixture) == 1
                ? idx
                : (idx * (getChannelCount(fixture))))
            + fixture.product.modes
                .filter((m) => m.name == fixture.channelMode)[0]
                .channels.findIndex((c) => c == widget.channel));
}

export function findChannelAddresses2(fixture: Fixture, channel: string): number[] {
    return new Array(fixture.number)
        .fill(null)
        .map((_, idx) => fixture.startAddress
            + (getChannelCount(fixture) == 1
                ? idx
                : (idx * (getChannelCount(fixture))))
            + fixture.product.modes
                .filter((m) => m.name == fixture.channelMode)[0]
                .channels.findIndex((c) => c == channel));
}
