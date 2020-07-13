import { Fixture } from "../_entities/fixture";

export function getChannelCount(fixture: Fixture): number {
    return fixture.product.modes.filter((f) => f.name == fixture.channelMode)[0]
        .channels.length;
}
