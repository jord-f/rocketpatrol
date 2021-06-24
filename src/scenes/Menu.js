class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    init(){

    }

    preload(){

    }

    create(){
        this.add.text(20, 20, "rocket patrol menu");
        
        ////CHECK THIS VALUE HERE
        this.scene.start(Play);


    }

    update(){

    }

}