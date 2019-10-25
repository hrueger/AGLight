const colors: Array<{
  name: string; // tslint:disable-next-line: object-literal-sort-keys
  hex: string;
}> = [
  {
    name: "Abbey",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4c4f56",
  },
  {
    name: "Absolute Zero",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0048ba",
  },
  {
    name: "Acadia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1b1404",
  },
  {
    name: "Acapulco",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7cb0a1",
  },
  {
    name: "Acid Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b0bf1a",
  },
  {
    name: "Aero",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7cb9e8",
  },
  {
    name: "Aero Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c9ffe5",
  },
  {
    name: "Affair",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#714693",
  },
  {
    name: "African Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b284be",
  },
  {
    name: "Air Force Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00308f",
  },
  {
    name: "Air Superiority Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#72a0c1",
  },
  {
    name: "Akaroa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d4c4a8",
  },
  {
    name: "Alabama Crimson",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#af002a",
  },
  {
    name: "Alabaster",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fafafa",
  },
  {
    name: "Albescent White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5e9d3",
  },
  {
    name: "Algae Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#93dfb8",
  },
  {
    name: "Alice Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0f8ff",
  },
  {
    name: "Alien Armpit",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#84de02",
  },
  {
    name: "Alizarin Crimson",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e32636",
  },
  {
    name: "Alloy Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c46210",
  },
  {
    name: "Allports",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0076a3",
  },
  {
    name: "Almond",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#efdecd",
  },
  {
    name: "Almond Frost",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#907b71",
  },
  {
    name: "Alpine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#af8f2c",
  },
  {
    name: "Alto",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dbdbdb",
  },
  {
    name: "Aluminium",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a9acb6",
  },
  {
    name: "Amaranth",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e52b50",
  },
  {
    name: "Amaranth Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f19cbb",
  },
  {
    name: "Amaranth Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ab274f",
  },
  {
    name: "Amaranth Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d3212d",
  },
  {
    name: "Amazon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3b7a57",
  },
  {
    name: "Amber",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffbf00",
  },
  {
    name: "American Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff033e",
  },
  {
    name: "Americano",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#87756e",
  },
  {
    name: "Amethyst",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9966cc",
  },
  {
    name: "Amethyst Smoke",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a397b4",
  },
  {
    name: "Amour",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f9eaf3",
  },
  {
    name: "Amulet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7b9f80",
  },
  {
    name: "Anakiwa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9de5ff",
  },
  {
    name: "Android Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a4c639",
  },
  {
    name: "Anti Flash White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f2f3f4",
  },
  {
    name: "Antique Brass",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cd9575",
  },
  {
    name: "Antique Bronze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#665d1e",
  },
  {
    name: "Antique Fuchsia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#915c83",
  },
  {
    name: "Antique Ruby",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#841b2d",
  },
  {
    name: "Antique White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#faebd7",
  },
  {
    name: "Anzac",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e0b646",
  },
  {
    name: "Ao",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#008000",
  },
  {
    name: "Apache",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dfbe6f",
  },
  {
    name: "Apple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4fa83d",
  },
  {
    name: "Apple Blossom",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#af4d43",
  },
  {
    name: "Apple Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8db600",
  },
  {
    name: "Apricot",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbceb1",
  },
  {
    name: "Apricot White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffeec",
  },
  {
    name: "Aqua Deep",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#014b43",
  },
  {
    name: "Aqua Forest",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5fa777",
  },
  {
    name: "Aqua Haze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#edf5f5",
  },
  {
    name: "Aqua Island",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a1dad7",
  },
  {
    name: "Aqua Spring",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eaf9f5",
  },
  {
    name: "Aqua Squeeze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e8f5f2",
  },
  {
    name: "Aquamarine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7fffd4",
  },
  {
    name: "Aquamarine Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#71d9e2",
  },
  {
    name: "Arapawa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#110c6c",
  },
  {
    name: "Arctic Lime",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d0ff14",
  },
  {
    name: "Armadillo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#433e37",
  },
  {
    name: "Army Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4b5320",
  },
  {
    name: "Arrowtown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#948771",
  },
  {
    name: "Arsenic",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3b444b",
  },
  {
    name: "Artichoke",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8f9779",
  },
  {
    name: "Arylide Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e9d66b",
  },
  {
    name: "Ash",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c6c3b5",
  },
  {
    name: "Ash Grey",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b2beb5",
  },
  {
    name: "Asparagus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#87a96b",
  },
  {
    name: "Asphalt",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#130a06",
  },
  {
    name: "Astra",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#faeab9",
  },
  {
    name: "Astral",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#327da0",
  },
  {
    name: "Astronaut",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#283a77",
  },
  {
    name: "Astronaut Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#013e62",
  },
  {
    name: "Athens Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eef0f3",
  },
  {
    name: "Aths Special",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ecebce",
  },
  {
    name: "Atlantis",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#97cd2d",
  },
  {
    name: "Atoll",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0a6f75",
  },
  {
    name: "Au Chico",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#97605d",
  },
  {
    name: "Aubergine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3b0910",
  },
  {
    name: "Auburn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a52a2a",
  },
  {
    name: "Aureolin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fdee00",
  },
  {
    name: "Auro Metal Saurus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6e7f80",
  },
  {
    name: "Australian Mint",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5ffbe",
  },
  {
    name: "Avocado",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#568203",
  },
  {
    name: "Axolotl",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4e6649",
  },
  {
    name: "Azalea",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f7c8da",
  },
  {
    name: "Aztec",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0d1c19",
  },
  {
    name: "Aztec Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c39953",
  },
  {
    name: "Azure",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#007fff",
  },
  {
    name: "Azure Mist",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0ffff",
  },
  {
    name: "Azureish White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dbe9f4",
  },
  {
    name: "Baby Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#89cff0",
  },
  {
    name: "Baby Blue Eyes",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a1caf1",
  },
  {
    name: "Baby Powder",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fefefa",
  },
  {
    name: "Bahama Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#026395",
  },
  {
    name: "Bahia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a5cb0c",
  },
  {
    name: "Baja White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff8d1",
  },
  {
    name: "Baker Miller Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff91af",
  },
  {
    name: "Bali Hai",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#859faf",
  },
  {
    name: "Ball Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#21abcd",
  },
  {
    name: "Baltic Sea",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2a2630",
  },
  {
    name: "Bamboo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#da6304",
  },
  {
    name: "Banana Mania",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fae7b5",
  },
  {
    name: "Banana Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffe135",
  },
  {
    name: "Bandicoot",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#858470",
  },
  {
    name: "Barberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ded717",
  },
  {
    name: "Barbie Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e0218a",
  },
  {
    name: "Barley Corn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a68b5b",
  },
  {
    name: "Barley White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff4ce",
  },
  {
    name: "Barn Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7c0a02",
  },
  {
    name: "Barossa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#44012d",
  },
  {
    name: "Bastille",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#292130",
  },
  {
    name: "Battleship Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#828f72",
  },
  {
    name: "Bay Leaf",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7da98d",
  },
  {
    name: "Bay of Many",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#273a81",
  },
  {
    name: "Bazaar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#98777b",
  },
  {
    name: "Bdazzled Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2e5894",
  },
  {
    name: "Beau Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bcd4e6",
  },
  {
    name: "Beauty Bush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eec1be",
  },
  {
    name: "Beaver",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9f8170",
  },
  {
    name: "Beeswax",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fef2c7",
  },
  {
    name: "Beige",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5f5dc",
  },
  {
    name: "Belgion",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#add8ff",
  },
  {
    name: "Bermuda",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7dd8c6",
  },
  {
    name: "Bermuda Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6b8ba2",
  },
  {
    name: "Beryl Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dee5c0",
  },
  {
    name: "Bianca",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fcfbf3",
  },
  {
    name: "Big Dip Oruby",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9c2542",
  },
  {
    name: "Big Foot Feet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e88e5a",
  },
  {
    name: "Big Stone",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#162a40",
  },
  {
    name: "Bilbao",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#327c14",
  },
  {
    name: "Biloba Flower",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b2a1ea",
  },
  {
    name: "Birch",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#373021",
  },
  {
    name: "Bird Flower",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d4cd16",
  },
  {
    name: "Biscay",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1b3162",
  },
  {
    name: "Bismark",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#497183",
  },
  {
    name: "Bison Hide",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c1b7a4",
  },
  {
    name: "Bisque",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffe4c4",
  },
  {
    name: "Bistre",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3d2b1f",
  },
  {
    name: "Bitter",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#868974",
  },
  {
    name: "Bitter Lemon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cae00d",
  },
  {
    name: "Bittersweet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fe6f5e",
  },
  {
    name: "Bittersweet Shimmer",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bf4f51",
  },
  {
    name: "Bizarre",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eededa",
  },
  {
    name: "Black",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#000000",
  },
  {
    name: "Black Bean",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3d0c02",
  },
  {
    name: "Black Coral",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#54626f",
  },
  {
    name: "Black Forest",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0b1304",
  },
  {
    name: "Black Haze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f6f7f7",
  },
  {
    name: "Black Leather Jacket",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#253529",
  },
  {
    name: "Black Marlin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3e2c1c",
  },
  {
    name: "Black Olive",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3b3c36",
  },
  {
    name: "Black Pearl",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#041322",
  },
  {
    name: "Black Rock",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0d0332",
  },
  {
    name: "Black Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#67032d",
  },
  {
    name: "Black Russian",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0a001c",
  },
  {
    name: "Black Shadows",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bfafb2",
  },
  {
    name: "Black Squeeze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f2fafa",
  },
  {
    name: "Black White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffef6",
  },
  {
    name: "Blackberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4d0135",
  },
  {
    name: "Blackcurrant",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#32293a",
  },
  {
    name: "Blanched Almond",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffebcd",
  },
  {
    name: "Blast Off Bronze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a57164",
  },
  {
    name: "Blaze Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff6700",
  },
  {
    name: "Bleach White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fef3d8",
  },
  {
    name: "Bleached Cedar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2c2133",
  },
  {
    name: "Bleu De France",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#318ce7",
  },
  {
    name: "Blizzard Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a3e3ed",
  },
  {
    name: "Blond",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#faf0be",
  },
  {
    name: "Blossom",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dcb4bc",
  },
  {
    name: "Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0000ff",
  },
  {
    name: "Blue Bayoux",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#496679",
  },
  {
    name: "Blue Bell",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a2a2d0",
  },
  {
    name: "Blue Chalk",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f1e9ff",
  },
  {
    name: "Blue Charcoal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#010d1a",
  },
  {
    name: "Blue Chill",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0c8990",
  },
  {
    name: "Blue Diamond",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#380474",
  },
  {
    name: "Blue Dianne",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#204852",
  },
  {
    name: "Blue Gem",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2c0e8c",
  },
  {
    name: "Blue Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6699cc",
  },
  {
    name: "Blue Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0d98ba",
  },
  {
    name: "Blue Haze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bfbed8",
  },
  {
    name: "Blue Jeans",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5dadec",
  },
  {
    name: "Blue Lagoon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ace5ee",
  },
  {
    name: "Blue Magenta Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#553592",
  },
  {
    name: "Blue Marguerite",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7666c6",
  },
  {
    name: "Blue Ribbon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0066ff",
  },
  {
    name: "Blue Romance",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d2f6de",
  },
  {
    name: "Blue Sapphire",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#126180",
  },
  {
    name: "Blue Smoke",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#748881",
  },
  {
    name: "Blue Stone",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#016162",
  },
  {
    name: "Blue Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8a2be2",
  },
  {
    name: "Blue Whale",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#042e4c",
  },
  {
    name: "Blue Yonder",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5072a7",
  },
  {
    name: "Blue Zodiac",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#13264d",
  },
  {
    name: "Blueberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4f86f7",
  },
  {
    name: "Bluebonnet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1c1cf0",
  },
  {
    name: "Blumine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#18587a",
  },
  {
    name: "Blush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#de5d83",
  },
  {
    name: "Bole",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#79443b",
  },
  {
    name: "Bombay",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#afb1b8",
  },
  {
    name: "Bon Jour",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e5e0e1",
  },
  {
    name: "Bondi Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0095b6",
  },
  {
    name: "Bone",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e3dac9",
  },
  {
    name: "Booger Buster",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dde26a",
  },
  {
    name: "Bordeaux",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5c0120",
  },
  {
    name: "Bossanova",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4e2a5a",
  },
  {
    name: "Boston Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3b91b4",
  },
  {
    name: "Boston University Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc0000",
  },
  {
    name: "Botticelli",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c7dde5",
  },
  {
    name: "Bottle Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#006a4e",
  },
  {
    name: "Boulder",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7a7a7a",
  },
  {
    name: "Bouquet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ae809e",
  },
  {
    name: "Bourbon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ba6f1e",
  },
  {
    name: "Boysenberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#873260",
  },
  {
    name: "Bracken",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4a2a04",
  },
  {
    name: "Brandeis Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0070ff",
  },
  {
    name: "Brandy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dec196",
  },
  {
    name: "Brandy Punch",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cd8429",
  },
  {
    name: "Brandy Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bb8983",
  },
  {
    name: "Brass",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b5a642",
  },
  {
    name: "Breaker Bay",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5da19f",
  },
  {
    name: "Brick Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cb4154",
  },
  {
    name: "Bridal Heath",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffaf4",
  },
  {
    name: "Bridesmaid",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fef0ec",
  },
  {
    name: "Bright Cerulean",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1dacd6",
  },
  {
    name: "Bright Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3c4151",
  },
  {
    name: "Bright Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#66ff00",
  },
  {
    name: "Bright Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bf94e4",
  },
  {
    name: "Bright Lilac",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d891ef",
  },
  {
    name: "Bright Maroon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c32148",
  },
  {
    name: "Bright Navy Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1974d2",
  },
  {
    name: "Bright Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b10000",
  },
  {
    name: "Bright Sun",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fed33c",
  },
  {
    name: "Bright Turquoise",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#08e8de",
  },
  {
    name: "Bright Ube",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d19fe8",
  },
  {
    name: "Bright Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffaa1d",
  },
  {
    name: "Brilliant Azure",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3399ff",
  },
  {
    name: "Brilliant Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f4bbff",
  },
  {
    name: "Brilliant Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff55a3",
  },
  {
    name: "Brink Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fb607f",
  },
  {
    name: "British Racing Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#004225",
  },
  {
    name: "Bronco",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aba196",
  },
  {
    name: "Bronze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cd7f32",
  },
  {
    name: "Bronze Olive",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4e420c",
  },
  {
    name: "Bronze Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#737000",
  },
  {
    name: "Bronzetone",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4d400f",
  },
  {
    name: "Broom",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffec13",
  },
  {
    name: "Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#964b00",
  },
  {
    name: "Brown Bramble",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#592804",
  },
  {
    name: "Brown Derby",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#492615",
  },
  {
    name: "Brown Pod",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#401801",
  },
  {
    name: "Brown Rust",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#af593e",
  },
  {
    name: "Brown Sugar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#af6e4d",
  },
  {
    name: "Brown Tumbleweed",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#37290e",
  },
  {
    name: "Brown Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc9966",
  },
  {
    name: "Brunswick Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1b4d3e",
  },
  {
    name: "Bubble Gum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffc1cc",
  },
  {
    name: "Bubbles",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e7feff",
  },
  {
    name: "Buccaneer",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#622f30",
  },
  {
    name: "Bud",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a8ae9c",
  },
  {
    name: "Bud Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7bb661",
  },
  {
    name: "Buddha Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c1a004",
  },
  {
    name: "Buff",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0dc82",
  },
  {
    name: "Bulgarian Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#480607",
  },
  {
    name: "Bull Shot",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#864d1e",
  },
  {
    name: "Bunker",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0d1117",
  },
  {
    name: "Bunting",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#151f4c",
  },
  {
    name: "Burgundy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#800020",
  },
  {
    name: "Burlywood",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#deb887",
  },
  {
    name: "Burnham",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#002e20",
  },
  {
    name: "Burning Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff7034",
  },
  {
    name: "Burning Sand",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d99376",
  },
  {
    name: "Burnished Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a17a74",
  },
  {
    name: "Burnt Maroon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#420303",
  },
  {
    name: "Burnt Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc5500",
  },
  {
    name: "Burnt Sienna",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e97451",
  },
  {
    name: "Burnt Umber",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8a3324",
  },
  {
    name: "Bush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0d2e1c",
  },
  {
    name: "Buttercup",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f3ad16",
  },
  {
    name: "Buttered Rum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a1750d",
  },
  {
    name: "Butterfly Bush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#624e9a",
  },
  {
    name: "Buttermilk",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff1b5",
  },
  {
    name: "Buttery White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffcea",
  },
  {
    name: "Byzantine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bd33a4",
  },
  {
    name: "Byzantium",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#702963",
  },
  {
    name: "CG Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#007aa5",
  },
  {
    name: "CG Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e03c31",
  },
  {
    name: "Cab Sav",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4d0a18",
  },
  {
    name: "Cabaret",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d94972",
  },
  {
    name: "Cabbage Pont",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3f4c3a",
  },
  {
    name: "Cactus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#587156",
  },
  {
    name: "Cadet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#536872",
  },
  {
    name: "Cadet Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5f9ea0",
  },
  {
    name: "Cadet Grey",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#91a3b0",
  },
  {
    name: "Cadillac",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b04c6a",
  },
  {
    name: "Cadmium Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#006b3c",
  },
  {
    name: "Cadmium Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ed872d",
  },
  {
    name: "Cadmium Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e30022",
  },
  {
    name: "Cadmium Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff600",
  },
  {
    name: "Cafe Noir",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4b3621",
  },
  {
    name: "Cafe Royale",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6f440c",
  },
  {
    name: "Cal Poly Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1e4d2b",
  },
  {
    name: "Calico",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e0c095",
  },
  {
    name: "California",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fe9d04",
  },
  {
    name: "Calypso",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#31728d",
  },
  {
    name: "Camarone",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00581a",
  },
  {
    name: "Cambridge Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a3c1ad",
  },
  {
    name: "Camelot",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#893456",
  },
  {
    name: "Cameo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d9b99b",
  },
  {
    name: "Cameo Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#efbbcc",
  },
  {
    name: "Camouflage",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3c3910",
  },
  {
    name: "Camouflage Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#78866b",
  },
  {
    name: "Can Can",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d591a4",
  },
  {
    name: "Canary",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f3fb62",
  },
  {
    name: "Canary Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffef00",
  },
  {
    name: "Candlelight",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fcd917",
  },
  {
    name: "Candy Apple Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff0800",
  },
  {
    name: "Cannon Black",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#251706",
  },
  {
    name: "Cannon Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#894367",
  },
  {
    name: "Cape Cod",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3c4443",
  },
  {
    name: "Cape Honey",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fee5ac",
  },
  {
    name: "Cape Palliser",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a26645",
  },
  {
    name: "Caper",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dcedb4",
  },
  {
    name: "Capri",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00bfff",
  },
  {
    name: "Caput Mortuum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#592720",
  },
  {
    name: "Caramel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffddaf",
  },
  {
    name: "Cararra",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eeeee8",
  },
  {
    name: "Cardin Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#01361c",
  },
  {
    name: "Cardinal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c41e3a",
  },
  {
    name: "Cardinal Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8c055e",
  },
  {
    name: "Careys Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d29eaa",
  },
  {
    name: "Caribbean Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00cc99",
  },
  {
    name: "Carissma",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ea88a8",
  },
  {
    name: "Carla",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f3ffd8",
  },
  {
    name: "Carmine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#960018",
  },
  {
    name: "Carmine Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eb4c42",
  },
  {
    name: "Carmine Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff0038",
  },
  {
    name: "Carnaby Tan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5c2e01",
  },
  {
    name: "Carnation",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f95a61",
  },
  {
    name: "Carnation Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffa6c9",
  },
  {
    name: "Carnelian",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b31b1b",
  },
  {
    name: "Carolina Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#56a0d3",
  },
  {
    name: "Carousel Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f9e0ed",
  },
  {
    name: "Carrot Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ed9121",
  },
  {
    name: "Casablanca",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8b853",
  },
  {
    name: "Casal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2f6168",
  },
  {
    name: "Cascade",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8ba9a5",
  },
  {
    name: "Cashmere",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e6bea5",
  },
  {
    name: "Casper",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#adbed1",
  },
  {
    name: "Castleton Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00563b",
  },
  {
    name: "Castro",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#52001f",
  },
  {
    name: "Catalina Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#062a78",
  },
  {
    name: "Catawba",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#703642",
  },
  {
    name: "Catskill White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eef6f7",
  },
  {
    name: "Cavern Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e3bebe",
  },
  {
    name: "Cedar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3e1c14",
  },
  {
    name: "Cedar Chest",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c95a49",
  },
  {
    name: "Cedar Wood Finish",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#711a00",
  },
  {
    name: "Ceil",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#92a1cf",
  },
  {
    name: "Celadon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ace1af",
  },
  {
    name: "Celadon Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2f847c",
  },
  {
    name: "Celery",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b8c25d",
  },
  {
    name: "Celeste",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b2ffff",
  },
  {
    name: "Celestial Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4997d0",
  },
  {
    name: "Cello",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1e385b",
  },
  {
    name: "Celtic",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#163222",
  },
  {
    name: "Cement",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8d7662",
  },
  {
    name: "Ceramic",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fcfff9",
  },
  {
    name: "Cerise",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#de3163",
  },
  {
    name: "Cerise Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ec3b83",
  },
  {
    name: "Cerulean",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#007ba7",
  },
  {
    name: "Cerulean Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2a52be",
  },
  {
    name: "Cerulean Frost",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6d9bc3",
  },
  {
    name: "Chablis",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff4f3",
  },
  {
    name: "Chalet Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#516e3d",
  },
  {
    name: "Chalky",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eed794",
  },
  {
    name: "Chambray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#354e8c",
  },
  {
    name: "Chamois",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eddcb1",
  },
  {
    name: "Chamoisee",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a0785a",
  },
  {
    name: "Champagne",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f7e7ce",
  },
  {
    name: "Chantilly",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8c3df",
  },
  {
    name: "Charade",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#292937",
  },
  {
    name: "Charcoal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#36454f",
  },
  {
    name: "Chardon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff3f1",
  },
  {
    name: "Chardonnay",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffcd8c",
  },
  {
    name: "Charleston Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#232b2b",
  },
  {
    name: "Charlotte",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#baeef9",
  },
  {
    name: "Charm",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d47494",
  },
  {
    name: "Charm Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e68fac",
  },
  {
    name: "Chartreuse",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dfff00",
  },
  {
    name: "Chateau Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#40a860",
  },
  {
    name: "Chatelle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bdb3c7",
  },
  {
    name: "Chathams Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#175579",
  },
  {
    name: "Chelsea Cucumber",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#83aa5d",
  },
  {
    name: "Chelsea Gem",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9e5302",
  },
  {
    name: "Chenin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dfcd6f",
  },
  {
    name: "Cherokee",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fcda98",
  },
  {
    name: "Cherry Blossom Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffb7c5",
  },
  {
    name: "Cherry Pie",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2a0359",
  },
  {
    name: "Cherrywood",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#651a14",
  },
  {
    name: "Cherub",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8d9e9",
  },
  {
    name: "Chestnut",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#954535",
  },
  {
    name: "Chetwode Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8581d9",
  },
  {
    name: "Chicago",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5d5c58",
  },
  {
    name: "Chiffon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f1ffc8",
  },
  {
    name: "Chilean Fire",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f77703",
  },
  {
    name: "Chilean Heath",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffde6",
  },
  {
    name: "China Ivory",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fcffe7",
  },
  {
    name: "China Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a8516e",
  },
  {
    name: "Chinese Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aa381e",
  },
  {
    name: "Chinese Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#856088",
  },
  {
    name: "Chino",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cec7a7",
  },
  {
    name: "Chinook",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a8e3bd",
  },
  {
    name: "Chlorophyll Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4aff00",
  },
  {
    name: "Chocolate",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7b3f00",
  },
  {
    name: "Christalle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#33036b",
  },
  {
    name: "Christi",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#67a712",
  },
  {
    name: "Christine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e7730a",
  },
  {
    name: "Chrome White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e8f1d4",
  },
  {
    name: "Chrome Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffa700",
  },
  {
    name: "Cinder",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0e0e18",
  },
  {
    name: "Cinderella",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fde1dc",
  },
  {
    name: "Cinereous",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#98817b",
  },
  {
    name: "Cinnabar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e34234",
  },
  {
    name: "Cinnamon Satin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cd607e",
  },
  {
    name: "Cioccolato",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#55280c",
  },
  {
    name: "Citrine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e4d00a",
  },
  {
    name: "Citrine White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#faf7d6",
  },
  {
    name: "Citron",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9fa91f",
  },
  {
    name: "Citrus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a1c50a",
  },
  {
    name: "Clairvoyant",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#480656",
  },
  {
    name: "Clam Shell",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d4b6af",
  },
  {
    name: "Claret",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7f1734",
  },
  {
    name: "Classic Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbcce7",
  },
  {
    name: "Clay Ash",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bdc8b3",
  },
  {
    name: "Clay Creek",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8a8360",
  },
  {
    name: "Clear Day",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e9fffd",
  },
  {
    name: "Clementine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e96e00",
  },
  {
    name: "Clinker",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#371d09",
  },
  {
    name: "Cloud",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c7c4bf",
  },
  {
    name: "Cloud Burst",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#202e54",
  },
  {
    name: "Cloudy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aca59f",
  },
  {
    name: "Clover",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#384910",
  },
  {
    name: "Cobalt Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0047ab",
  },
  {
    name: "Cocoa Bean",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#481c1c",
  },
  {
    name: "Cocoa Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d2691e",
  },
  {
    name: "Coconut",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#965a3e",
  },
  {
    name: "Coconut Cream",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8f7dc",
  },
  {
    name: "Cod Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0b0b0b",
  },
  {
    name: "Coffee",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6f4e37",
  },
  {
    name: "Coffee Bean",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2a140e",
  },
  {
    name: "Cognac",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9f381d",
  },
  {
    name: "Cola",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3f2500",
  },
  {
    name: "Cold Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aba0d9",
  },
  {
    name: "Cold Turkey",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cebaba",
  },
  {
    name: "Colonial White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffedbc",
  },
  {
    name: "Columbia Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c4d8e2",
  },
  {
    name: "Comet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5c5d75",
  },
  {
    name: "Como",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#517c66",
  },
  {
    name: "Conch",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c9d9d2",
  },
  {
    name: "Concord",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7c7b7a",
  },
  {
    name: "Concrete",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f2f2f2",
  },
  {
    name: "Confetti",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e9d75a",
  },
  {
    name: "Congo Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#593737",
  },
  {
    name: "Congo Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f88379",
  },
  {
    name: "Congress Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#02478e",
  },
  {
    name: "Conifer",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#acdd4d",
  },
  {
    name: "Contessa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c6726b",
  },
  {
    name: "Cool Black",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#002e63",
  },
  {
    name: "Cool Grey",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8c92ac",
  },
  {
    name: "Copper",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b87333",
  },
  {
    name: "Copper Canyon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7e3a15",
  },
  {
    name: "Copper Penny",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ad6f69",
  },
  {
    name: "Copper Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cb6d51",
  },
  {
    name: "Copper Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#996666",
  },
  {
    name: "Copper Rust",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#944747",
  },
  {
    name: "Coquelicot",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff3800",
  },
  {
    name: "Coral",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff7f50",
  },
  {
    name: "Coral Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff4040",
  },
  {
    name: "Coral Reef",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c7bca2",
  },
  {
    name: "Coral Tree",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a86b6b",
  },
  {
    name: "Cordovan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#893f45",
  },
  {
    name: "Corduroy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#606e68",
  },
  {
    name: "Coriander",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c4d0b0",
  },
  {
    name: "Cork",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#40291d",
  },
  {
    name: "Corn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e7bf05",
  },
  {
    name: "Corn Field",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8facd",
  },
  {
    name: "Corn Harvest",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b6b0b",
  },
  {
    name: "Cornflower Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6495ed",
  },
  {
    name: "Cornflower Lilac",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffb0ac",
  },
  {
    name: "Cornsilk",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff8dc",
  },
  {
    name: "Corvette",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fad3a2",
  },
  {
    name: "Cosmic",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#76395d",
  },
  {
    name: "Cosmic Cobalt",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2e2d88",
  },
  {
    name: "Cosmic Latte",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff8e7",
  },
  {
    name: "Cosmos",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffd8d9",
  },
  {
    name: "Costa Del Sol",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#615d30",
  },
  {
    name: "Cotton Candy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffbcd9",
  },
  {
    name: "Cotton Seed",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c2bdb6",
  },
  {
    name: "County Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#01371a",
  },
  {
    name: "Cowboy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4d282d",
  },
  {
    name: "Coyote Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#81613e",
  },
  {
    name: "Crail",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b95140",
  },
  {
    name: "Cranberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#db5079",
  },
  {
    name: "Crater Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#462425",
  },
  {
    name: "Crayola Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1f75fe",
  },
  {
    name: "Crayola Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1cac78",
  },
  {
    name: "Crayola Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff7538",
  },
  {
    name: "Crayola Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ee204d",
  },
  {
    name: "Crayola Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fce883",
  },
  {
    name: "Cream",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffdd0",
  },
  {
    name: "Cream Brulee",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffe5a0",
  },
  {
    name: "Cream Can",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5c85c",
  },
  {
    name: "Creole",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1e0f04",
  },
  {
    name: "Crete",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#737829",
  },
  {
    name: "Crimson",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dc143c",
  },
  {
    name: "Crimson Glory",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#be0032",
  },
  {
    name: "Crimson Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#990000",
  },
  {
    name: "Crocodile",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#736d58",
  },
  {
    name: "Crown of Thorns",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#771f1f",
  },
  {
    name: "Crowshead",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1c1208",
  },
  {
    name: "Cruise",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b5ecdf",
  },
  {
    name: "Crusoe",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#004816",
  },
  {
    name: "Crusta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fd7b33",
  },
  {
    name: "Cumin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#924321",
  },
  {
    name: "Cumulus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fdffd5",
  },
  {
    name: "Cupid",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbbeda",
  },
  {
    name: "Curious Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2596d1",
  },
  {
    name: "Cutty Sark",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#507672",
  },
  {
    name: "Cyan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00ffff",
  },
  {
    name: "Cyan Azure",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4e82b4",
  },
  {
    name: "Cyan Blue Azure",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4682bf",
  },
  {
    name: "Cyan Cobalt Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#28589c",
  },
  {
    name: "Cyan Cornflower Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#188bc2",
  },
  {
    name: "Cyber Grape",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#58427c",
  },
  {
    name: "Cyber Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffd300",
  },
  {
    name: "Cyclamen",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f56fa1",
  },
  {
    name: "Cyprus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#003e40",
  },
  {
    name: "Daffodil",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffff31",
  },
  {
    name: "Daintree",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#012731",
  },
  {
    name: "Dairy Cream",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f9e4bc",
  },
  {
    name: "Daisy Bush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4f2398",
  },
  {
    name: "Dallas",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6e4b26",
  },
  {
    name: "Dandelion",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0e130",
  },
  {
    name: "Danube",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6093d1",
  },
  {
    name: "Dark Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00008b",
  },
  {
    name: "Dark Blue Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#666699",
  },
  {
    name: "Dark Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#654321",
  },
  {
    name: "Dark Brown Tangelo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#88654e",
  },
  {
    name: "Dark Burgundy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#770f05",
  },
  {
    name: "Dark Byzantium",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5d3954",
  },
  {
    name: "Dark Candy Apple Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a40000",
  },
  {
    name: "Dark Cerulean",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#08457e",
  },
  {
    name: "Dark Chestnut",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#986960",
  },
  {
    name: "Dark Coral",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cd5b45",
  },
  {
    name: "Dark Cyan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#008b8b",
  },
  {
    name: "Dark Ebony",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3c2005",
  },
  {
    name: "Dark Fern",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0a480d",
  },
  {
    name: "Dark Goldenrod",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b8860b",
  },
  {
    name: "Dark Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#013220",
  },
  {
    name: "Dark Gunmetal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1f262a",
  },
  {
    name: "Dark Imperial Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6e6ef9",
  },
  {
    name: "Dark Jungle Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1a2421",
  },
  {
    name: "Dark Khaki",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bdb76b",
  },
  {
    name: "Dark Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#734f96",
  },
  {
    name: "Dark Liver",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#534b4f",
  },
  {
    name: "Dark Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b008b",
  },
  {
    name: "Dark Medium Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a9a9a9",
  },
  {
    name: "Dark Midnight Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#003366",
  },
  {
    name: "Dark Moss Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4a5d23",
  },
  {
    name: "Dark Olive Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#556b2f",
  },
  {
    name: "Dark Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff8c00",
  },
  {
    name: "Dark Orchid",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9932cc",
  },
  {
    name: "Dark Pastel Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#779ecb",
  },
  {
    name: "Dark Pastel Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#03c03c",
  },
  {
    name: "Dark Pastel Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#966fd6",
  },
  {
    name: "Dark Pastel Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c23b22",
  },
  {
    name: "Dark Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e75480",
  },
  {
    name: "Dark Puce",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4f3a3c",
  },
  {
    name: "Dark Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#301934",
  },
  {
    name: "Dark Raspberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#872657",
  },
  {
    name: "Dark Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b0000",
  },
  {
    name: "Dark Salmon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e9967a",
  },
  {
    name: "Dark Scarlet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#560319",
  },
  {
    name: "Dark Sea Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8fbc8f",
  },
  {
    name: "Dark Sienna",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3c1414",
  },
  {
    name: "Dark Sky Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8cbed6",
  },
  {
    name: "Dark Slate Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#483d8b",
  },
  {
    name: "Dark Slate Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2f4f4f",
  },
  {
    name: "Dark Spring Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#177245",
  },
  {
    name: "Dark Tan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#918151",
  },
  {
    name: "Dark Tangerine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffa812",
  },
  {
    name: "Dark Terra Cotta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc4e5c",
  },
  {
    name: "Dark Turquoise",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00ced1",
  },
  {
    name: "Dark Vanilla",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d1bea8",
  },
  {
    name: "Dark Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9400d3",
  },
  {
    name: "Dark Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9b870c",
  },
  {
    name: "Dartmouth Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00703c",
  },
  {
    name: "Davys Grey",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#555555",
  },
  {
    name: "Dawn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a6a29a",
  },
  {
    name: "Dawn Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f3e9e5",
  },
  {
    name: "De York",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7ac488",
  },
  {
    name: "Debian Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d70a53",
  },
  {
    name: "Deco",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d2da97",
  },
  {
    name: "Deep Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#220878",
  },
  {
    name: "Deep Blush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e47698",
  },
  {
    name: "Deep Bronze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4a3004",
  },
  {
    name: "Deep Carmine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a9203e",
  },
  {
    name: "Deep Carmine Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ef3038",
  },
  {
    name: "Deep Carrot Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e9692c",
  },
  {
    name: "Deep Cerise",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#da3287",
  },
  {
    name: "Deep Chestnut",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b94e48",
  },
  {
    name: "Deep Cove",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#051040",
  },
  {
    name: "Deep Fir",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#002900",
  },
  {
    name: "Deep Forest Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#182d09",
  },
  {
    name: "Deep Fuchsia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c154c1",
  },
  {
    name: "Deep Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#056608",
  },
  {
    name: "Deep Green Cyan Turquoise",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0e7c61",
  },
  {
    name: "Deep Jungle Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#004b49",
  },
  {
    name: "Deep Koamaru",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#333366",
  },
  {
    name: "Deep Lemon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5c71a",
  },
  {
    name: "Deep Lilac",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9955bb",
  },
  {
    name: "Deep Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc00cc",
  },
  {
    name: "Deep Maroon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#820000",
  },
  {
    name: "Deep Oak",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#412010",
  },
  {
    name: "Deep Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff1493",
  },
  {
    name: "Deep Puce",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a95c68",
  },
  {
    name: "Deep Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#850101",
  },
  {
    name: "Deep Ruby",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#843f5b",
  },
  {
    name: "Deep Saffron",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff9933",
  },
  {
    name: "Deep Sapphire",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#082567",
  },
  {
    name: "Deep Sea",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#01826b",
  },
  {
    name: "Deep Sea Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#095859",
  },
  {
    name: "Deep Space Sparkle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4a646c",
  },
  {
    name: "Deep Taupe",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7e5e60",
  },
  {
    name: "Deep Teal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#003532",
  },
  {
    name: "Deep Tuscan Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#66424d",
  },
  {
    name: "Deep Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#330066",
  },
  {
    name: "Deer",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ba8759",
  },
  {
    name: "Del Rio",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b09a95",
  },
  {
    name: "Dell",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#396413",
  },
  {
    name: "Delta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a4a49d",
  },
  {
    name: "Deluge",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7563a8",
  },
  {
    name: "Denim",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1560bd",
  },
  {
    name: "Denim Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2243b6",
  },
  {
    name: "Derby",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffeed8",
  },
  {
    name: "Desaturated Cyan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#669999",
  },
  {
    name: "Desert",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ae6020",
  },
  {
    name: "Desert Sand",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#edc9af",
  },
  {
    name: "Desert Storm",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8f8f7",
  },
  {
    name: "Desire",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ea3c53",
  },
  {
    name: "Dew",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eafffe",
  },
  {
    name: "Di Serria",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#db995e",
  },
  {
    name: "Diamond",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b9f2ff",
  },
  {
    name: "Diesel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#130000",
  },
  {
    name: "Dim Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#696969",
  },
  {
    name: "Dingley",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5d7747",
  },
  {
    name: "Dingy Dungeon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c53151",
  },
  {
    name: "Dirt",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9b7653",
  },
  {
    name: "Disco",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#871550",
  },
  {
    name: "Dixie",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e29418",
  },
  {
    name: "Dodger Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1e90ff",
  },
  {
    name: "Dogs",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b86d29",
  },
  {
    name: "Dogwood Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d71868",
  },
  {
    name: "Dollar Bill",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#85bb65",
  },
  {
    name: "Dolly",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f9ff8b",
  },
  {
    name: "Dolphin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#646077",
  },
  {
    name: "Domino",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8e775e",
  },
  {
    name: "Don Juan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5d4c51",
  },
  {
    name: "Donkey Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#664c28",
  },
  {
    name: "Dorado",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6b5755",
  },
  {
    name: "Double Colonial White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eee3ad",
  },
  {
    name: "Double Pearl Lusta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fcf4d0",
  },
  {
    name: "Double Spanish White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e6d7b9",
  },
  {
    name: "Dove Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6d6c6c",
  },
  {
    name: "Downriver",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#092256",
  },
  {
    name: "Downy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6fd0c5",
  },
  {
    name: "Driftwood",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#af8751",
  },
  {
    name: "Drover",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fdf7ad",
  },
  {
    name: "Duke Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00009c",
  },
  {
    name: "Dull Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a899e6",
  },
  {
    name: "Dune",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#383533",
  },
  {
    name: "Dust Storm",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e5ccc9",
  },
  {
    name: "Dusty Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a8989b",
  },
  {
    name: "Dutch White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#efdfbb",
  },
  {
    name: "Eagle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b6baa4",
  },
  {
    name: "Eagle Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#004953",
  },
  {
    name: "Earls Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c9b93b",
  },
  {
    name: "Early Dawn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff9e6",
  },
  {
    name: "Earth Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e1a95f",
  },
  {
    name: "East Bay",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#414c7d",
  },
  {
    name: "East Side",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ac91ce",
  },
  {
    name: "Eastern Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1e9ab0",
  },
  {
    name: "Ebb",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e9e3e3",
  },
  {
    name: "Ebony",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#555d50",
  },
  {
    name: "Ebony Clay",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#26283b",
  },
  {
    name: "Eclipse",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#311c17",
  },
  {
    name: "Ecru",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c2b280",
  },
  {
    name: "Ecru White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5f3e5",
  },
  {
    name: "Ecstasy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fa7814",
  },
  {
    name: "Eden",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#105852",
  },
  {
    name: "Edgewater",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c8e3d7",
  },
  {
    name: "Edward",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a2aeab",
  },
  {
    name: "Eerie Black",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1b1b1b",
  },
  {
    name: "Egg Sour",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff4dd",
  },
  {
    name: "Egg White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffefc1",
  },
  {
    name: "Eggplant",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#614051",
  },
  {
    name: "Eggshell",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0ead6",
  },
  {
    name: "Egyptian Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1034a6",
  },
  {
    name: "El Paso",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1e1708",
  },
  {
    name: "El Salva",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8f3e33",
  },
  {
    name: "Electric Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7df9ff",
  },
  {
    name: "Electric Crimson",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff003f",
  },
  {
    name: "Electric Indigo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6f00ff",
  },
  {
    name: "Electric Lime",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ccff00",
  },
  {
    name: "Electric Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bf00ff",
  },
  {
    name: "Electric Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b00ff",
  },
  {
    name: "Electric Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffff33",
  },
  {
    name: "Elephant",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#123447",
  },
  {
    name: "Elf Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#088370",
  },
  {
    name: "Elm",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1c7c7d",
  },
  {
    name: "Emerald",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#50c878",
  },
  {
    name: "Eminence",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6c3082",
  },
  {
    name: "Emperor",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#514649",
  },
  {
    name: "Empress",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#817377",
  },
  {
    name: "Endeavour",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0056a7",
  },
  {
    name: "Energy Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8dd5c",
  },
  {
    name: "Engineering International Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ba160c",
  },
  {
    name: "English Holly",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#022d15",
  },
  {
    name: "English Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b48395",
  },
  {
    name: "English Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ab4b52",
  },
  {
    name: "English Vermillion",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc474b",
  },
  {
    name: "English Walnut",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3e2b23",
  },
  {
    name: "Envy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8ba690",
  },
  {
    name: "Equator",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e1bc64",
  },
  {
    name: "Espresso",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#612718",
  },
  {
    name: "Eternity",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#211a0e",
  },
  {
    name: "Eton Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#96c8a2",
  },
  {
    name: "Eucalyptus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#44d7a8",
  },
  {
    name: "Eunry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cfa39d",
  },
  {
    name: "Evening Sea",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#024e46",
  },
  {
    name: "Everglade",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1c402e",
  },
  {
    name: "FOGRA29 Rich Black",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#010b13",
  },
  {
    name: "FOGRA39 Rich Black",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#010203",
  },
  {
    name: "Faded Jade",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#427977",
  },
  {
    name: "Fair Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffefec",
  },
  {
    name: "Falcon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7f626d",
  },
  {
    name: "Fallow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c19a6b",
  },
  {
    name: "Falu Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#801818",
  },
  {
    name: "Fandango",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b53389",
  },
  {
    name: "Fandango Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#de5285",
  },
  {
    name: "Fantasy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#faf3f0",
  },
  {
    name: "Fashion Fuchsia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f400a1",
  },
  {
    name: "Fawn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e5aa70",
  },
  {
    name: "Fedora",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#796a78",
  },
  {
    name: "Feijoa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9fdd8c",
  },
  {
    name: "Feldgrau",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4d5d53",
  },
  {
    name: "Fern",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#63b76c",
  },
  {
    name: "Fern Frond",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#657220",
  },
  {
    name: "Fern Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4f7942",
  },
  {
    name: "Ferra",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#704f50",
  },
  {
    name: "Ferrari Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff2800",
  },
  {
    name: "Festival",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbe96c",
  },
  {
    name: "Feta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0fcea",
  },
  {
    name: "Field Drab",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6c541e",
  },
  {
    name: "Fiery Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b35213",
  },
  {
    name: "Fiery Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff5470",
  },
  {
    name: "Finch",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#626649",
  },
  {
    name: "Finlandia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#556d56",
  },
  {
    name: "Finn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#692d54",
  },
  {
    name: "Fiord",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#405169",
  },
  {
    name: "Fire",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aa4203",
  },
  {
    name: "Fire Bush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e89928",
  },
  {
    name: "Fire Engine Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ce2029",
  },
  {
    name: "Firebrick",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b22222",
  },
  {
    name: "Firefly",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0e2a30",
  },
  {
    name: "Flame",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e25822",
  },
  {
    name: "Flame Pea",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#da5b38",
  },
  {
    name: "Flamenco",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff7d07",
  },
  {
    name: "Flamingo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f2552a",
  },
  {
    name: "Flamingo Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fc8eac",
  },
  {
    name: "Flavescent",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f7e98e",
  },
  {
    name: "Flax",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eedc82",
  },
  {
    name: "Flax Smoke",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7b8265",
  },
  {
    name: "Flint",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6f6a61",
  },
  {
    name: "Flirt",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a2006d",
  },
  {
    name: "Floral White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffaf0",
  },
  {
    name: "Flush Mahogany",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ca3435",
  },
  {
    name: "Foam",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d8fcfa",
  },
  {
    name: "Fog",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d7d0ff",
  },
  {
    name: "Foggy Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cbcab6",
  },
  {
    name: "Folly",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff004f",
  },
  {
    name: "Forest Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#228b22",
  },
  {
    name: "Forget Me Not",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff1ee",
  },
  {
    name: "Fountain Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#56b4be",
  },
  {
    name: "Frangipani",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffdeb3",
  },
  {
    name: "French Bistre",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#856d4d",
  },
  {
    name: "French Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0072bb",
  },
  {
    name: "French Fuchsia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fd3f92",
  },
  {
    name: "French Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bdbdc6",
  },
  {
    name: "French Lilac",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#86608e",
  },
  {
    name: "French Lime",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9efd38",
  },
  {
    name: "French Mauve",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d473d4",
  },
  {
    name: "French Pass",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bdedfd",
  },
  {
    name: "French Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fd6c9e",
  },
  {
    name: "French Plum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#811453",
  },
  {
    name: "French Puce",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4e1609",
  },
  {
    name: "French Raspberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c72c48",
  },
  {
    name: "French Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f64a8a",
  },
  {
    name: "French Sky Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#77b5fe",
  },
  {
    name: "French Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8806ce",
  },
  {
    name: "French Wine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ac1e44",
  },
  {
    name: "Fresh Air",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a6e7ff",
  },
  {
    name: "Fresh Eggplant",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#990066",
  },
  {
    name: "Friar Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#807e79",
  },
  {
    name: "Fringy Flower",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b1e2c1",
  },
  {
    name: "Froly",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f57584",
  },
  {
    name: "Frost",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#edf5dd",
  },
  {
    name: "Frostbite",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e936a7",
  },
  {
    name: "Frosted Mint",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dbfff8",
  },
  {
    name: "Frostee",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e4f6e7",
  },
  {
    name: "Fruit Salad",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4f9d5d",
  },
  {
    name: "Fuchsia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff00ff",
  },
  {
    name: "Fuchsia Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7a58c1",
  },
  {
    name: "Fuchsia Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff77ff",
  },
  {
    name: "Fuchsia Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc397b",
  },
  {
    name: "Fuchsia Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c74375",
  },
  {
    name: "Fuego",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bede0d",
  },
  {
    name: "Fuel Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eca927",
  },
  {
    name: "Fulvous",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e48400",
  },
  {
    name: "Fun Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1959a8",
  },
  {
    name: "Fun Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#016d39",
  },
  {
    name: "Fuscous Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#54534d",
  },
  {
    name: "Fuzzy Wuzzy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc6666",
  },
  {
    name: "Fuzzy Wuzzy Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c45655",
  },
  {
    name: "GO Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00ab66",
  },
  {
    name: "Gable Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#163531",
  },
  {
    name: "Gainsboro",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dcdcdc",
  },
  {
    name: "Gallery",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#efefef",
  },
  {
    name: "Galliano",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dcb20c",
  },
  {
    name: "Gamboge",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e49b0f",
  },
  {
    name: "Gamboge Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#996600",
  },
  {
    name: "Gargoyle Gas",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffdf46",
  },
  {
    name: "Geebung",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d18f1b",
  },
  {
    name: "Generic Viridian",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#007f66",
  },
  {
    name: "Genoa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#15736b",
  },
  {
    name: "Geraldine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fb8989",
  },
  {
    name: "Geyser",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d4dfe2",
  },
  {
    name: "Ghost",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c7c9d5",
  },
  {
    name: "Ghost White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8f8ff",
  },
  {
    name: "Giants Club",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b05c52",
  },
  {
    name: "Giants Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fe5a1d",
  },
  {
    name: "Gigas",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#523c94",
  },
  {
    name: "Gimblet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b8b56a",
  },
  {
    name: "Gin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e8f2eb",
  },
  {
    name: "Gin Fizz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff9e2",
  },
  {
    name: "Ginger",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b06500",
  },
  {
    name: "Givry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8e4bf",
  },
  {
    name: "Glacier",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#80b3c4",
  },
  {
    name: "Glade Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#61845f",
  },
  {
    name: "Glaucous",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6082b6",
  },
  {
    name: "Glitter",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e6e8fa",
  },
  {
    name: "Glossy Grape",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ab92b3",
  },
  {
    name: "Go Ben",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#726d4e",
  },
  {
    name: "Goblin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3d7d52",
  },
  {
    name: "Gold Drop",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f18200",
  },
  {
    name: "Gold Fusion",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#85754e",
  },
  {
    name: "Gold Tips",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#deba13",
  },
  {
    name: "Golden",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffd700",
  },
  {
    name: "Golden Bell",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e28913",
  },
  {
    name: "Golden Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#996515",
  },
  {
    name: "Golden Dream",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0d52d",
  },
  {
    name: "Golden Fizz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5fb3d",
  },
  {
    name: "Golden Gate Bridge",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c0362c",
  },
  {
    name: "Golden Glow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fde295",
  },
  {
    name: "Golden Poppy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fcc200",
  },
  {
    name: "Golden Sand",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0db7d",
  },
  {
    name: "Golden Tainoi",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffcc5c",
  },
  {
    name: "Golden Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffdf00",
  },
  {
    name: "Goldenrod",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#daa520",
  },
  {
    name: "Gondola",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#261414",
  },
  {
    name: "Gordons Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0b1107",
  },
  {
    name: "Gorse",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff14f",
  },
  {
    name: "Gossamer",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#069b81",
  },
  {
    name: "Gossip",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d2f8b0",
  },
  {
    name: "Gothic",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6d92a1",
  },
  {
    name: "Governor Bay",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2f3cb3",
  },
  {
    name: "Grain Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e4d5b7",
  },
  {
    name: "Grandis",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffd38c",
  },
  {
    name: "Granite Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#676767",
  },
  {
    name: "Granite Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8d8974",
  },
  {
    name: "Granny Apple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d5f6e3",
  },
  {
    name: "Granny Smith",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#84a0a0",
  },
  {
    name: "Granny Smith Apple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a8e4a0",
  },
  {
    name: "Grape",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6f2da8",
  },
  {
    name: "Graphite",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#251607",
  },
  {
    name: "Gravel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4a444b",
  },
  {
    name: "Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#808080",
  },
  {
    name: "Gray Asparagus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#465945",
  },
  {
    name: "Gray Chateau",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a2aab3",
  },
  {
    name: "Gray Nickel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c3c3bd",
  },
  {
    name: "Gray Nurse",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e7ece6",
  },
  {
    name: "Gray Olive",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a9a491",
  },
  {
    name: "Gray Suit",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c1becd",
  },
  {
    name: "Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00ff00",
  },
  {
    name: "Green Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1164b4",
  },
  {
    name: "Green Cyan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#009966",
  },
  {
    name: "Green Haze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#01a368",
  },
  {
    name: "Green House",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#24500f",
  },
  {
    name: "Green Kelp",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#25311c",
  },
  {
    name: "Green Leaf",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#436a0d",
  },
  {
    name: "Green Lizard",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a7f432",
  },
  {
    name: "Green Mist",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cbd3b0",
  },
  {
    name: "Green Pea",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1d6142",
  },
  {
    name: "Green Sheen",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6eaea1",
  },
  {
    name: "Green Smoke",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a4af6e",
  },
  {
    name: "Green Spring",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b8c1b1",
  },
  {
    name: "Green Vogue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#032b52",
  },
  {
    name: "Green Waterloo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#101405",
  },
  {
    name: "Green White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e8ebe0",
  },
  {
    name: "Green Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#adff2f",
  },
  {
    name: "Grenadier",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d54600",
  },
  {
    name: "Grizzly",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#885818",
  },
  {
    name: "Grullo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a99a86",
  },
  {
    name: "Guardsman Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ba0101",
  },
  {
    name: "Gulf Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#051657",
  },
  {
    name: "Gulf Stream",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#80b3ae",
  },
  {
    name: "Gull Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9dacb7",
  },
  {
    name: "Gum Leaf",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b6d3bf",
  },
  {
    name: "Gumbo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7ca1a6",
  },
  {
    name: "Gun Powder",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#414257",
  },
  {
    name: "Gunmetal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2a3439",
  },
  {
    name: "Gunsmoke",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#828685",
  },
  {
    name: "Gurkha",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9a9577",
  },
  {
    name: "Hacienda",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#98811b",
  },
  {
    name: "Hairy Heath",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6b2a14",
  },
  {
    name: "Haiti",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1b1035",
  },
  {
    name: "Halayà Úbe",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#663854",
  },
  {
    name: "Half Baked",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#85c4cc",
  },
  {
    name: "Half Colonial White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fdf6d3",
  },
  {
    name: "Half Dutch White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fef7de",
  },
  {
    name: "Half Spanish White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fef4db",
  },
  {
    name: "Half and Half",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffee1",
  },
  {
    name: "Hampton",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e5d8af",
  },
  {
    name: "Han Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#446ccf",
  },
  {
    name: "Han Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5218fa",
  },
  {
    name: "Harlequin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3fff00",
  },
  {
    name: "Harlequin Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#46cb18",
  },
  {
    name: "Harp",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e6f2ea",
  },
  {
    name: "Harvard Crimson",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c90016",
  },
  {
    name: "Harvest Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#da9100",
  },
  {
    name: "Havelock Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5590d9",
  },
  {
    name: "Hawaiian Tan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9d5616",
  },
  {
    name: "Hawkes Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d4e2fc",
  },
  {
    name: "Heat Wave",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff7a00",
  },
  {
    name: "Heath",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#541012",
  },
  {
    name: "Heather",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b7c3d0",
  },
  {
    name: "Heathered Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b6b095",
  },
  {
    name: "Heavy Metal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2b3228",
  },
  {
    name: "Heliotrope",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#df73ff",
  },
  {
    name: "Heliotrope Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aa98a9",
  },
  {
    name: "Heliotrope Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aa00bb",
  },
  {
    name: "Hemlock",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5e5d3b",
  },
  {
    name: "Hemp",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#907874",
  },
  {
    name: "Hibiscus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b6316c",
  },
  {
    name: "Highland",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6f8e63",
  },
  {
    name: "Hillary",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aca586",
  },
  {
    name: "Himalaya",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6a5d1b",
  },
  {
    name: "Hint of Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e6ffe9",
  },
  {
    name: "Hint of Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbf9f9",
  },
  {
    name: "Hint of Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fafde4",
  },
  {
    name: "Hippie Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#589aaf",
  },
  {
    name: "Hippie Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#53824b",
  },
  {
    name: "Hippie Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ae4560",
  },
  {
    name: "Hit Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a1adb5",
  },
  {
    name: "Hit Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffab81",
  },
  {
    name: "Hokey Pokey",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c8a528",
  },
  {
    name: "Hoki",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#65869f",
  },
  {
    name: "Holly",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#011d13",
  },
  {
    name: "Honey Flower",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4f1c70",
  },
  {
    name: "Honeydew",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0fff0",
  },
  {
    name: "Honeysuckle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#edfc84",
  },
  {
    name: "Honolulu Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#006db0",
  },
  {
    name: "Hookers Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#49796b",
  },
  {
    name: "Hopbush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d06da1",
  },
  {
    name: "Horizon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5a87a0",
  },
  {
    name: "Horses",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#543d37",
  },
  {
    name: "Horses Neck",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#604913",
  },
  {
    name: "Hot Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff1dce",
  },
  {
    name: "Hot Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff69b4",
  },
  {
    name: "Hot Toddy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b38007",
  },
  {
    name: "Humming Bird",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cff9f3",
  },
  {
    name: "Hunter Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#355e3b",
  },
  {
    name: "Hurricane",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#877c7b",
  },
  {
    name: "Husk",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b7a458",
  },
  {
    name: "Ice Cold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b1f4e7",
  },
  {
    name: "Iceberg",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#71a6d2",
  },
  {
    name: "Icterine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fcf75e",
  },
  {
    name: "Illuminating Emerald",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#319177",
  },
  {
    name: "Illusion",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f6a4c9",
  },
  {
    name: "Imperial",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#602f6b",
  },
  {
    name: "Imperial Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#002395",
  },
  {
    name: "Imperial Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ed2939",
  },
  {
    name: "Inch Worm",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b0e313",
  },
  {
    name: "Inchworm",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b2ec5d",
  },
  {
    name: "Independence",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4c516d",
  },
  {
    name: "India Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#138808",
  },
  {
    name: "Indian Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cd5c5c",
  },
  {
    name: "Indian Tan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4d1e01",
  },
  {
    name: "Indian Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e3a857",
  },
  {
    name: "Indigo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4b0082",
  },
  {
    name: "Indigo Dye",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#091f92",
  },
  {
    name: "Indochine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c26b03",
  },
  {
    name: "International Klein Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#002fa7",
  },
  {
    name: "International Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff4f00",
  },
  {
    name: "Iris",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5a4fcf",
  },
  {
    name: "Irish Coffee",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5f3d26",
  },
  {
    name: "Iroko",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#433120",
  },
  {
    name: "Iron",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d4d7d9",
  },
  {
    name: "Ironside Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#676662",
  },
  {
    name: "Ironstone",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#86483c",
  },
  {
    name: "Irresistible",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b3446c",
  },
  {
    name: "Isabelline",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f4f0ec",
  },
  {
    name: "Islamic Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#009000",
  },
  {
    name: "Island Spice",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffcee",
  },
  {
    name: "Ivory",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffff0",
  },
  {
    name: "Jacaranda",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2e0329",
  },
  {
    name: "Jacarta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3a2a6a",
  },
  {
    name: "Jacko Bean",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2e1905",
  },
  {
    name: "Jacksons Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#20208d",
  },
  {
    name: "Jade",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00a86b",
  },
  {
    name: "Jaffa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ef863f",
  },
  {
    name: "Jagged Ice",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c2e8e5",
  },
  {
    name: "Jagger",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#350e57",
  },
  {
    name: "Jaguar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#080110",
  },
  {
    name: "Jambalaya",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5b3013",
  },
  {
    name: "Janna",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f4ebd3",
  },
  {
    name: "Japanese Carmine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9d2933",
  },
  {
    name: "Japanese Indigo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#264348",
  },
  {
    name: "Japanese Laurel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0a6906",
  },
  {
    name: "Japanese Maple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#780109",
  },
  {
    name: "Japanese Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5b3256",
  },
  {
    name: "Japonica",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d87c63",
  },
  {
    name: "Jasmine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8de7e",
  },
  {
    name: "Jasper",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d73b3e",
  },
  {
    name: "Java",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1fc2c2",
  },
  {
    name: "Jazzberry Jam",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a50b5e",
  },
  {
    name: "Jelly Bean",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#da614e",
  },
  {
    name: "Jet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#343434",
  },
  {
    name: "Jet Stream",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b5d2ce",
  },
  {
    name: "Jewel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#126b40",
  },
  {
    name: "Jon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3b1f1f",
  },
  {
    name: "Jonquil",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f4ca16",
  },
  {
    name: "Jordy Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8ab9f1",
  },
  {
    name: "Judge Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#544333",
  },
  {
    name: "Jumbo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7c7b82",
  },
  {
    name: "June Bud",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bdda57",
  },
  {
    name: "Jungle Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#29ab87",
  },
  {
    name: "Jungle Mist",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b4cfd3",
  },
  {
    name: "Juniper",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6d9292",
  },
  {
    name: "Just Right",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eccdb9",
  },
  {
    name: "KU Crimson",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e8000d",
  },
  {
    name: "Kabul",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5e483e",
  },
  {
    name: "Kaitoke Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#004620",
  },
  {
    name: "Kangaroo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c6c8bd",
  },
  {
    name: "Karaka",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1e1609",
  },
  {
    name: "Karry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffead4",
  },
  {
    name: "Kashmir Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#507096",
  },
  {
    name: "Kelly Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4cbb17",
  },
  {
    name: "Kelp",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#454936",
  },
  {
    name: "Kenyan Copper",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7c1c05",
  },
  {
    name: "Keppel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3ab09e",
  },
  {
    name: "Key Lime",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e8f48c",
  },
  {
    name: "Key Lime Pie",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bfc921",
  },
  {
    name: "Khaki",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c3b091",
  },
  {
    name: "Kidnapper",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e1ead4",
  },
  {
    name: "Kilamanjaro",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#240c02",
  },
  {
    name: "Killarney",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3a6a47",
  },
  {
    name: "Kimberly",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#736c9f",
  },
  {
    name: "Kingfisher Daisy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3e0480",
  },
  {
    name: "Kobi",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e79fc4",
  },
  {
    name: "Kobicha",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6b4423",
  },
  {
    name: "Kokoda",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6e6d57",
  },
  {
    name: "Kombu Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#354230",
  },
  {
    name: "Korma",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8f4b0e",
  },
  {
    name: "Koromiko",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffbd5f",
  },
  {
    name: "Kournikova",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffe772",
  },
  {
    name: "Kumera",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#886221",
  },
  {
    name: "La Palma",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#368716",
  },
  {
    name: "La Rioja",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b3c110",
  },
  {
    name: "La Salle Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#087830",
  },
  {
    name: "Languid Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d6cadd",
  },
  {
    name: "Lapis Lazuli",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#26619c",
  },
  {
    name: "Las Palmas",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c6e610",
  },
  {
    name: "Laser",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c8b568",
  },
  {
    name: "Laurel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#749378",
  },
  {
    name: "Laurel Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a9ba9d",
  },
  {
    name: "Lava",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cf1020",
  },
  {
    name: "Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b57edc",
  },
  {
    name: "Lavender Blush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff0f5",
  },
  {
    name: "Lavender Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c4c3d0",
  },
  {
    name: "Lavender Indigo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9457eb",
  },
  {
    name: "Lavender Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ee82ee",
  },
  {
    name: "Lavender Mist",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e6e6fa",
  },
  {
    name: "Lavender Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbaed2",
  },
  {
    name: "Lavender Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#967bb6",
  },
  {
    name: "Lavender Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fba0e3",
  },
  {
    name: "Lawn Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7cfc00",
  },
  {
    name: "Leather",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#967059",
  },
  {
    name: "Lemon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff700",
  },
  {
    name: "Lemon Chiffon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffacd",
  },
  {
    name: "Lemon Curry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cca01d",
  },
  {
    name: "Lemon Ginger",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ac9e22",
  },
  {
    name: "Lemon Glacier",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fdff00",
  },
  {
    name: "Lemon Grass",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9b9e8f",
  },
  {
    name: "Lemon Lime",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e3ff00",
  },
  {
    name: "Lemon Meringue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f6eabe",
  },
  {
    name: "Lemon Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff44f",
  },
  {
    name: "Lenurple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ba93d8",
  },
  {
    name: "Liberty",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#545aa7",
  },
  {
    name: "Licorice",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1a1110",
  },
  {
    name: "Light Apricot",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fdd5b1",
  },
  {
    name: "Light Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#add8e6",
  },
  {
    name: "Light Brilliant Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fe2e2e",
  },
  {
    name: "Light Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b5651d",
  },
  {
    name: "Light Carmine Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e66771",
  },
  {
    name: "Light Cobalt Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#88ace0",
  },
  {
    name: "Light Coral",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f08080",
  },
  {
    name: "Light Cornflower Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#93ccea",
  },
  {
    name: "Light Crimson",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f56991",
  },
  {
    name: "Light Cyan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e0ffff",
  },
  {
    name: "Light Deep Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff5ccd",
  },
  {
    name: "Light French Beige",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c8ad7f",
  },
  {
    name: "Light Fuchsia Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f984ef",
  },
  {
    name: "Light Goldenrod Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fafad2",
  },
  {
    name: "Light Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d3d3d3",
  },
  {
    name: "Light Grayish Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc99cc",
  },
  {
    name: "Light Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#90ee90",
  },
  {
    name: "Light Hot Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffb3de",
  },
  {
    name: "Light Khaki",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0e68c",
  },
  {
    name: "Light Medium Orchid",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d39bcb",
  },
  {
    name: "Light Moss Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#addfad",
  },
  {
    name: "Light Orchid",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e6a8d7",
  },
  {
    name: "Light Pastel Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b19cd9",
  },
  {
    name: "Light Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffb6c1",
  },
  {
    name: "Light Salmon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffa07a",
  },
  {
    name: "Light Salmon Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff9999",
  },
  {
    name: "Light Sea Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#20b2aa",
  },
  {
    name: "Light Sky Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#87cefa",
  },
  {
    name: "Light Slate Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#778899",
  },
  {
    name: "Light Steel Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b0c4de",
  },
  {
    name: "Light Taupe",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b38b6d",
  },
  {
    name: "Light Turquoise",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#afeeee",
  },
  {
    name: "Light Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffffe0",
  },
  {
    name: "Lightning Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fcc01e",
  },
  {
    name: "Lilac",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c8a2c8",
  },
  {
    name: "Lilac Bush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9874d3",
  },
  {
    name: "Lilac Luster",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ae98aa",
  },
  {
    name: "Lily",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c8aabf",
  },
  {
    name: "Lily White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e7f8ff",
  },
  {
    name: "Lima",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#76bd17",
  },
  {
    name: "Lime",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bfff00",
  },
  {
    name: "Lime Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#32cd32",
  },
  {
    name: "Limeade",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6f9d02",
  },
  {
    name: "Limed Ash",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#747d63",
  },
  {
    name: "Limed Oak",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ac8a56",
  },
  {
    name: "Limed Spruce",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#394851",
  },
  {
    name: "Limerick",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9dc209",
  },
  {
    name: "Lincoln Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#195905",
  },
  {
    name: "Linen",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#faf0e6",
  },
  {
    name: "Link Water",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d9e4f5",
  },
  {
    name: "Lipstick",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ab0563",
  },
  {
    name: "Lisbon Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#423921",
  },
  {
    name: "Little Boy Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6ca0dc",
  },
  {
    name: "Liver",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#674c47",
  },
  {
    name: "Liver Chestnut",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#987456",
  },
  {
    name: "Livid Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4d282e",
  },
  {
    name: "Loafer",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eef4de",
  },
  {
    name: "Loblolly",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bdc9ce",
  },
  {
    name: "Lochinvar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2c8c84",
  },
  {
    name: "Lochmara",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#007ec7",
  },
  {
    name: "Locust",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a8af8e",
  },
  {
    name: "Log Cabin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#242a1d",
  },
  {
    name: "Logan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aaa9cd",
  },
  {
    name: "Lola",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dfcfdb",
  },
  {
    name: "London Hue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bea6c3",
  },
  {
    name: "Lonestar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6d0101",
  },
  {
    name: "Lotus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#863c3c",
  },
  {
    name: "Loulou",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#460b41",
  },
  {
    name: "Lucky",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#af9f1c",
  },
  {
    name: "Lucky Point",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1a1a68",
  },
  {
    name: "Lumber",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffe4cd",
  },
  {
    name: "Lunar Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3c493a",
  },
  {
    name: "Lust",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e62020",
  },
  {
    name: "Luxor Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a7882c",
  },
  {
    name: "Lynch",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#697e9a",
  },
  {
    name: "MSU Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#18453b",
  },
  {
    name: "Mabel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d9f7ff",
  },
  {
    name: "Macaroni And Cheese",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffbd88",
  },
  {
    name: "Macaroni and Cheese",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffb97b",
  },
  {
    name: "Madang",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b7f0be",
  },
  {
    name: "Madison",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#09255d",
  },
  {
    name: "Madras",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3f3002",
  },
  {
    name: "Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ca1f7b",
  },
  {
    name: "Magenta Haze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9f4576",
  },
  {
    name: "Magenta Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc338b",
  },
  {
    name: "Magic Mint",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aaf0d1",
  },
  {
    name: "Magic Potion",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff4466",
  },
  {
    name: "Magnolia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8f4ff",
  },
  {
    name: "Mahogany",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c04000",
  },
  {
    name: "Mai Tai",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b06608",
  },
  {
    name: "Maize",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbec5d",
  },
  {
    name: "Majorelle Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6050dc",
  },
  {
    name: "Makara",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#897d6d",
  },
  {
    name: "Mako",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#444954",
  },
  {
    name: "Malachite",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0bda51",
  },
  {
    name: "Malibu",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7dc8f7",
  },
  {
    name: "Mallard",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#233418",
  },
  {
    name: "Malta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bdb2a1",
  },
  {
    name: "Mamba",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8e8190",
  },
  {
    name: "Manatee",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#979aaa",
  },
  {
    name: "Mandalay",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ad781b",
  },
  {
    name: "Mandarin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f37a48",
  },
  {
    name: "Mandy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e25465",
  },
  {
    name: "Mandys Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f2c3b2",
  },
  {
    name: "Mango Tango",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff8243",
  },
  {
    name: "Manhattan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5c999",
  },
  {
    name: "Mantis",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#74c365",
  },
  {
    name: "Mantle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b9c90",
  },
  {
    name: "Manz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eeef78",
  },
  {
    name: "Mardi Gras",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#880085",
  },
  {
    name: "Marigold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eaa221",
  },
  {
    name: "Marigold Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbe870",
  },
  {
    name: "Mariner",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#286acd",
  },
  {
    name: "Maroon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#800000",
  },
  {
    name: "Maroon Oak",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#520c17",
  },
  {
    name: "Marshland",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0b0f08",
  },
  {
    name: "Martini",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#afa09e",
  },
  {
    name: "Martinique",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#363050",
  },
  {
    name: "Marzipan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8db9d",
  },
  {
    name: "Masala",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#403b38",
  },
  {
    name: "Matisse",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1b659d",
  },
  {
    name: "Matrix",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b05d54",
  },
  {
    name: "Matterhorn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4e3b41",
  },
  {
    name: "Mauve",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e0b0ff",
  },
  {
    name: "Mauve Taupe",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#915f6d",
  },
  {
    name: "Mauvelous",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ef98aa",
  },
  {
    name: "Maverick",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d8c2d5",
  },
  {
    name: "Maximum Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#47abcc",
  },
  {
    name: "Maximum Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fafa37",
  },
  {
    name: "May Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4c9141",
  },
  {
    name: "Maya Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#73c2fb",
  },
  {
    name: "Meat Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e5b73b",
  },
  {
    name: "Medium Aquamarine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#66ddaa",
  },
  {
    name: "Medium Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0000cd",
  },
  {
    name: "Medium Candy Apple Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e2062c",
  },
  {
    name: "Medium Electric Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#035096",
  },
  {
    name: "Medium Jungle Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1c352d",
  },
  {
    name: "Medium Orchid",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ba55d3",
  },
  {
    name: "Medium Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9370db",
  },
  {
    name: "Medium Red Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bb3385",
  },
  {
    name: "Medium Ruby",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aa4069",
  },
  {
    name: "Medium Sea Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3cb371",
  },
  {
    name: "Medium Sky Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#80daeb",
  },
  {
    name: "Medium Slate Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7b68ee",
  },
  {
    name: "Medium Spring Bud",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c9dc87",
  },
  {
    name: "Medium Spring Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00fa9a",
  },
  {
    name: "Medium Turquoise",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#48d1cc",
  },
  {
    name: "Medium Vermilion",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d9603b",
  },
  {
    name: "Melanie",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e4c2d5",
  },
  {
    name: "Melanzane",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#300529",
  },
  {
    name: "Mellow Apricot",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8b878",
  },
  {
    name: "Melon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fdbcb4",
  },
  {
    name: "Melrose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c7c1ff",
  },
  {
    name: "Mercury",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e5e5e5",
  },
  {
    name: "Merino",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f6f0e6",
  },
  {
    name: "Merlin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#413c37",
  },
  {
    name: "Merlot",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#831923",
  },
  {
    name: "Metal Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff00fd",
  },
  {
    name: "Metallic Bronze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#49371b",
  },
  {
    name: "Metallic Copper",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#71291d",
  },
  {
    name: "Metallic Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d4af37",
  },
  {
    name: "Metallic Seaweed",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0a7e8c",
  },
  {
    name: "Metallic Sunburst",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9c7c38",
  },
  {
    name: "Meteor",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d07d12",
  },
  {
    name: "Meteorite",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3c1f76",
  },
  {
    name: "Mexican Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e4007c",
  },
  {
    name: "Mexican Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a72525",
  },
  {
    name: "Mid Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5f5f6e",
  },
  {
    name: "Midnight",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#702670",
  },
  {
    name: "Midnight Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#191970",
  },
  {
    name: "Midnight Moss",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#041004",
  },
  {
    name: "Mikado",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2d2510",
  },
  {
    name: "Mikado Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffc40c",
  },
  {
    name: "Milan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#faffa4",
  },
  {
    name: "Milano Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b81104",
  },
  {
    name: "Milk Punch",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff6d4",
  },
  {
    name: "Millbrook",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#594433",
  },
  {
    name: "Mimosa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8fdd3",
  },
  {
    name: "Mindaro",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e3f988",
  },
  {
    name: "Mine Shaft",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#323232",
  },
  {
    name: "Mineral Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3f5d53",
  },
  {
    name: "Ming",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#36747d",
  },
  {
    name: "Minion Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5e050",
  },
  {
    name: "Minsk",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3f307f",
  },
  {
    name: "Mint",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3eb489",
  },
  {
    name: "Mint Cream",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5fffa",
  },
  {
    name: "Mint Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#98ff98",
  },
  {
    name: "Mint Julep",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f1eec1",
  },
  {
    name: "Mint Tulip",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c4f4eb",
  },
  {
    name: "Mirage",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#161928",
  },
  {
    name: "Mischka",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d1d2dd",
  },
  {
    name: "Mist Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c4c4bc",
  },
  {
    name: "Misty Moss",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bbb477",
  },
  {
    name: "Misty Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffe4e1",
  },
  {
    name: "Mobster",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7f7589",
  },
  {
    name: "Moccaccino",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6e1d14",
  },
  {
    name: "Moccasin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffe4b5",
  },
  {
    name: "Mocha",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#782d19",
  },
  {
    name: "Mojo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c04737",
  },
  {
    name: "Mona Lisa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffa194",
  },
  {
    name: "Monarch",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b0723",
  },
  {
    name: "Mondo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4a3c30",
  },
  {
    name: "Mongoose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b5a27f",
  },
  {
    name: "Monsoon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8a8389",
  },
  {
    name: "Monte Carlo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#83d0c6",
  },
  {
    name: "Monza",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c7031e",
  },
  {
    name: "Moody Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7f76d3",
  },
  {
    name: "Moon Glow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fcfeda",
  },
  {
    name: "Moon Mist",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dcddcc",
  },
  {
    name: "Moon Raker",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d6cef6",
  },
  {
    name: "Moonstone Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#73a9c2",
  },
  {
    name: "Mordant Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ae0c00",
  },
  {
    name: "Morning Glory",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9edee0",
  },
  {
    name: "Morocco Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#441d00",
  },
  {
    name: "Mortar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#504351",
  },
  {
    name: "Mosque",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#036a6e",
  },
  {
    name: "Moss Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8a9a5b",
  },
  {
    name: "Mountain Meadow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#30ba8f",
  },
  {
    name: "Mountain Mist",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#959396",
  },
  {
    name: "Mountbatten Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#997a8d",
  },
  {
    name: "Muddy Waters",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b78e5c",
  },
  {
    name: "Muesli",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aa8b5b",
  },
  {
    name: "Mughal Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#306030",
  },
  {
    name: "Mulberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c54b8c",
  },
  {
    name: "Mulberry Wood",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5c0536",
  },
  {
    name: "Mule Fawn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8c472f",
  },
  {
    name: "Mulled Wine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4e4562",
  },
  {
    name: "Mummys Tomb",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#828e84",
  },
  {
    name: "Munsell Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0093af",
  },
  {
    name: "Munsell Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00a877",
  },
  {
    name: "Munsell Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9f00c5",
  },
  {
    name: "Munsell Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f2003c",
  },
  {
    name: "Munsell Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#efcc00",
  },
  {
    name: "Mustard",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffdb58",
  },
  {
    name: "My Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d69188",
  },
  {
    name: "My Sin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffb31f",
  },
  {
    name: "Myrtle Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#317873",
  },
  {
    name: "Mystic",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d65282",
  },
  {
    name: "Mystic Maroon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ad4379",
  },
  {
    name: "NCS Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0087bd",
  },
  {
    name: "NCS Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#009f6b",
  },
  {
    name: "NCS Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c40233",
  },
  {
    name: "Nadeshiko Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f6adc6",
  },
  {
    name: "Nandor",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4b5d52",
  },
  {
    name: "Napa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aca494",
  },
  {
    name: "Napier Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2a8000",
  },
  {
    name: "Naples Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fada5e",
  },
  {
    name: "Narvik",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#edf9f1",
  },
  {
    name: "Natural Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b8680",
  },
  {
    name: "Navajo White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffdead",
  },
  {
    name: "Navy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#000080",
  },
  {
    name: "Nebula",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cbdbd6",
  },
  {
    name: "Negroni",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffe2c5",
  },
  {
    name: "Neon Carrot",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffa343",
  },
  {
    name: "Neon Fuchsia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fe4164",
  },
  {
    name: "Neon Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#39ff14",
  },
  {
    name: "Nepal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8eabc1",
  },
  {
    name: "Neptune",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7cb7bb",
  },
  {
    name: "Nero",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#140600",
  },
  {
    name: "Nevada",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#646e75",
  },
  {
    name: "New Car",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#214fc6",
  },
  {
    name: "New Orleans",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f3d69d",
  },
  {
    name: "New York Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d7837f",
  },
  {
    name: "Niagara",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#06a189",
  },
  {
    name: "Nickel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#727472",
  },
  {
    name: "Night Rider",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1f120f",
  },
  {
    name: "Night Shadz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aa375a",
  },
  {
    name: "Nile Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#193751",
  },
  {
    name: "Nobel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b7b1b1",
  },
  {
    name: "Nomad",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bab1a2",
  },
  {
    name: "Non Photo Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a4dded",
  },
  {
    name: "North Texas Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#059033",
  },
  {
    name: "Norway",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a8bd9f",
  },
  {
    name: "Nugget",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c59922",
  },
  {
    name: "Nutmeg",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#81422c",
  },
  {
    name: "Nutmeg Wood Finish",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#683600",
  },
  {
    name: "Nyanza",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e9ffdb",
  },
  {
    name: "Oasis",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#feefce",
  },
  {
    name: "Observatory",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#02866f",
  },
  {
    name: "Ocean Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4f42b5",
  },
  {
    name: "Ocean Boat Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0077be",
  },
  {
    name: "Ocean Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#48bf91",
  },
  {
    name: "Ochre",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc7722",
  },
  {
    name: "Off Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e6f8f3",
  },
  {
    name: "Off Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fef9e3",
  },
  {
    name: "Ogre Odor",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fd5240",
  },
  {
    name: "Oil",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#281e15",
  },
  {
    name: "Old Brick",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#901e1e",
  },
  {
    name: "Old Burgundy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#43302e",
  },
  {
    name: "Old Copper",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#724a2f",
  },
  {
    name: "Old Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cfb53b",
  },
  {
    name: "Old Heliotrope",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#563c5c",
  },
  {
    name: "Old Lace",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fdf5e6",
  },
  {
    name: "Old Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#796878",
  },
  {
    name: "Old Moss Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#867e36",
  },
  {
    name: "Old Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c08081",
  },
  {
    name: "Old Silver",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#848482",
  },
  {
    name: "Olive",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#808000",
  },
  {
    name: "Olive Drab",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6b8e23",
  },
  {
    name: "Olive Drab Seven",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3c341f",
  },
  {
    name: "Olive Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b5b35c",
  },
  {
    name: "Olive Haze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b8470",
  },
  {
    name: "Olivetone",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#716e10",
  },
  {
    name: "Olivine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9ab973",
  },
  {
    name: "Onahau",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cdf4ff",
  },
  {
    name: "Onion",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2f270e",
  },
  {
    name: "Onyx",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#353839",
  },
  {
    name: "Opal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a9c6c2",
  },
  {
    name: "Opera Mauve",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b784a7",
  },
  {
    name: "Opium",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8e6f70",
  },
  {
    name: "Oracle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#377475",
  },
  {
    name: "Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff7f00",
  },
  {
    name: "Orange Peel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff9f00",
  },
  {
    name: "Orange Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff4500",
  },
  {
    name: "Orange Roughy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c45719",
  },
  {
    name: "Orange Soda",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fa5b3d",
  },
  {
    name: "Orange White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fefced",
  },
  {
    name: "Orange Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8d568",
  },
  {
    name: "Orchid",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#da70d6",
  },
  {
    name: "Orchid Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f2bdcd",
  },
  {
    name: "Orchid White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffdf3",
  },
  {
    name: "Oregon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9b4703",
  },
  {
    name: "Organ",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6c2e1f",
  },
  {
    name: "Orient",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#015e85",
  },
  {
    name: "Oriental Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c69191",
  },
  {
    name: "Orinoco",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f3fbd4",
  },
  {
    name: "Orioles Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fb4f14",
  },
  {
    name: "Oslo Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#878d91",
  },
  {
    name: "Ottoman",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e9f8ed",
  },
  {
    name: "Outer Space",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#414a4c",
  },
  {
    name: "Outrageous Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff6e4a",
  },
  {
    name: "Oxford Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#002147",
  },
  {
    name: "Oxley",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#779e86",
  },
  {
    name: "Oyster Bay",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dafaff",
  },
  {
    name: "Oyster Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e9cecd",
  },
  {
    name: "Paarl",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a65529",
  },
  {
    name: "Pablo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#776f61",
  },
  {
    name: "Pacific Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1ca9c9",
  },
  {
    name: "Pacifika",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#778120",
  },
  {
    name: "Paco",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#411f10",
  },
  {
    name: "Padua",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ade6c4",
  },
  {
    name: "Pakistan Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#006600",
  },
  {
    name: "Palatinate Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#273be2",
  },
  {
    name: "Palatinate Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#682860",
  },
  {
    name: "Pale Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#987654",
  },
  {
    name: "Pale Canary",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffff99",
  },
  {
    name: "Pale Carmine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#af4035",
  },
  {
    name: "Pale Cerulean",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9bc4e2",
  },
  {
    name: "Pale Chestnut",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ddadaf",
  },
  {
    name: "Pale Copper",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#da8a67",
  },
  {
    name: "Pale Cornflower Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#abcdef",
  },
  {
    name: "Pale Cyan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#87d3f8",
  },
  {
    name: "Pale Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e6be8a",
  },
  {
    name: "Pale Goldenrod",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eee8aa",
  },
  {
    name: "Pale Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#98fb98",
  },
  {
    name: "Pale Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dcd0ff",
  },
  {
    name: "Pale Leaf",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c0d3b9",
  },
  {
    name: "Pale Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f984e5",
  },
  {
    name: "Pale Magenta Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff99cc",
  },
  {
    name: "Pale Oyster",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#988d77",
  },
  {
    name: "Pale Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fadadd",
  },
  {
    name: "Pale Plum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dda0dd",
  },
  {
    name: "Pale Prim",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fdfeb8",
  },
  {
    name: "Pale Red Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#db7093",
  },
  {
    name: "Pale Robin Egg Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#96ded1",
  },
  {
    name: "Pale Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffe1f2",
  },
  {
    name: "Pale Silver",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c9c0bb",
  },
  {
    name: "Pale Sky",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6e7783",
  },
  {
    name: "Pale Slate",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c3bfc1",
  },
  {
    name: "Pale Spring Bud",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ecebbd",
  },
  {
    name: "Pale Taupe",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bc987e",
  },
  {
    name: "Pale Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc99ff",
  },
  {
    name: "Palm Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#09230f",
  },
  {
    name: "Palm Leaf",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#19330e",
  },
  {
    name: "Pampas",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f4f2ee",
  },
  {
    name: "Panache",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eaf6ee",
  },
  {
    name: "Pancho",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#edcdab",
  },
  {
    name: "Pansy Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#78184a",
  },
  {
    name: "Pantone Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0018a8",
  },
  {
    name: "Pantone Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00ad43",
  },
  {
    name: "Pantone Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d0417e",
  },
  {
    name: "Pantone Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff5800",
  },
  {
    name: "Pantone Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d74894",
  },
  {
    name: "Pantone Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fedf00",
  },
  {
    name: "Paolo Veronese Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#009b7d",
  },
  {
    name: "Papaya Whip",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffefd5",
  },
  {
    name: "Paprika",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8d0226",
  },
  {
    name: "Paradise Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e63e62",
  },
  {
    name: "Paradiso",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#317d82",
  },
  {
    name: "Parchment",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f1e9d2",
  },
  {
    name: "Paris Daisy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff46e",
  },
  {
    name: "Paris M",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#26056a",
  },
  {
    name: "Paris White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cadcd4",
  },
  {
    name: "Parsley",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#134f19",
  },
  {
    name: "Pastel Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aec6cf",
  },
  {
    name: "Pastel Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#836953",
  },
  {
    name: "Pastel Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cfcfc4",
  },
  {
    name: "Pastel Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#77dd77",
  },
  {
    name: "Pastel Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f49ac2",
  },
  {
    name: "Pastel Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffb347",
  },
  {
    name: "Pastel Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dea5a4",
  },
  {
    name: "Pastel Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b39eb5",
  },
  {
    name: "Pastel Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff6961",
  },
  {
    name: "Pastel Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cb99c9",
  },
  {
    name: "Pastel Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fdfd96",
  },
  {
    name: "Patina",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#639a8f",
  },
  {
    name: "Pattens Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#def5ff",
  },
  {
    name: "Paua",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#260368",
  },
  {
    name: "Pavlova",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d7c498",
  },
  {
    name: "Paynes Grey",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#536878",
  },
  {
    name: "Peach",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffcba4",
  },
  {
    name: "Peachblow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffa4a4",
  },
  {
    name: "Peach Cream",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff0db",
  },
  {
    name: "Peach Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffcc99",
  },
  {
    name: "Peach Puff",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffdab9",
  },
  {
    name: "Peach Schnapps",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffdcd6",
  },
  {
    name: "Peach Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fadfad",
  },
  {
    name: "Peanut",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#782f16",
  },
  {
    name: "Pear",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d1e231",
  },
  {
    name: "Pearl",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eae0c8",
  },
  {
    name: "Pearl Aqua",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#88d8c0",
  },
  {
    name: "Pearl Bush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e8e0d5",
  },
  {
    name: "Pearl Lusta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fcf4dc",
  },
  {
    name: "Pearl Mystic Turquoise",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#32c6a6",
  },
  {
    name: "Pearly Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b768a2",
  },
  {
    name: "Peat",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#716b56",
  },
  {
    name: "Pelorous",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3eabbf",
  },
  {
    name: "Peppermint",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e3f5e1",
  },
  {
    name: "Perano",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a9bef2",
  },
  {
    name: "Perfume",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d0bef8",
  },
  {
    name: "Peridot",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e6e200",
  },
  {
    name: "Periglacial Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e1e6d6",
  },
  {
    name: "Periwinkle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ccccff",
  },
  {
    name: "Periwinkle Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c3cde6",
  },
  {
    name: "Permanent Geranium Lake",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e12c2c",
  },
  {
    name: "Persian Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1c39bb",
  },
  {
    name: "Persian Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00a693",
  },
  {
    name: "Persian Indigo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#32127a",
  },
  {
    name: "Persian Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d99058",
  },
  {
    name: "Persian Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f77fbe",
  },
  {
    name: "Persian Plum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#701c1c",
  },
  {
    name: "Persian Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc3333",
  },
  {
    name: "Persian Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fe28a2",
  },
  {
    name: "Persimmon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ec5800",
  },
  {
    name: "Peru",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cd853f",
  },
  {
    name: "Peru Tan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7f3a02",
  },
  {
    name: "Pesto",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7c7631",
  },
  {
    name: "Petite Orchid",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#db9690",
  },
  {
    name: "Pewter",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#96a8a1",
  },
  {
    name: "Pewter Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8ba8b7",
  },
  {
    name: "Pharlap",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a3807b",
  },
  {
    name: "Phthalo Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#000f89",
  },
  {
    name: "Phthalo Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#123524",
  },
  {
    name: "Picasso",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff39d",
  },
  {
    name: "Pickled Bean",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6e4826",
  },
  {
    name: "Pickled Bluewood",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#314459",
  },
  {
    name: "Picton Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#45b1e8",
  },
  {
    name: "Pictorial Carmine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c30b4e",
  },
  {
    name: "Pig Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fdd7e4",
  },
  {
    name: "Pigeon Post",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#afbdd9",
  },
  {
    name: "Piggy Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fddde6",
  },
  {
    name: "Pigment Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#333399",
  },
  {
    name: "Pigment Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00a550",
  },
  {
    name: "Pigment Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ed1c24",
  },
  {
    name: "Pine Cone",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6d5e54",
  },
  {
    name: "Pine Glade",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c7cd90",
  },
  {
    name: "Pine Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#01796f",
  },
  {
    name: "Pine Tree",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#171f04",
  },
  {
    name: "Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f05dbf",
  },
  {
    name: "Pink Flamingo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fc74fd",
  },
  {
    name: "Pink Flare",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e1c0c8",
  },
  {
    name: "Pink Lace",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffddf4",
  },
  {
    name: "Pink Lady",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff1d8",
  },
  {
    name: "Pink Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d8b2d1",
  },
  {
    name: "Pink Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff9966",
  },
  {
    name: "Pink Pearl",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e7accf",
  },
  {
    name: "Pink Raspberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#980036",
  },
  {
    name: "Pink Sherbet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f78fa7",
  },
  {
    name: "Pink Swan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#beb5b7",
  },
  {
    name: "Piper",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c96323",
  },
  {
    name: "Pipi",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fef4cc",
  },
  {
    name: "Pippin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffe1df",
  },
  {
    name: "Pirate Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ba7f03",
  },
  {
    name: "Pistachio",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#93c572",
  },
  {
    name: "Pixie Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c0d8b6",
  },
  {
    name: "Pixie Powder",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#391285",
  },
  {
    name: "Pizazz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff9000",
  },
  {
    name: "Pizza",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c99415",
  },
  {
    name: "Plantation",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#27504b",
  },
  {
    name: "Platinum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e5e4e2",
  },
  {
    name: "Plum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8e4585",
  },
  {
    name: "Plump Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5946b2",
  },
  {
    name: "Pohutukawa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8f021c",
  },
  {
    name: "Polar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e5f9f6",
  },
  {
    name: "Polished Pine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5da493",
  },
  {
    name: "Polo Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8da8cc",
  },
  {
    name: "Pomegranate",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f34723",
  },
  {
    name: "Pompadour",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#660045",
  },
  {
    name: "Popstar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#be4f62",
  },
  {
    name: "Porcelain",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eff2f3",
  },
  {
    name: "Porsche",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eaae69",
  },
  {
    name: "Port Gore",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#251f4f",
  },
  {
    name: "Portafino",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffffb4",
  },
  {
    name: "Portage",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b9fee",
  },
  {
    name: "Portica",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f9e663",
  },
  {
    name: "Portland Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff5a36",
  },
  {
    name: "Pot Pourri",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5e7e2",
  },
  {
    name: "Potters Clay",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8c5738",
  },
  {
    name: "Powder Ash",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bcc9c2",
  },
  {
    name: "Powder Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b0e0e6",
  },
  {
    name: "Prairie Sand",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9a3820",
  },
  {
    name: "Prelude",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d0c0e5",
  },
  {
    name: "Prim",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0e2ec",
  },
  {
    name: "Primrose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#edea99",
  },
  {
    name: "Princess Perfume",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff85cf",
  },
  {
    name: "Princeton Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f58025",
  },
  {
    name: "Process Cyan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00b7eb",
  },
  {
    name: "Process Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff0090",
  },
  {
    name: "Provincial Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fef5f1",
  },
  {
    name: "Prussian Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#003153",
  },
  {
    name: "Psychedelic Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#df00ff",
  },
  {
    name: "Puce",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc8899",
  },
  {
    name: "Pueblo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7d2c14",
  },
  {
    name: "Puerto Rico",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3fc1aa",
  },
  {
    name: "Pullman Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#644117",
  },
  {
    name: "Pullman Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3b331c",
  },
  {
    name: "Pumice",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c2cac4",
  },
  {
    name: "Pumpkin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff7518",
  },
  {
    name: "Pumpkin Skin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b1610b",
  },
  {
    name: "Punch",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dc4333",
  },
  {
    name: "Punga",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4d3d14",
  },
  {
    name: "Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#800080",
  },
  {
    name: "Purple Heart",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#69359c",
  },
  {
    name: "Purple Mountain Majesty",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9678b6",
  },
  {
    name: "Purple Navy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4e5180",
  },
  {
    name: "Purple Pizzazz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fe4eda",
  },
  {
    name: "Purple Plum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9c51b6",
  },
  {
    name: "Purple Taupe",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#50404d",
  },
  {
    name: "Purpureus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9a4eae",
  },
  {
    name: "Putty",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e7cd8c",
  },
  {
    name: "Quarter Pearl Lusta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffdf4",
  },
  {
    name: "Quarter Spanish White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f7f2e1",
  },
  {
    name: "Quartz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#51484f",
  },
  {
    name: "Queen Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#436b95",
  },
  {
    name: "Queen Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e8ccd7",
  },
  {
    name: "Quick Silver",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a6a6a6",
  },
  {
    name: "Quicksand",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bd978e",
  },
  {
    name: "Quill Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d6d6d1",
  },
  {
    name: "Quinacridone Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8e3a59",
  },
  {
    name: "Quincy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#623f2d",
  },
  {
    name: "RYB Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0247fe",
  },
  {
    name: "RYB Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#66b032",
  },
  {
    name: "RYB Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fb9902",
  },
  {
    name: "RYB Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fe2712",
  },
  {
    name: "RYB Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8601af",
  },
  {
    name: "RYB Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fefe33",
  },
  {
    name: "Racing Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0c1911",
  },
  {
    name: "Radical Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff355e",
  },
  {
    name: "Raffia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eadab8",
  },
  {
    name: "Rainee",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b9c8ac",
  },
  {
    name: "Raisin Black",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#242124",
  },
  {
    name: "Rajah",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbab60",
  },
  {
    name: "Rangitoto",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2e3222",
  },
  {
    name: "Rangoon Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1c1e13",
  },
  {
    name: "Raspberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e30b5d",
  },
  {
    name: "Raspberry Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e25098",
  },
  {
    name: "Raven",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#727b89",
  },
  {
    name: "Raw Sienna",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d68a59",
  },
  {
    name: "Raw Umber",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#826644",
  },
  {
    name: "Razzle Dazzle Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff33cc",
  },
  {
    name: "Razzmatazz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e3256b",
  },
  {
    name: "Razzmic Berry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8d4e85",
  },
  {
    name: "Rebecca Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#663399",
  },
  {
    name: "Rebel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3c1206",
  },
  {
    name: "Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff0000",
  },
  {
    name: "Red Beech",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7b3801",
  },
  {
    name: "Red Berry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8e0000",
  },
  {
    name: "Red Damask",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#da6a41",
  },
  {
    name: "Red Devil",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#860111",
  },
  {
    name: "Red Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff5349",
  },
  {
    name: "Red Oxide",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6e0902",
  },
  {
    name: "Red Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e40078",
  },
  {
    name: "Red Ribbon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ed0a3f",
  },
  {
    name: "Red Robin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#80341f",
  },
  {
    name: "Red Salsa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fd3a4a",
  },
  {
    name: "Red Stage",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d05f04",
  },
  {
    name: "Red Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c71585",
  },
  {
    name: "Redwood",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a45a52",
  },
  {
    name: "Reef",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c9ffa2",
  },
  {
    name: "Reef Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9f821c",
  },
  {
    name: "Regal Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#013f6a",
  },
  {
    name: "Regalia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#522d80",
  },
  {
    name: "Regent Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#86949f",
  },
  {
    name: "Regent St Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aad6e6",
  },
  {
    name: "Remy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#feebf3",
  },
  {
    name: "Reno Sand",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a86515",
  },
  {
    name: "Resolution Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#002387",
  },
  {
    name: "Revolver",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2c1632",
  },
  {
    name: "Rhino",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2e3f62",
  },
  {
    name: "Rhythm",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#777696",
  },
  {
    name: "Rice Cake",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffef0",
  },
  {
    name: "Rice Flower",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eeffe2",
  },
  {
    name: "Rich Black",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#004040",
  },
  {
    name: "Rich Brilliant Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f1a7fe",
  },
  {
    name: "Rich Carmine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d70040",
  },
  {
    name: "Rich Electric Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0892d0",
  },
  {
    name: "Rich Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a85307",
  },
  {
    name: "Rich Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a76bcf",
  },
  {
    name: "Rich Lilac",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b666d2",
  },
  {
    name: "Rich Maroon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b03060",
  },
  {
    name: "Rifle Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#444c38",
  },
  {
    name: "Rio Grande",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bbd009",
  },
  {
    name: "Ripe Lemon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f4d81c",
  },
  {
    name: "Ripe Plum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#410056",
  },
  {
    name: "Riptide",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8be6d8",
  },
  {
    name: "River Bed",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#434c59",
  },
  {
    name: "Roast Coffee",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#704241",
  },
  {
    name: "Rob Roy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eac674",
  },
  {
    name: "Robin Egg Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00cccc",
  },
  {
    name: "Rock",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4d3833",
  },
  {
    name: "Rock Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9eb1cd",
  },
  {
    name: "Rock Spray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ba450c",
  },
  {
    name: "Rocket Metallic",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8a7f80",
  },
  {
    name: "Rodeo Dust",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c9b29b",
  },
  {
    name: "Rolling Stone",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#747d83",
  },
  {
    name: "Roman",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#de6360",
  },
  {
    name: "Roman Coffee",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#795d4c",
  },
  {
    name: "Roman Silver",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#838996",
  },
  {
    name: "Romance",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffefd",
  },
  {
    name: "Romantic",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffd2b7",
  },
  {
    name: "Ronchi",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ecc54e",
  },
  {
    name: "Roof Terracotta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a62f20",
  },
  {
    name: "Rope",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8e4d1e",
  },
  {
    name: "Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff007f",
  },
  {
    name: "Rose Bonbon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f9429e",
  },
  {
    name: "Rose Bud",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbb2a3",
  },
  {
    name: "Rose Bud Cherry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#800b47",
  },
  {
    name: "Rose Dust",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9e5e6f",
  },
  {
    name: "Rose Ebony",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#674846",
  },
  {
    name: "Rose Fog",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e7bcb4",
  },
  {
    name: "Rose Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b76e79",
  },
  {
    name: "Rose Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff66cc",
  },
  {
    name: "Rose Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c21e56",
  },
  {
    name: "Rose Taupe",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#905d5d",
  },
  {
    name: "Rose Vale",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ab4e52",
  },
  {
    name: "Rose White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff6f5",
  },
  {
    name: "Rose of Sharon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bf5500",
  },
  {
    name: "Rosewood",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#65000b",
  },
  {
    name: "Rosso Corsa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d40000",
  },
  {
    name: "Rosy Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bc8f8f",
  },
  {
    name: "Roti",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c6a84b",
  },
  {
    name: "Rouge",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a23b6c",
  },
  {
    name: "Royal Air Force Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5d8aa8",
  },
  {
    name: "Royal Azure",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0038a8",
  },
  {
    name: "Royal Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4169e1",
  },
  {
    name: "Royal Fuchsia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ca2c92",
  },
  {
    name: "Royal Heath",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ab3472",
  },
  {
    name: "Royal Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7851a9",
  },
  {
    name: "Ruber",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ce4676",
  },
  {
    name: "Rubine Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d10056",
  },
  {
    name: "Ruby",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e0115f",
  },
  {
    name: "Ruby Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9b111e",
  },
  {
    name: "Ruddy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff0028",
  },
  {
    name: "Ruddy Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bb6528",
  },
  {
    name: "Ruddy Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e18e96",
  },
  {
    name: "Rufous",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a81c07",
  },
  {
    name: "Rum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#796989",
  },
  {
    name: "Rum Swizzle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f9f8e4",
  },
  {
    name: "Russet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#80461b",
  },
  {
    name: "Russett",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#755a57",
  },
  {
    name: "Russian Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#679267",
  },
  {
    name: "Russian Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#32174d",
  },
  {
    name: "Rust",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b7410e",
  },
  {
    name: "Rustic Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#480404",
  },
  {
    name: "Rusty Nail",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#86560a",
  },
  {
    name: "Rusty Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#da2c43",
  },
  {
    name: "SAE ECE Amber",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff7e00",
  },
  {
    name: "Sacramento State Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#043927",
  },
  {
    name: "Saddle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4c3024",
  },
  {
    name: "Saddle Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b4513",
  },
  {
    name: "Safety Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff7800",
  },
  {
    name: "Safety Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eed202",
  },
  {
    name: "Saffron",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f4c430",
  },
  {
    name: "Saffron Mango",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f9bf58",
  },
  {
    name: "Sage",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bcb88a",
  },
  {
    name: "Sahara",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b7a214",
  },
  {
    name: "Sahara Sand",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f1e788",
  },
  {
    name: "Sail",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b8e0f9",
  },
  {
    name: "Salem",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#097f4b",
  },
  {
    name: "Salmon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fa8072",
  },
  {
    name: "Salmon Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff91a4",
  },
  {
    name: "Salomie",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fedb8d",
  },
  {
    name: "Salt Box",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#685e6e",
  },
  {
    name: "Saltpan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f1f7f2",
  },
  {
    name: "Sambuca",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3a2010",
  },
  {
    name: "San Felix",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0b6207",
  },
  {
    name: "San Juan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#304b6a",
  },
  {
    name: "San Marino",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#456cac",
  },
  {
    name: "Sand Dune",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#967117",
  },
  {
    name: "Sandal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aa8d6f",
  },
  {
    name: "Sandrift",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ab917a",
  },
  {
    name: "Sandstone",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#796d62",
  },
  {
    name: "Sandstorm",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ecd540",
  },
  {
    name: "Sandwisp",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5e7a2",
  },
  {
    name: "Sandy Beach",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffeac8",
  },
  {
    name: "Sandy Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f4a460",
  },
  {
    name: "Sangria",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#92000a",
  },
  {
    name: "Sanguine Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8d3d38",
  },
  {
    name: "Santa Fe",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b16d52",
  },
  {
    name: "Santas Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9fa0b1",
  },
  {
    name: "Sap Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#507d2a",
  },
  {
    name: "Sapling",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ded4a4",
  },
  {
    name: "Sapphire",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0f52ba",
  },
  {
    name: "Sapphire Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0067a5",
  },
  {
    name: "Saratoga",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#555b10",
  },
  {
    name: "Sasquatch Socks",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff4681",
  },
  {
    name: "Satin Linen",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e6e4d4",
  },
  {
    name: "Satin Sheen Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cba135",
  },
  {
    name: "Sauvignon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff5f3",
  },
  {
    name: "Sazerac",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff4e0",
  },
  {
    name: "Scampi",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#675fa6",
  },
  {
    name: "Scandal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cffaf4",
  },
  {
    name: "Scarlet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff2400",
  },
  {
    name: "Scarlet Gum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#431560",
  },
  {
    name: "Scarlett",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#950015",
  },
  {
    name: "Scarpa Flow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#585562",
  },
  {
    name: "Schist",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a9b497",
  },
  {
    name: "School Bus Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffd800",
  },
  {
    name: "Schooner",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b847e",
  },
  {
    name: "Science Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0066cc",
  },
  {
    name: "Scooter",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2ebfd4",
  },
  {
    name: "Scorpion",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#695f62",
  },
  {
    name: "Scotch Mist",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffbdc",
  },
  {
    name: "Screamin Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#66ff66",
  },
  {
    name: "Sea Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#006994",
  },
  {
    name: "Sea Buckthorn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fba129",
  },
  {
    name: "Sea Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2e8b57",
  },
  {
    name: "Sea Mist",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c5dbca",
  },
  {
    name: "Sea Nymph",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#78a39c",
  },
  {
    name: "Sea Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ed989e",
  },
  {
    name: "Sea Serpent",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4bc7cf",
  },
  {
    name: "Seagull",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#80ccea",
  },
  {
    name: "Seal Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#59260b",
  },
  {
    name: "Seance",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#731e8f",
  },
  {
    name: "Seashell",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff5ee",
  },
  {
    name: "Seaweed",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1b2f11",
  },
  {
    name: "Selago",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0eefd",
  },
  {
    name: "Selective Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffba00",
  },
  {
    name: "Sepia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#704214",
  },
  {
    name: "Sepia Black",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2b0202",
  },
  {
    name: "Sepia Skin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9e5b40",
  },
  {
    name: "Serenade",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff4e8",
  },
  {
    name: "Shadow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8a795d",
  },
  {
    name: "Shadow Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#778ba5",
  },
  {
    name: "Shadow Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9ac2b8",
  },
  {
    name: "Shady Lady",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aaa5a9",
  },
  {
    name: "Shakespeare",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4eabd1",
  },
  {
    name: "Shalimar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbffba",
  },
  {
    name: "Shampoo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffcff1",
  },
  {
    name: "Shamrock",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#33cc99",
  },
  {
    name: "Shamrock Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#009e60",
  },
  {
    name: "Shark",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#25272c",
  },
  {
    name: "Sheen Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8fd400",
  },
  {
    name: "Sherpa Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#004950",
  },
  {
    name: "Sherwood Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#02402c",
  },
  {
    name: "Shilo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e8b9b3",
  },
  {
    name: "Shimmering Blush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d98695",
  },
  {
    name: "Shingle Fawn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6b4e31",
  },
  {
    name: "Shiny Shamrock",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5fa778",
  },
  {
    name: "Ship Cove",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#788bba",
  },
  {
    name: "Ship Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3e3a44",
  },
  {
    name: "Shiraz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b20931",
  },
  {
    name: "Shocking",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e292c0",
  },
  {
    name: "Shocking Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fc0fc0",
  },
  {
    name: "Shuttle Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5f6672",
  },
  {
    name: "Siam",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#646a54",
  },
  {
    name: "Sidecar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f3e7bb",
  },
  {
    name: "Sienna",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#882d17",
  },
  {
    name: "Silk",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bdb1a8",
  },
  {
    name: "Silver",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c0c0c0",
  },
  {
    name: "Silver Chalice",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#acacac",
  },
  {
    name: "Silver Lake Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5d89ba",
  },
  {
    name: "Silver Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c4aead",
  },
  {
    name: "Silver Sand",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bfc1c2",
  },
  {
    name: "Silver Tree",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#66b58f",
  },
  {
    name: "Sinbad",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9fd7d3",
  },
  {
    name: "Sinopia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cb410b",
  },
  {
    name: "Siren",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7a013a",
  },
  {
    name: "Sirocco",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#718080",
  },
  {
    name: "Sisal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d3cbba",
  },
  {
    name: "Sizzling Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff3855",
  },
  {
    name: "Sizzling Sunrise",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffdb00",
  },
  {
    name: "Skeptic",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cae6da",
  },
  {
    name: "Skobeloff",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#007474",
  },
  {
    name: "Sky Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#87ceeb",
  },
  {
    name: "Sky Magenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cf71af",
  },
  {
    name: "Slate Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6a5acd",
  },
  {
    name: "Slate Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#708090",
  },
  {
    name: "Slimy Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#299617",
  },
  {
    name: "Smalt",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#003399",
  },
  {
    name: "Smalt Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#51808f",
  },
  {
    name: "Smashed Pumpkin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff6d3a",
  },
  {
    name: "Smitten",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c84186",
  },
  {
    name: "Smoke",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#738276",
  },
  {
    name: "Smokey Topaz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#832a0d",
  },
  {
    name: "Smoky",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#605b73",
  },
  {
    name: "Smoky Black",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#100c08",
  },
  {
    name: "Smoky Topaz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#933d41",
  },
  {
    name: "Snow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffafa",
  },
  {
    name: "Snow Drift",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f7faf7",
  },
  {
    name: "Snow Flurry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e4ffd1",
  },
  {
    name: "Snowy Mint",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d6ffdb",
  },
  {
    name: "Snuff",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e2d8ed",
  },
  {
    name: "Soap",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cec8ef",
  },
  {
    name: "Soapstone",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffbf9",
  },
  {
    name: "Soft Amber",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d1c6b4",
  },
  {
    name: "Soft Peach",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5edef",
  },
  {
    name: "Solid Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#893843",
  },
  {
    name: "Solitaire",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fef8e2",
  },
  {
    name: "Solitude",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eaf6ff",
  },
  {
    name: "Sonic Silver",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#757575",
  },
  {
    name: "Sorbus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fd7c07",
  },
  {
    name: "Sorrell Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ceb98f",
  },
  {
    name: "Soya Bean",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6a6051",
  },
  {
    name: "Space Cadet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1d2951",
  },
  {
    name: "Spanish Bistre",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#807532",
  },
  {
    name: "Spanish Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0070b8",
  },
  {
    name: "Spanish Carmine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d10047",
  },
  {
    name: "Spanish Crimson",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e51a4c",
  },
  {
    name: "Spanish Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#989898",
  },
  {
    name: "Spanish Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#009150",
  },
  {
    name: "Spanish Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e86100",
  },
  {
    name: "Spanish Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f7bfbe",
  },
  {
    name: "Spanish Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e60026",
  },
  {
    name: "Spanish Sky Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00aae4",
  },
  {
    name: "Spanish Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4c2882",
  },
  {
    name: "Spanish Viridian",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#007f5c",
  },
  {
    name: "Spartan Crimson",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9e1316",
  },
  {
    name: "Spectra",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2f5a57",
  },
  {
    name: "Spice",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6a442e",
  },
  {
    name: "Spicy Mix",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b5f4d",
  },
  {
    name: "Spicy Mustard",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#74640d",
  },
  {
    name: "Spicy Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#816e71",
  },
  {
    name: "Spindle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b6d1ea",
  },
  {
    name: "Spiro Disco Ball",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0fc0fc",
  },
  {
    name: "Spray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#79deec",
  },
  {
    name: "Spring Bud",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a7fc00",
  },
  {
    name: "Spring Frost",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#87ff2a",
  },
  {
    name: "Spring Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00ff7f",
  },
  {
    name: "Spring Leaves",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#578363",
  },
  {
    name: "Spring Rain",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#accbb1",
  },
  {
    name: "Spring Sun",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f6ffdc",
  },
  {
    name: "Spring Wood",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8f6f1",
  },
  {
    name: "Sprout",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c1d7b0",
  },
  {
    name: "Spun Pearl",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#aaabb7",
  },
  {
    name: "Squirrel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8f8176",
  },
  {
    name: "St Patricks Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#23297a",
  },
  {
    name: "St Tropaz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2d569b",
  },
  {
    name: "Stack",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8a8f8a",
  },
  {
    name: "Star Command Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#007bb8",
  },
  {
    name: "Star Dust",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9f9f9c",
  },
  {
    name: "Stark White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e5d7bd",
  },
  {
    name: "Starship",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ecf245",
  },
  {
    name: "Steel Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4682b4",
  },
  {
    name: "Steel Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#262335",
  },
  {
    name: "Steel Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc33cc",
  },
  {
    name: "Steel Teal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5f8a8b",
  },
  {
    name: "Stiletto",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9c3336",
  },
  {
    name: "Stonewall",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#928573",
  },
  {
    name: "Storm Dust",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#646463",
  },
  {
    name: "Storm Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#717486",
  },
  {
    name: "Stormcloud",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4f666a",
  },
  {
    name: "Stratos",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#000741",
  },
  {
    name: "Straw",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e4d96f",
  },
  {
    name: "Strawberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fc5a8d",
  },
  {
    name: "Strikemaster",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#956387",
  },
  {
    name: "Stromboli",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#325d52",
  },
  {
    name: "Studio",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#714ab2",
  },
  {
    name: "Submarine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bac7c9",
  },
  {
    name: "Sugar Cane",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f9fff6",
  },
  {
    name: "Sugar Plum",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#914e75",
  },
  {
    name: "Sulu",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c1f07c",
  },
  {
    name: "Summer Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#96bbab",
  },
  {
    name: "Sun",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbac13",
  },
  {
    name: "Sunburnt Cyclops",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff404c",
  },
  {
    name: "Sundance",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c9b35b",
  },
  {
    name: "Sundown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffb1b3",
  },
  {
    name: "Sunflower",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e4d422",
  },
  {
    name: "Sunglo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e16865",
  },
  {
    name: "Sunglow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffcc33",
  },
  {
    name: "Sunny",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f2f27a",
  },
  {
    name: "Sunray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e3ab57",
  },
  {
    name: "Sunset",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fad6a5",
  },
  {
    name: "Sunset Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fd5e53",
  },
  {
    name: "Sunshade",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff9e2c",
  },
  {
    name: "Super Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cf6ba9",
  },
  {
    name: "Supernova",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffc901",
  },
  {
    name: "Surf",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bbd7c1",
  },
  {
    name: "Surf Crest",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cfe5d2",
  },
  {
    name: "Surfie Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0c7a79",
  },
  {
    name: "Sushi",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#87ab39",
  },
  {
    name: "Suva Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#888387",
  },
  {
    name: "Swamp",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#001b1c",
  },
  {
    name: "Swamp Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#acb78e",
  },
  {
    name: "Swans Down",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dcf0ea",
  },
  {
    name: "Sweet Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a83731",
  },
  {
    name: "Sweet Corn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fbea8c",
  },
  {
    name: "Sweet Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fd9fa2",
  },
  {
    name: "Swirl",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d3cdc5",
  },
  {
    name: "Swiss Coffee",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ddd6d5",
  },
  {
    name: "Sycamore",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#908d39",
  },
  {
    name: "Tabasco",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a02712",
  },
  {
    name: "Tacao",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#edb381",
  },
  {
    name: "Tacha",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d6c562",
  },
  {
    name: "Tahiti Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e97c07",
  },
  {
    name: "Tahuna Sands",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eef0c8",
  },
  {
    name: "Tall Poppy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b32d29",
  },
  {
    name: "Tallow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a8a589",
  },
  {
    name: "Tamarillo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#991613",
  },
  {
    name: "Tamarind",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#341515",
  },
  {
    name: "Tan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d2b48c",
  },
  {
    name: "Tan Hide",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fa9d5a",
  },
  {
    name: "Tana",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d9dcc1",
  },
  {
    name: "Tangaroa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#03163c",
  },
  {
    name: "Tangelo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f94d00",
  },
  {
    name: "Tangerine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f28500",
  },
  {
    name: "Tangerine Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffcc00",
  },
  {
    name: "Tango",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ed7a1c",
  },
  {
    name: "Tango Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e4717a",
  },
  {
    name: "Tapa",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7b7874",
  },
  {
    name: "Tapestry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b05e81",
  },
  {
    name: "Tara",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e1f6e8",
  },
  {
    name: "Tarawera",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#073a50",
  },
  {
    name: "Tart Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fb4d46",
  },
  {
    name: "Tasman",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cfdccf",
  },
  {
    name: "Taupe",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#483c32",
  },
  {
    name: "Taupe Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8b8589",
  },
  {
    name: "Tawny Port",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#692545",
  },
  {
    name: "Te Papa Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1e433c",
  },
  {
    name: "Tea",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c1bab0",
  },
  {
    name: "Tea Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d0f0c0",
  },
  {
    name: "Tea Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f4c2c2",
  },
  {
    name: "Teak",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b19461",
  },
  {
    name: "Teal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#008080",
  },
  {
    name: "Teal Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#367588",
  },
  {
    name: "Teal Deer",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#99e6b3",
  },
  {
    name: "Teal Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00827f",
  },
  {
    name: "Telemagenta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cf3476",
  },
  {
    name: "Temptress",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3b000b",
  },
  {
    name: "Tenne",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cd5700",
  },
  {
    name: "Tequila",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffe6c7",
  },
  {
    name: "Terra Cotta",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e2725b",
  },
  {
    name: "Texas",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8f99c",
  },
  {
    name: "Texas Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffb555",
  },
  {
    name: "Thatch",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b69d98",
  },
  {
    name: "Thatch Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#403d19",
  },
  {
    name: "Thistle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d8bfd8",
  },
  {
    name: "Thistle Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cccaa8",
  },
  {
    name: "Thulian Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#de6fa1",
  },
  {
    name: "Thunder",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#33292f",
  },
  {
    name: "Thunderbird",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c02b18",
  },
  {
    name: "Tia Maria",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c1440e",
  },
  {
    name: "Tiara",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c3d1d1",
  },
  {
    name: "Tiber",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#063537",
  },
  {
    name: "Tickle Me Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fc89ac",
  },
  {
    name: "Tidal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f1ffad",
  },
  {
    name: "Tide",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bfb8b0",
  },
  {
    name: "Tiffany Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0abab5",
  },
  {
    name: "Tigers Eye",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e08d3c",
  },
  {
    name: "Timber Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#16322c",
  },
  {
    name: "Timberwolf",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dbd7d2",
  },
  {
    name: "Titan White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f0eeff",
  },
  {
    name: "Titanium Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eee600",
  },
  {
    name: "Toast",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9a6e61",
  },
  {
    name: "Tobacco Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#715d47",
  },
  {
    name: "Toledo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3a0020",
  },
  {
    name: "Tolopea",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1b0245",
  },
  {
    name: "Tom Thumb",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3f583b",
  },
  {
    name: "Tomato",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff6347",
  },
  {
    name: "Tonys Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e79f8c",
  },
  {
    name: "Toolbox",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#746cc0",
  },
  {
    name: "Topaz",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffc87c",
  },
  {
    name: "Torea Bay",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0f2d9e",
  },
  {
    name: "Tory Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1450aa",
  },
  {
    name: "Tosca",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8d3f3f",
  },
  {
    name: "Totem Pole",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#991b07",
  },
  {
    name: "Tower Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a9bdbf",
  },
  {
    name: "Tractor Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fd0e35",
  },
  {
    name: "Tradewind",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5fb3ac",
  },
  {
    name: "Tranquil",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e6ffff",
  },
  {
    name: "Travertine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffde8",
  },
  {
    name: "Tree Poppy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fc9c1d",
  },
  {
    name: "Treehouse",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3b2820",
  },
  {
    name: "Trendy Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7c881a",
  },
  {
    name: "Trendy Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8c6495",
  },
  {
    name: "Trinidad",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e64e03",
  },
  {
    name: "Tropical Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c3ddf9",
  },
  {
    name: "Tropical Rain Forest",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00755e",
  },
  {
    name: "Tropical Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cda4de",
  },
  {
    name: "Trout",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4a4e5a",
  },
  {
    name: "True Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0073cf",
  },
  {
    name: "True V",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8a73d6",
  },
  {
    name: "Tuatara",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#363534",
  },
  {
    name: "Tuft Bush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffddcd",
  },
  {
    name: "Tufts Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#417dc1",
  },
  {
    name: "Tulip",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff878d",
  },
  {
    name: "Tulip Tree",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eab33b",
  },
  {
    name: "Tumbleweed",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#deaa88",
  },
  {
    name: "Tuna",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#353542",
  },
  {
    name: "Tundora",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4a4244",
  },
  {
    name: "Turbo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fae600",
  },
  {
    name: "Turkish Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b57281",
  },
  {
    name: "Turmeric",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cabb48",
  },
  {
    name: "Turquoise",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#40e0d0",
  },
  {
    name: "Turquoise Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00ffef",
  },
  {
    name: "Turquoise Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a0d6b4",
  },
  {
    name: "Turtle Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2a380b",
  },
  {
    name: "Tuscan Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7c4848",
  },
  {
    name: "Tuscan Tan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a67b5b",
  },
  {
    name: "Tuscany",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c09999",
  },
  {
    name: "Tusk",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eef3c3",
  },
  {
    name: "Tussock",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c5994b",
  },
  {
    name: "Tutu",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff1f9",
  },
  {
    name: "Twilight",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e4cfde",
  },
  {
    name: "Twilight Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eefdff",
  },
  {
    name: "Twilight Lavender",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8a496b",
  },
  {
    name: "Twine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c2955d",
  },
  {
    name: "Tyrian Purple",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#66023c",
  },
  {
    name: "UA Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0033aa",
  },
  {
    name: "UA Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d9004c",
  },
  {
    name: "UCLA Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#536895",
  },
  {
    name: "UCLA Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffb300",
  },
  {
    name: "UFO Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3cd070",
  },
  {
    name: "UP Forest Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#014421",
  },
  {
    name: "UP Maroon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7b1113",
  },
  {
    name: "USAFA Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#004f98",
  },
  {
    name: "Ube",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#8878c3",
  },
  {
    name: "Ultra Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff6fff",
  },
  {
    name: "Ultramarine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3f00ff",
  },
  {
    name: "Ultramarine Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4166f5",
  },
  {
    name: "Umber",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#635147",
  },
  {
    name: "Unbleached Silk",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffddca",
  },
  {
    name: "Underage Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f9e6f4",
  },
  {
    name: "United Nations Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5b92e5",
  },
  {
    name: "University Of California Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b78727",
  },
  {
    name: "University Of Tennessee Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f77f00",
  },
  {
    name: "Unmellow Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffff66",
  },
  {
    name: "Upsdell Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ae2029",
  },
  {
    name: "Urobilin",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e1ad21",
  },
  {
    name: "Utah Crimson",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d3003f",
  },
  {
    name: "Valencia",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d84437",
  },
  {
    name: "Valentino",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#350e42",
  },
  {
    name: "Valhalla",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2b194f",
  },
  {
    name: "Van Cleef",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#49170c",
  },
  {
    name: "Van Dyke Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#664228",
  },
  {
    name: "Vanilla",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f3e5ab",
  },
  {
    name: "Vanilla Ice",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f38fa9",
  },
  {
    name: "Varden",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff6df",
  },
  {
    name: "Vegas Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c5b358",
  },
  {
    name: "Venetian Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c80815",
  },
  {
    name: "Venice Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#055989",
  },
  {
    name: "Venus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#928590",
  },
  {
    name: "Verdigris",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#43b3ae",
  },
  {
    name: "Verdun Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#495400",
  },
  {
    name: "Vermilion",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d9381e",
  },
  {
    name: "Veronica",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a020f0",
  },
  {
    name: "Very Light Azure",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#74bbfb",
  },
  {
    name: "Very Light Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#6666ff",
  },
  {
    name: "Very Light Malachite Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#64e986",
  },
  {
    name: "Very Light Tangelo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffb077",
  },
  {
    name: "Very Pale Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffdfbf",
  },
  {
    name: "Very Pale Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffffbf",
  },
  {
    name: "Vesuvius",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b14a0b",
  },
  {
    name: "Victoria",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#534491",
  },
  {
    name: "Vida Loca",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#549019",
  },
  {
    name: "Viking",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#64ccdb",
  },
  {
    name: "Vin Rouge",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#983d61",
  },
  {
    name: "Viola",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cb8fa9",
  },
  {
    name: "Violent Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#290c5e",
  },
  {
    name: "Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7f00ff",
  },
  {
    name: "Violet Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#324ab2",
  },
  {
    name: "Violet Eggplant",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#991199",
  },
  {
    name: "Violet Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f75394",
  },
  {
    name: "Viridian",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#40826d",
  },
  {
    name: "Viridian Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#009698",
  },
  {
    name: "Vis Vis",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffefa1",
  },
  {
    name: "Vista Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7c9ed9",
  },
  {
    name: "Vista White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fcf8f7",
  },
  {
    name: "Vivid Amber",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc9900",
  },
  {
    name: "Vivid Auburn",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#922724",
  },
  {
    name: "Vivid Burgundy",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9f1d35",
  },
  {
    name: "Vivid Cerise",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#da1d81",
  },
  {
    name: "Vivid Cerulean",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00aaee",
  },
  {
    name: "Vivid Crimson",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc0033",
  },
  {
    name: "Vivid Gamboge",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff9900",
  },
  {
    name: "Vivid Lime Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a6d608",
  },
  {
    name: "Vivid Malachite",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00cc33",
  },
  {
    name: "Vivid Mulberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b80ce3",
  },
  {
    name: "Vivid Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff5f00",
  },
  {
    name: "Vivid Orange Peel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffa000",
  },
  {
    name: "Vivid Orchid",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cc00ff",
  },
  {
    name: "Vivid Raspberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff006c",
  },
  {
    name: "Vivid Red",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f70d1a",
  },
  {
    name: "Vivid Red Tangelo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#df6124",
  },
  {
    name: "Vivid Sky Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#00ccff",
  },
  {
    name: "Vivid Tangelo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f07427",
  },
  {
    name: "Vivid Tangerine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffa089",
  },
  {
    name: "Vivid Vermilion",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e56024",
  },
  {
    name: "Vivid Violet",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9f00ff",
  },
  {
    name: "Vivid Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffe302",
  },
  {
    name: "Volt",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ceff00",
  },
  {
    name: "Voodoo",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#533455",
  },
  {
    name: "Vulcan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#10121d",
  },
  {
    name: "Wafer",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#decbc6",
  },
  {
    name: "Waikawa Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#5a6e9c",
  },
  {
    name: "Waiouru",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#363c0d",
  },
  {
    name: "Walnut",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#773f1a",
  },
  {
    name: "Warm Black",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#004242",
  },
  {
    name: "Wasabi",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#788a25",
  },
  {
    name: "Water Leaf",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a1e9de",
  },
  {
    name: "Watercourse",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#056f57",
  },
  {
    name: "Waterloo ",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7b7c94",
  },
  {
    name: "Waterspout",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a4f4f9",
  },
  {
    name: "Wattle",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dcd747",
  },
  {
    name: "Watusi",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffddcf",
  },
  {
    name: "Wax Flower",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffc0a8",
  },
  {
    name: "We Peep",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f7dbe6",
  },
  {
    name: "Web Chartreuse",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7fff00",
  },
  {
    name: "Web Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffa500",
  },
  {
    name: "Wedgewood",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4e7f9e",
  },
  {
    name: "Weldon Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7c98ab",
  },
  {
    name: "Well Read",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b43332",
  },
  {
    name: "Wenge",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#645452",
  },
  {
    name: "West Coast",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#625119",
  },
  {
    name: "West Side",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff910f",
  },
  {
    name: "Westar",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dcd9d2",
  },
  {
    name: "Wewak",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f19bab",
  },
  {
    name: "Wheat",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5deb3",
  },
  {
    name: "Wheatfield",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f3edcf",
  },
  {
    name: "Whiskey",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d59a6f",
  },
  {
    name: "Whisper",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f7f5fa",
  },
  {
    name: "White",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffffff",
  },
  {
    name: "White Ice",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ddf9f1",
  },
  {
    name: "White Lilac",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8f7fc",
  },
  {
    name: "White Linen",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f8f0e8",
  },
  {
    name: "White Pointer",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fef8ff",
  },
  {
    name: "White Rock",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#eae8d4",
  },
  {
    name: "White Smoke",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f5f5f5",
  },
  {
    name: "Wild Blue Yonder",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a2add0",
  },
  {
    name: "Wild Orchid",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d470a2",
  },
  {
    name: "Wild Rice",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ece090",
  },
  {
    name: "Wild Sand",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f4f4f4",
  },
  {
    name: "Wild Strawberry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff43a4",
  },
  {
    name: "Wild Watermelon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fc6c85",
  },
  {
    name: "Wild Willow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#b9c46a",
  },
  {
    name: "William",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3a686c",
  },
  {
    name: "Willow Brook",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#dfecda",
  },
  {
    name: "Willow Grove",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#65745d",
  },
  {
    name: "Willpower Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fd5800",
  },
  {
    name: "Windsor",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#3c0878",
  },
  {
    name: "Windsor Tan",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a75502",
  },
  {
    name: "Wine",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#722f37",
  },
  {
    name: "Wine Berry",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#591d35",
  },
  {
    name: "Wine Dregs",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#673147",
  },
  {
    name: "Winter Hazel",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#d5d195",
  },
  {
    name: "Winter Sky",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ff007c",
  },
  {
    name: "Winter Wizard",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a0e6ff",
  },
  {
    name: "Wintergreen Dream",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#56887d",
  },
  {
    name: "Wisp Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fef4f8",
  },
  {
    name: "Wisteria",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#c9a0dc",
  },
  {
    name: "Wistful",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a4a6d3",
  },
  {
    name: "Witch Haze",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fffc99",
  },
  {
    name: "Wood Bark",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#261105",
  },
  {
    name: "Woodland",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#4d5328",
  },
  {
    name: "Woodrush",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#302a0f",
  },
  {
    name: "Woodsmoke",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0c0d0f",
  },
  {
    name: "Woody Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#483131",
  },
  {
    name: "X11 Dark Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#006400",
  },
  {
    name: "X11 Gray",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bebebe",
  },
  {
    name: "Xanadu",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#738678",
  },
  {
    name: "Yale Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0f4d92",
  },
  {
    name: "Yankees Blue",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#1c2841",
  },
  {
    name: "Yellow",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffff00",
  },
  {
    name: "Yellow Green",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#9acd32",
  },
  {
    name: "Yellow Metal",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#716338",
  },
  {
    name: "Yellow Orange",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffae42",
  },
  {
    name: "Yellow Rose",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fff000",
  },
  {
    name: "Yellow Sea",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#fea904",
  },
  {
    name: "Your Pink",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ffc3c0",
  },
  {
    name: "Yukon Gold",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#7b6608",
  },
  {
    name: "Yuma",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#cec291",
  },
  {
    name: "Zaffre",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#0014a8",
  },
  {
    name: "Zambezi",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#685558",
  },
  {
    name: "Zanah",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#daecd6",
  },
  {
    name: "Zest",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e5841b",
  },
  {
    name: "Zeus",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#292319",
  },
  {
    name: "Ziggurat",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#bfdbe2",
  },
  {
    name: "Zinnwaldite",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#ebc2af",
  },
  {
    name: "Zinnwaldite Brown",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#2c1608",
  },
  {
    name: "Zircon",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#f4f8ff",
  },
  {
    name: "Zombie",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#e4d69b",
  },
  {
    name: "Zomp",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#39a78e",
  },
  {
    name: "Zorba",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#a59b91",
  },
  {
    name: "Zuccini",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#044022",
  },
  {
    name: "Zumthor",
    // tslint:disable-next-line: object-literal-sort-keys
    hex: "#edf6ff",
  },
];
export { colors };
