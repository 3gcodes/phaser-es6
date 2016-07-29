class Dude extends Phaser.Sprite {

  constructor(game, x, y) {
    super(game, x, y, 'dude');

    this.game.physics.arcade.enable(this);

    this.body.bounce.y = 0.2;
		this.body.gravity.y = 300;
		this.body.collideWorldBounds = true;

    this.animations.add('left', [0, 1, 2, 3], 10, true);
		this.animations.add('right', [5, 6, 7, 8], 10, true);
  }

  move(cursors) {

    if (cursors.left.isDown) {
			this.body.velocity.x = -150;
			this.animations.play('left');
		} else if (cursors.right.isDown) {
			this.body.velocity.x = 150;
			this.animations.play('right');
		} else {
			this.animations.stop();
			this.frame = 4;
		}

		if (cursors.up.isDown && this.body.touching.down) {
			this.body.velocity.y = -350;
		}

  }
}

export default Dude;
