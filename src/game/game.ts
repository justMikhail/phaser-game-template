import 'phaser';
console.log(Phaser);
import MainScene from './script/scenes/mainScene';
import PreloadScene from './script/scenes/preloadScene';

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  scene: [PreloadScene, MainScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { y: 400 },
    },
  },
};

window.addEventListener('load', () => {
  console.log('load')
  const game = new Phaser.Game(config);
});
