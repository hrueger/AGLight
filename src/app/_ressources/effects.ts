const effects  = [
  {
    affects: [
      {
        name: "Color RGB",
        number: 1,
      },
    ],
    get: "(t) => {return t}",
    group: "color",
    name: "Rainbow RGB 1 Channel",
  },
  {
    affects: [
      {
        name: "Linear",
        number: 3,
      },
    ],
    get: "(t) => {return t}",
    group: "color",
    name: "Rainbow RGB 3 Channels",
  },
  {
    affects: [
      {
        name: "Rotation",
        number: 1,
      },
    ],
    get: "(t) => {return t}",
    group: "rotation",
    name: "Square",
  },
];
export { effects };
