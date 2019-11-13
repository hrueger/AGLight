const controls: Array<{type: string, usefulWidgets: string[]}> = [
  {
    type: "Linear",
    usefulWidgets: ["Fader", "Button"],
  },
  {
    type: "Steps",
    usefulWidgets: ["Fader", "Button", "Buttongrid"],
  },
  {
    type: "Color RGB",
    usefulWidgets: ["Colorpicker", "RGB Colorpicker", "Button"],
  },
  {
    type: "Rotation",
    usefulWidgets: ["Joystick", "Button"],
  },
  {
    type: "Detailed Rotation",
    usefulWidgets: ["Joystick", "Button"],
  },
];
export { controls };
