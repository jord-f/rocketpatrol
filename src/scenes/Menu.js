class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    //BUGS:
    // background music doubles if you go back to menu

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

        this.load.audio('bgm', './assets/rpremix.mp3');

    }

    create(){

        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color:'#843605',
            align:'right',
            padding: {top: 5, bottom: 5},
            fixedWidth: 0
        }
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5); 
        this.add.text(game.config.width/2, game.config.height/2, 'Use ← → to move & (F) to FIRE', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5); 

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.bgm = this.sound.add('bgm', { loop: true });
        this.bgm.stop();
        this.bgm.play();
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