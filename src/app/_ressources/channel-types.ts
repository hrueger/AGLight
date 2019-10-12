const channelTypes  = [
  {
    description: "3 Chanels used for changing the color of the head.",
    length: 3,
    name: "Color RGB",
    value: "rgb",
  },
  {
    description: "1 Channel with fixed values for some predefined colors.",
    length: 1,
    name: "Color Fixed",
    value: "color",
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
    name: "Rotation",
    value: "rotation",
  },
  {
    description: "1 Channel for controlling the strength of something",
    length: 1,
    name: "Strength",
    value: "normal",
  },
];
export { channelTypes };
