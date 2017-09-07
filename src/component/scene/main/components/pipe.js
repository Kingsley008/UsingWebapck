import conf from '../../../conf/conf.js';
import utils from '../../../utils/utils.js';
import MyImage from '../../image.js';
export  default class Pipe {
    constructor(game) {
        this.game = game;
        this.pipes = [];
        this.speed = 5;
        this.spaceBetweenPipe = 300;
        this.spaceBetweenTopBottom = 100;
        this.columsOfPipe = 3;
        this.setup();
    }

    setup() {
        for (var i = 0; i < this.columsOfPipe; i++) {
            var pipeT = new MyImage('pipeT', this.game, 0, 0);
            var pipeB = new MyImage('pipeB', this.game, 0 ,0);
            this.resetOfPipeY(pipeT, pipeB);
            pipeT.x = 500 + i * this.spaceBetweenPipe;
            pipeB.x = pipeT.x;
            this.pipes.push(pipeT);
            this.pipes.push(pipeB);
        }
    }

    resetOfPipeY (p1, p2){
        p1.y = utils.getRandomBetween(-400, -100);
        p2.y = p1.h + p1.y + this.spaceBetweenTopBottom;
    }

    draw() {
        for (var i of this.pipes) {
            this.game.drawImage(i);
        }
    }

    update() {
        for (var i = 0; i < this.pipes.length; i += 2) {
            var pT = this.pipes[i];
            var pB = this.pipes[i + 1];
            pT.x  -= this.speed;
            pB.x  -= this.speed;
            if (pT.x < -100) {
                pT.x += this.spaceBetweenPipe * this.columsOfPipe;
                this.game.score ++;
                this.resetOfPipeY(pT, pB);
            }
            if (pB.x < -100) {
                pB.x += this.spaceBetweenPipe * this.columsOfPipe;
            }
        }
    }

    debug() {
        this.spaceBetweenTopBottom = conf.conf_player.spaceBetweenTopBottom.value;
        this.spaceBetweenPipe = 300;
        this.speed = conf.conf_player.pipesMoveSpeed.value;

    }



}