class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    init(){

    }

    preload(){

    }

    create(){
        this.add.text(20, 20, "rocket patrol play");

        //green ui bg
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize*2, 0x00FF00).setOrigin(0,0);

        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0, game.config.height - borderUISize, 0, borderUISize, 0xFFFFFF).setOrigin(0,0); //thisone check
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0);

    }

    update(){

    }

}