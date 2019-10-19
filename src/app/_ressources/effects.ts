const effects = [
  {
    affects: [{ name: "Color RGB" }],
    get: "(t) => {return t;}",
    group: "color",
    name: "Rainbow RGB 1 Channel",
    params: [{name: "speed", type: "Linear"}],
  },
  {
    affects: [{ name: "Linear" }, { name: "Linear" }, { name: "Linear" }],
    get: "(t) => {return t;}",
    group: "color",
    name: "Rainbow RGB 3 Channels",
    params: [{name: "Speed 2", type: "Linear"}],
  },
  {
    affects: [{ name: "Rotation" }],
    get: "(t) => {return t}",
    group: "rotation",
    name: "Square",
    params: [{name: "Speed 3", type: "Linear"}],
  },
  {
    affects: [{ name: "Detailed Rotation" }],
    get: "(t) => {return t}",
    group: "rotation",
    name: "Square (detailed)",
    params: [{name: "Speed 4", type: "Linear"}],
  },
  {
    affects: [{ name: "Linear" }],
    get: "(t) => {return Math.sin(t);}",
    group: "general",
    name: "Sine wave",
    params: [{name: "Speed 5", type: "Linear"}],
  },
];
export { effects };
