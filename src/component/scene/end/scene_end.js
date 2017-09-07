import Scene from '../scene.js';
import Label from '../main/components/label.js';
import MyImage from '../../scene/image.js';

export default class ScenceEnd extends Scene {
    constructor(game) {
        super(game);
        this.game = game;
        this.label1 = new Label(game,'游戏结束您的得分是：'+ this.game.score, 100, 300);
        this.label2 = new Label(game,'按K 重新开始游戏', 100, 350);
        this.ready = new MyImage('ready',this.game, 80, 100);

        this.addElements(this.label1);
        this.addElements(this.label2);
        this.addElements(this.ready);

    }

}