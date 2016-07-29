import Menu from './menu';

class Load extends Phaser.State {

  preload() {
    console.log('preloading load...');
    this.game.load.image('sky', 'assets/sky.png');
		this.game.load.image('ground', 'assets/platform.png');
		this.game.load.image('star', 'assets/star.png');
		this.game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
  }

  create() {
    this.state.start('menu');
  }
}

export default Load;
