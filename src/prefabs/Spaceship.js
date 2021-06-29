class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.movingRight = Phaser.Math.RND.pick([0, 1]);
    }

    update(){
        // move spaceship left
        if (this.movingRight == 1){
            this.x -= this.moveSpeed;
            // wrap around from l to r edge
            if(this.x <=0 - this.width){
                this.reset();
            }
        } else {
            this.x += this.moveSpeed;
            this.flipX = true;
            
            if(this.x >= 640){
                this.resetOther();
            }
        }
    }

    reset(){
        this.x = game.config.width;
    }

    resetOther(){
        this.x = 0 - this.width;
    }
}