export class Product {
    name: string;
    shortName: string;
    categories: Category[];
    meta: {
        authors: string[];
        creationDate: string;
        lastModifyDate: string;
        importPlugin: {
            plugin: string;
            date: string;
            comment: string;
        }
    }
    comment: string;
    links: {
        manual: string[];
        productPage: string[];
        video: string[];
        other: string[];
    }
    helpWanted: string;
    rdm: {
        modelId: number;
        softwareVersion: string;
    }
    physical: PhysicalProperties;
    matrix: any;
    wheels: {
        [name: string]: {
            direction: "CW" | "CCW";
            slots: WheelSlot[];
        }
    }
    availableChannels: {
        [name: string]: Channel;
    }
    templateChannels: {
        [name: string]: Channel;
    }
    modes: [
        {
            name: string;
            shortName: string;
            rdmPersonalityIndex: number;
            physical: PhysicalProperties;
            channels: string[]
        }
    ]
}

// tslint:disable-next-line: max-classes-per-file
type Capability = CapabilityBase & {
    type: "NoFunction";
} | {
    type: "ShutterStrobe";
    shutterEffect: {
        "enum": [
            "Open",
            "Closed",
            "Strobe",
            "Pulse",
            "RampUp",
            "RampDown",
            "RampUpDown",
            "Lightning",
            "Spikes"
        ]
    };
    soundControlled: boolean;
    speed: number;
    speedStart: number;
    speedEnd: number;
    duration: number;
    durationStart: number;
    durationEnd: number;
    randomTiming: boolean;
} | {
    type: "StrobeSpeed";
    speed: number;
    speedStart: number;
    speedEnd: number;
} | {
    type: "StrobeDuration";
    duration: number;
    durationStart: number;
    durationEnd: number;
} | {
    type: "Intensity";
    brightness: number;
    brightnessStart: number;
    brightnessEnd: number;
} | {
    type: "ColorIntensity";
    color: "Red" | "Green" | "Blue" | "Cyan" | "Magenta" | "Yellow" | "Amber" | "White" | "Warm White" | "Cold White" | "UV" | "Lime" | "Indigo";
    brightness: number;
    brightnessStart: number;
    brightnessEnd: number;
} | {
    type: "ColorPreset";
    colors: string[];
    colorsStart: string[];
    colorsEnd: string[]
    colorTemperature: number;
    colorTemperatureStart: number;
    colorTemperatureEnd: number;
} | {
    type: "ColorTemperature";
    colorTemperature: number;
    colorTemperatureStart: number;
    colorTemperatureEnd: number;
} | {
    type: "Pan";
    angle: number;
    angleStart: number;
    angleEnd: number;
} | {
    type: "PanContinuous";
    speed: number;
    speedStart: number;
    speedEnd: number;
} | {
    type: "Tilt";
    angle: number;
    angleStart: number;
    angleEnd: number;
} | {
    type: "TiltContinuous";
    speed: number;
    speedStart: number;
    speedEnd: number;
} | {
    type: "PanTiltSpeed";
    speed: number;
    speedStart: number;
    speedEnd: number;
    duration: number;
    durationStart: number;
    durationEnd: number;
} | {
    type: "WheelSlot";
    wheel: string | string[];
    slotNumber: number
    slotNumberStart: number;
    slotNumberEnd: number;
} | {
    type: "WheelShake";
    wheel: string | string[];
    slotNumber: number;
    slotNumberStart: number;
    slotNumberEnd: number;
    shakeSpeed: number;
    shakeSpeedStart: number;
    shakeSpeedEnd: number;
    shakeAngle: number
    shakeAngleStart: number;
    shakeAngleEnd: number;
} | {
    type: "WheelSlotRotation";
    wheel: string | string[];
    slotNumber: number;
    slotNumberStart: number;
    slotNumberEnd: number;
    speed: number;
    speedStart: number;
    speedEnd: number;
    angle: number
    angleStart: number;
    angleEnd: number;
} | {
    type: "WheelRotation";
    wheel: string | string[];
    speed: number;
    speedStart: number;
    speedEnd: number;
    angle: number
    angleStart: number;
    angleEnd: number;
} | {
    type: "Effect";
    effectName: string;
    effectPreset: any;
    speed: number;
    speedStart: number;
    speedEnd: number;
    duration: number;
    durationStart: number;
    durationEnd: number;
    parameter: any;
    parameterStart: any;
    parameterEnd: any;
    soundControlled: number;
    soundSensitivity: number;
    soundSensitivityStart: number;
    soundSensitivityEnd: number;
} | {
    type: "EffectSpeed";
    speed: number;
    speedStart: number;
    speedEnd: number;
} | {
    type: "EffectDuration";
    duration: number;
    durationStart: number;
    durationEnd: number;
} | {
    type: "EffectParameter";
    parameter: any;
    parameterStart: any;
    parameterEnd: any;
} | {
    type: "SoundSensitivity";
    soundSensitivity: any;
    soundSensitivityStart: any;
    soundSensitivityEnd: any;
} | {
    type: "BeamAngle";
    angle: number
    angleStart: number;
    angleEnd: number;
} | {
    type: "BeamPosition";
    horizontalAngle: number;
    horizontalAngleStart: number;
    horizontalAngleEnd: number;
    verticalAngle: number;
    verticalAngleStart: number;
    verticalAngleEnd: number;
} | {
    type: "Focus";
    distance: number;
    distanceStart: number;
    distanceEnd: number;
} | {
    type: "Zoom";
    angle: number
    angleStart: number;
    angleEnd: number;
} | {
    type: "Iris";
    openPercent: number
    openPercentStart: number;
    openPercentEnd: number;
} | {
    type: "IrisEffect";
    effectName: string;
    speed: number;
    speedStart: number;
    speedEnd: number;
} | {
    type: "Frost";
    frostIntensity: number;
    frostIntensityStart: number;
    frostIntensityEnd: number;
} | {
    type: "FrostEffect";
    effectName: string;
    speed: number;
    speedStart: number;
    speedEnd: number;
} | {
    type: "Prism";
    speed: number;
    speedStart: number;
    speedEnd: number;
    angle: number;
    angleStart: number;
    angleEnd: number;
} | {
    type: "PrismRotation";
    speed: number;
    speedStart: number;
    speedEnd: number;
    angle: number;
    angleStart: number;
    angleEnd: number;
} | {
    type: "BladeInsertion";
    blade: "Top" | "Right" | "Bottom" | "Left" | number;
    insertion: number;
    insertionStart: number;
    insertionEnd: number;
} | {
    type: "BladeRotation";
    blade: "Top" | "Right" | "Bottom" | "Left" | number;
    angle: number;
    angleStart: number;
    angleEnd: number;
} | {
    type: "BladeSystemRotation";
    angle: number;
    angleStart: number;
    angleEnd: number;
} | {
    type: "Fog";
    fogType: "Fog" | "Haze";
    fogOutput: number;
    fogOutputStart: number;
    fogOutputEnd: number;
} | {
    type: "FogOutput";
    fogOutput: number;
    fogOutputStart: number;
    fogOutputEnd: number;
} | {
    type: "FogType";
    fogType: "Fog" | "Haze";
} | {
    type: "Rotation";
    speed: number;
    speedStart: number;
    speedEnd: number;
    angle: number;
    angleStart: number;
    angleEnd: number;
} | {
    type: "Speed";
    speed: number;
    speedStart: number;
    speedEnd: number;
} | {
    type: "Time";
    time: number;
    timeStart: number;
    timeEnd: number;
} | {
    type: "Maintenance";
    parameter: any;
    parameterStart: any;
    parameterEnd: any;
} | {
    type: "Generic";
}

