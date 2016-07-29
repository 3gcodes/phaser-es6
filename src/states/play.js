import Dude from '../sprites/dude';

class Play extends Phaser.State {

  constructor() {
		super();
		this.platforms = null;
		this.player = null;
		this.cursors = null;
		this.stars = null;
		this.score = 0;
		this.scoreText = null;
    this.player = null;
	}

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.add.sprite(0, 0, 'sky');

		this.platforms = this.game.add.group();
		this.platforms.enableBody = true;
		var ground = this.platforms.create(0, this.game.world.height - 64, 'ground');
		ground.scale.setTo(2, 2);
		ground.body.immovable = true;

		var ledge = this.platforms.create(400, 400, 'ground');
		ledge.body.immovable = true;
		ledge = this.platforms.create(-150, 250, 'ground');
		ledge.body.immovable = true;

    this.player = new Dude(this.game, 32, this.game.world.height - 150);
    this.player = this.game.add.existing(this.player);

		this.stars = this.game.add.group();
		this.stars.enableBody = true;

		for (var i =0; i < 12; i++) {
			var star = this.stars.create(i * 70, 0, 'star');
			star.body.gravity.y = 6;
			star.body.bounce.y = 0.7 + Math.random() * 0.2;
		}

		this.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000'});

		this.cursors = this.game.input.keyboard.createCursorKeys();

  }

  update() {

    this.game.physics.arcade.collide(this.stars, this.platforms);
		this.game.physics.arcade.collide(this.player, this.platforms);
		this.game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this);
		this.player.body.velocity.x = 0;

		this.player.move(this.cursors);

  }

  collectStar(player, star) {
		star.kill();
		this.score += 10;
		this.scoreText.text = 'Score: ' + this.score;
	}
}

export default Play;
