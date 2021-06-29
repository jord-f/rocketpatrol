class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    init(){

    }

    preload(){
        //load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');

        this.load.audio('hit1', './assets/hit1.mp3');
        this.load.audio('hit2', './assets/hit2.mp3');
        this.load.audio('hit3', './assets/hit3.mp3');
        this.load.audio('hit4', './assets/hit4.mp3');

        this.load.image('title', './assets/titlescreen.png');

    }

    create(){

        this.title = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'title').setOrigin(0,0);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


    }

    update(){

        if (Phaser.Input.Keyboard.JustDown(keyLEFT)){
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');

        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');

        }
    }

}