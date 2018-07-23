const alfy = require("alfy");
const cowsay = require("cowsay");

const cowFiles = [
  "default",
  "small",
  "goat",
  "dragon",
  "squirrel",
  "meow",
  "elephant",
  "koala",
  "cower",
  "stegosaurus",
  "turtle",
  "tux",
  "vader",
  "whale",
  "satanic",
  "doge",
  "hellokitty",
  "telebears",
  "mech-and-cow",
  "moofasa",
  "stimpy",
  "mutilated",
  "elephant-in-snake",
  "flaming-sheep",
  "ghostbusters",
  "daemon",
  "bunny",
  "bud-frogs",
  "cheese",
  "vader-koala",
  "eyes",
  "beavis.zen",
  "www"
];
const results = cowFiles.map(cowFile => ({
  title: cowFile,
  subtitle: `Say "${alfy.input}" with ${
    cowFile === "default" ? "cow" : cowFile
  }`,
  arg: cowsay.say({
    text: alfy.input,
    f: cowFile
  })
}));

alfy.cache.set(alfy.input, results, { maxAge: 5000 });

const cached = alfy.cache.get(alfy.input);

alfy.output(cached);