// tslint:disable-next-line: max-classes-per-file
class Channel {
    name: string;
    fineChannelAliases: string[];
    dmxValueResolution: "8bit" | "16bit" | "24bit";
    defaultValue: number;
    highlightValue: number;
    constant: boolean;
    precedence: "LTP" | "HTP";
    capability: Capability;
    capabilities: Capability[];
}

enum DMXconnector {
    "3-pin",
    "3-pin (swapped +/-)",
    "3-pin XLR IP65",
    "5-pin",
    "5-pin XLR IP65",
    "3-pin and 5-pin",
    "3.5mm stereo jack"
}

enum Category {
    "Barrel Scanner",
    "Blinder",
    "Color Changer",
    "Dimmer",
    "Effect",
    "Fan",
    "Flower",
    "Hazer",
    "Laser",
    "Matrix",
    "Moving Head",
    "Pixel Bar",
    "Scanner",
    "Smoke",
    "Stand",
    "Strobe",
    "Other"
}

// tslint:disable-next-line: max-classes-per-file
class PhysicalProperties {
    dimensions: [number, number, number];
    weight: number;
    power: number;
    DMXconnector: DMXconnector;
    bulb: {
        type: string;
        colorTemperature: number;
        lumens: number;
    }
    lens: {
        name: string;
        degreesMinMax: [number, number];
    }
    matrixPixels: {
        dimensions: [number, number, number];
        spacing: [number, number, number];
    }
}

// tslint:disable-next-line: max-classes-per-file
type WheelSlot = {
    type: "Open";
} | {
    type: "Closed";
} | {
    type: "Color";
    colors: string[];
    colorTemperature: string;
} | {
    type: "Gobo";
    name: string;
    resource: string;
} | {
    type: "Prism";
    facets: number;
    name: string;
} | {
    type: "Iris";
    openPercent: number;
} | {
    type: "Frost";
    frostIntensity: number;
} | {
    type: "AnimationGoboStart";
    name: string;
} | {
    type: "AnimationGoboEnd";
    name: string;
}

interface CapabilityBase {
    dmxRange: [number, number];
    comment: string;
    helpWanted: string;
    menuClick: "start" | "center" | "end" | "hidden";
    switchChannels: {
        [key: string]: string;
    }
}