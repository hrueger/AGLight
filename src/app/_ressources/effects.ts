const effects = [
  {
    affects: [{ name: "Color RGB" }],
    get: "(t) => {return t;}",
    group: "color",
    name: "Rainbow RGB 1 Channel",
  },
  {
    affects: [{ name: "Linear" }, { name: "Linear" }, { name: "Linear" }],
    get: "(t) => {return t;}",
    group: "color",
    name: "Rainbow RGB 3 Channels",
  },
  {
    affects: [{ name: "Rotation" }],
    get: "(t) => {return t}",
    group: "rotation",
    name: "Square",
  },
  {
    affects: [{ name: "Detailed Rotation" }],
    get: "(t) => {return t}",
    group: "rotation",
    name: "Square (detailed)",
  },
  {
    affects: [{ name: "Linear" }],
    get: "(t) => {return Math.sin(t);}",
    group: "general",
    name: "Sine wave",
  },
];
export { effects };
