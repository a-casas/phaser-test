import { Game } from "./game.js";

const config = {
  type: Phaser.AUTO, //uses canvas or WebGL
  width: 800,
  height: 500,
  scene: [Game],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 400 },
      debug: false,
    },
  },
};

let game = new Phaser.Game(config);
