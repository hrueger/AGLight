export class RawProduct {
    name: string;
    shortName: string;
    categories: Category[];
    fixtureKey: string;
    manufacturer: string;
    manufacturerKey: string;
    oflURL: string;
    meta: {
        authors: string[];
        creationDate: isoDateString;
        lastModifyDate: isoDateString;
        importPlugin: {
            plugin: string;
            date: string;
            comment: string;
        }
    }
    comment: string;
    links: {
        manual: url[];
        productPage: url[];
        video: url[];
        other: url[];
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
    shutterEffect: "Open" | "Closed" | "Strobe" | "Pulse" | "RampUp" | "RampDown" | "RampUpDown" | "Lightning" | "Spikes";
    soundControlled: boolean;
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
    duration: time;
    durationStart: time;
    durationEnd: time;
    randomTiming: boolean;
} | {
    type: "StrobeSpeed";
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
} | {
    type: "StrobeDuration";
    duration: time;
    durationStart: time;
    durationEnd: time;
} | {
    type: "Intensity";
    brightness: brightness;
    brightnessStart: brightness;
    brightnessEnd: brightness;
} | {
    type: "ColorIntensity";
    color: "Red" | "Green" | "Blue" | "Cyan" | "Magenta" | "Yellow" | "Amber" | "White" | "Warm White" | "Cold White" | "UV" | "Lime" | "Indigo";
    brightness: brightness;
    brightnessStart: brightness;
    brightnessEnd: brightness;
} | {
    type: "ColorPreset";
    colors: colorString[];
    colorsStart: colorString[];
    colorsEnd: colorString[]
    colorTemperature: colorTemperature;
    colorTemperatureStart: colorTemperature;
    colorTemperatureEnd: colorTemperature;
} | {
    type: "ColorTemperature";
    colorTemperature: colorTemperature;
    colorTemperatureStart: colorTemperature;
    colorTemperatureEnd: colorTemperature;
} | {
    type: "Pan";
    angle: rotationAngle;
    angleStart: rotationAngle;
    angleEnd: rotationAngle;
} | {
    type: "PanContinuous";
    speed: rotationSpeed;
    speedStart: rotationSpeed;
    speedEnd: rotationSpeed;
} | {
    type: "Tilt";
    angle: rotationAngle;
    angleStart: rotationAngle;
    angleEnd: rotationAngle;
} | {
    type: "TiltContinuous";
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
} | {
    type: "PanTiltSpeed";
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
    duration: time;
    durationStart: time;
    durationEnd: time;
} | {
    type: "WheelSlot";
    wheel: string | string[];
    slotNumber: slotNumber;
    slotNumberStart: slotNumber;
    slotNumberEnd: slotNumber;
} | {
    type: "WheelShake";
    wheel: string | string[];
    slotNumber: slotNumber;
    slotNumberStart: slotNumber;
    slotNumberEnd: slotNumber;
    shakeSpeed: speed;
    shakeSpeedStart: speed;
    shakeSpeedEnd: speed;
    shakeAngle: swingAngle
    shakeAngleStart: swingAngle;
    shakeAngleEnd: swingAngle;
} | {
    type: "WheelSlotRotation";
    wheel: string | string[];
    slotNumber: slotNumber;
    slotNumberStart: slotNumber;
    slotNumberEnd: slotNumber;
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
    angle: rotationAngle
    angleStart: rotationAngle;
    angleEnd: rotationAngle;
} | {
    type: "WheelRotation";
    wheel: string | string[];
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
    angle: rotationAngle
    angleStart: rotationAngle;
    angleEnd: rotationAngle;
} | {
    type: "Effect";
    effectName: string;
    effectPreset: effectPreset;
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
    duration: time;
    durationStart: time;
    durationEnd: time;
    parameter: parameter;
    parameterStart: parameter;
    parameterEnd: parameter;
    soundControlled: number;
    soundSensitivity: percent;
    soundSensitivityStart: percent;
    soundSensitivityEnd: percent;
} | {
    type: "EffectSpeed";
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
} | {
    type: "EffectDuration";
    duration: time;
    durationStart: time;
    durationEnd: time;
} | {
    type: "EffectParameter";
    parameter: parameter;
    parameterStart: parameter;
    parameterEnd: parameter;
} | {
    type: "SoundSensitivity";
    soundSensitivity: percent;
    soundSensitivityStart: percent;
    soundSensitivityEnd: percent;
} | {
    type: "BeamAngle";
    angle: rotationAngle
    angleStart: rotationAngle;
    angleEnd: rotationAngle;
} | {
    type: "BeamPosition";
    horizontalAngle: horizontalAngle;
    horizontalAngleStart: horizontalAngle;
    horizontalAngleEnd: horizontalAngle;
    verticalAngle: verticalAngle;
    verticalAngleStart: verticalAngle;
    verticalAngleEnd: verticalAngle;
} | {
    type: "Focus";
    distance: distance;
    distanceStart: distance;
    distanceEnd: distance;
} | {
    type: "Zoom";
    angle: rotationAngle
    angleStart: rotationAngle;
    angleEnd: rotationAngle;
} | {
    type: "Iris";
    openPercent: percent
    openPercentStart: percent;
    openPercentEnd: percent;
} | {
    type: "IrisEffect";
    effectName: string;
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
} | {
    type: "Frost";
    frostIntensity: percent;
    frostIntensityStart: percent;
    frostIntensityEnd: percent;
} | {
    type: "FrostEffect";
    effectName: string;
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
} | {
    type: "Prism";
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
    angle: rotationAngle;
    angleStart: rotationAngle;
    angleEnd: rotationAngle;
} | {
    type: "PrismRotation";
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
    angle: rotationAngle;
    angleStart: rotationAngle;
    angleEnd: rotationAngle;
} | {
    type: "BladeInsertion";
    blade: "Top" | "Right" | "Bottom" | "Left" | number;
    insertion: insertion;
    insertionStart: insertion;
    insertionEnd: insertion;
} | {
    type: "BladeRotation";
    blade: "Top" | "Right" | "Bottom" | "Left" | number;
    angle: rotationAngle;
    angleStart: rotationAngle;
    angleEnd: rotationAngle;
} | {
    type: "BladeSystemRotation";
    angle: rotationAngle;
    angleStart: rotationAngle;
    angleEnd: rotationAngle;
} | {
    type: "Fog";
    fogType: "Fog" | "Haze";
    fogOutput: fogOutput;
    fogOutputStart: fogOutput;
    fogOutputEnd: fogOutput;
} | {
    type: "FogOutput";
    fogOutput: fogOutput;
    fogOutputStart: fogOutput;
    fogOutputEnd: fogOutput;
} | {
    type: "FogType";
    fogType: "Fog" | "Haze";
} | {
    type: "Rotation";
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
    angle: rotationAngle;
    angleStart: rotationAngle;
    angleEnd: rotationAngle;
} | {
    type: "Speed";
    speed: speed;
    speedStart: speed;
    speedEnd: speed;
} | {
    type: "Time";
    time: time;
    timeStart: time;
    timeEnd: time;
} | {
    type: "Maintenance";
    parameter: parameter;
    parameterStart: parameter;
    parameterEnd: parameter;
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
    colorTemperature: colorTemperature;
} | {
    type: "Gobo";
    name: string;
    resource: string | Resource;
} | {
    type: "Prism";
    facets: number;
    name: string;
} | {
    type: "Iris";
    openPercent: irisPercent;
} | {
    type: "Frost";
    frostIntensity: percent;
} | {
    type: "AnimationGoboStart";
    name: string;
} | {
    type: "AnimationGoboEnd";
    name: string;
}

interface CapabilityBase {
    dmxRange: [dmxValue, dmxValue];
    comment: string;
    helpWanted: string;
    menuClick: "start" | "center" | "end" | "hidden";
    switchChannels: {
        [key: string]: string;
    }
}

interface Resource {
    name: string;
    keywords: string;
    source: string;
    key: string;
    type: string;
    alias: string,
    image: {
        mimeType: string;
        extension: string;
        encoding: string;
    }
}


type url = string;
type isoDateString = string;
type speed = string;
type time = string;
type brightness = string;
type colorString = string;
type colorTemperature = string;
type rotationAngle = string;
type rotationSpeed = string;
type slotNumber = string;
type swingAngle = string;
type parameter = string;
type percent = string;
type horizontalAngle = string;
type verticalAngle = string;
type distance = string;
type insertion = string;
type fogOutput = string;
type irisPercent = string;
type dmxValue = string;
type effectPreset = string;