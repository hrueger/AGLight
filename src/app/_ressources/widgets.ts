export type WidgetOption = {
    name: string;
    value: string;
    description: string;
    customChannelRequired?: string;
};

export type EffectOptionsData = {
    [key: string]: number,
};
export type EffectOption = {
    name: string,
    description: string,
    value: number,
    key: string,
    min: number,
    max: number,
};

export type EffectWidgetOption = {
    value: string;
    name: string;
    description: string;
    customChannelRequired?: string;
    f: ((t: number, options: EffectOptionsData) => number)[];
    singleCapability: boolean;
    possibleCapabilities: string[];
    options: EffectOption[];
};

export const widgets: WidgetOption[] = [
    {
        name: "Fader",
        value: "Fader",
        description: "A simple fader to drag and drop and select a channel value.",
    },
    {
        name: "Button",
        value: "Button",
        description: "A button to quickly go to the channel value you predefined.",
    },
    {
        name: "Colorpicker",
        value: "Colorpicker",
        description: "A simple colorpicker with predefined color swatches to quickly select a nice color.",
        customChannelRequired: "rgb",
    },
    {
        name: "RGB Colorpicker",
        value: "RGB Colorpicker",
        description: "A full RGB colorpicker to select every color you can imagine.",
        customChannelRequired: "rgb",
    },
    {
        name: "Button Grid",
        value: "Button Grid",
        description: "A grid of buttons to have quick access to multiple channel values.",
    },
];

export const effectWidgets: EffectWidgetOption[] = [
    {
        name: "Sine wave",
        value: "sinewave",
        description: "Alternating between high and low using a nice sine wave",
        f: [
            (t: number, options: EffectOptionsData) => Math.round(
                (1 / options.speed) * Math.sin(t),
            ),
        ],
        singleCapability: true,
        possibleCapabilities: ["Intensity", "ColorIntensity"],
        options: [
            {
                name: "Speed",
                description: "The speed of the sine wave.",
                min: 1,
                max: 100,
                value: 50,
                key: "speed",
            },
        ],
    },
];