import MyImage from '../../image.js';

export default class Floor extends MyImage{
    constructor(name, game, x, y) {
        super(name, game);
        this.x = x;
        this.y = y;
        this.countdown = 5;
    }

    update(){
        this.countdown-- ;
        this.x -= 6;
        if (this.countdown === 0){
            this.countdown = 5;
            this.x += 30;
        }
    }

    draw(){

        super.draw()
    }
}