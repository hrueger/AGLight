const channelTypes  = [
  {
    description: "3 Chanels used for changing the color of the head.",
    length: 3,
    name: "Color RGB",
    value: "rgb",
  },
  {
    description: "2 Channels for the x and y rotation.",
    length: 2,
    name: "Rotation",
    value: "rotation",
  },
  {
    description: "2x2 Channels for more exact x and y rotation.",
    length: 4,
    name: "Detailed Rotation",
    value: "detailedrotation",
  },
  {
    description: "1 Channel for controlling the strength of something",
    length: 1,
    name: "Linear",
    value: "linear",
  },
  {
    description: "1 Channel for setting a fixed value in multiple steps, for example to enable a specific mode.",
    length: 1,
    name: "Steps",
    value: "steps",
  },
];
export { channelTypes };
