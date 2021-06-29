class SmallSpaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this); //add to existing scene
        this.points = pointValue; //store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed; //pixels per frame
    }

    update(){
        // move spaceship left
        this.x -= this.moveSpeed * 2;
        // wrap around from l to r edge
        if(this.x <=0 - this.width * 2){
            this.reset();
        }
        this.setScale(.5);
    }

    //position reset
    reset(){
        this.x = game.config.width *1.5;
    }
}