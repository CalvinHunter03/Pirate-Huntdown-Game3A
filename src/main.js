// Calvin Hunter
// Created: 4/14/2024
// Phaser: 3.70.0
//
// Pirate Huntdown


// game config
let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    width: 1664,         // 10 tiles, each 16 pixels, scaled 4x
    height: 720,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 30 },
            debug: false
        }
    },
    scene: [LevelOne]
    
}

const game = new Phaser.Game(config);
