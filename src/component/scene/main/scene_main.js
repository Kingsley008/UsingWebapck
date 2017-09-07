import Scene from '../scene.js';
import Player from './components/player.js';
import Pipe from './components/pipe.js';
import Score from './components/score.js';
import SceneEnd from '../end/scene_end.js';
import MyImage from '../image.js';
import Floor from './components/floor.js';


export  default class SceneMain extends Scene {
    constructor(game){
        super(game);
        this.game = game;
        this.setup();
        this.setupinputs();
        this.countdown = 3;
    }
    setup(){
        this.player = new Player(this.game, 100, 100 );
        this.bg = new MyImage('bg', this.game, 0, 0);
        this.pipes = new Pipe(this.game);
        this.score = new Score(this.game,'得分：',10,10);

        this.addElements(this.bg);
        this.addElements(this.player);
        this.addElements(this.pipes);
        this.addElements(this.score);
        this.setFloor();
    }

    testCollide() {
        for( var p of this.pipes.pipes) {
            if (this.player.collide(p)) {
                this.player.alive = false;
                this.game.replaceScene(new SceneEnd(this.game));
            }
        }
    }

    update(){
        this.testCollide();
        super.update();
    }

    setFloor(){
        this.floors = [];
        if(this.countdown === 0){

        }
        for (var i = 0; i < 30; i++){
            var floor = new Floor('floor', this.game, i * 35, 490);
            this.addElements(floor);
            this.floors.push(floor);
        }
    }

    setupinputs(){
        var self = this;
        this.game.registerEvent('a', function (keyStatus) {
            self.player.moveLeft(keyStatus);
        });

        this.game.registerEvent('d', function (keyStatus) {
            self.player.moveRight(keyStatus);
        });

        this.game.registerEvent('j', function (keyStatus) {
            self.player.jump(keyStatus)
        })
    }

}