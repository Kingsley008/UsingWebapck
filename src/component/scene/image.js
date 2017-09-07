export default class MyImage {
    constructor(name, game, x, y) {
        this.img = game.getImgByName(name);
        this.game = game;
        this.w = this.img.width;
        this.h = this.img.height;
        this.x = x;
        this.y = y;
    }

    draw(){
        this.game.drawImage(this);
    }

    update(){

    }
}