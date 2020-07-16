import { Widget } from "../_entities/widget";
import { FixedChannel } from "../_entities/fixed-channel";
import { getChannelCount } from "./channel-count";

export function findChannelAddresses(widget: Widget | FixedChannel): number[] {
    return new Array(widget.fixture.number)
        .fill(null)
        .map((_, idx) => widget.fixture.startAddress
            + (getChannelCount(widget.fixture) == 1
                ? idx
                : (idx * (getChannelCount(widget.fixture) + 1)))
            + widget.fixture.product.modes
                .filter((m) => m.name == widget.fixture.channelMode)[0]
                .channels.findIndex((c) => c == widget.channel));
}
