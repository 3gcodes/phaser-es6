import Load from './states/load';
import Menu from './states/menu';
import Play from './states/play';

class Game extends Phaser.Game {
  constructor() {
		super(800, 600, Phaser.AUTO, 'content', null);
		console.log('adding load');
		this.state.add('load', Load);
		console.log('adding menu');
		this.state.add('menu', Menu);
		console.log('adding play');
		this.state.add('play', Play);
		console.log('starting load...');
		this.state.start('load');
	}
}

export default Game;
