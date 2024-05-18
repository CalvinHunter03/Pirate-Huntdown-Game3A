class LevelOne extends Phaser.js {
    constructor(){
        super("levelOne");

    }

    preload(){
        this.load.setPath("./assets/");
        this.load.image("1bit_tile", "1bit_tilemap.png");
        this.load.image("pirate_tile", "Pirate_tiledmap.png");
        this.load.image("trans_1bit_tile", "transparent_1bit_tilemap.png");
        this.load.tilemapTiledJSON("level_1", "LevelOneMap.json");
    }

    create(){
        this.map = this.add.tilemap("platformer-level-1", 16, 16, 45, 25);

        this.tileset = this.map.addTilesetImage("")


    }

    update(){
        
    }

}