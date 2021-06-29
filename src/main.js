//console.log("Rocket Patrolololol REMIX");
let config = {
    type:Phaser.CANVAS,
    width: 640, 
    height: 480,
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;


//reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

//bugs
//audio restarts when going back to menu


// point tally
// add own music                                                                5
// 4 new explosion sfx with random -                                            10
// Randomize each spaceship's movement direction at the start of each play      5