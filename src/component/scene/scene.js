export default class Scene {
    constructor(game) {
        this.game = game;
        this.elements = [];
    }

    addElements(ele) {
        this.elements.push(ele);
    }

    draw(){
        for( var i of this.elements) {
            if(i.alive === undefined || i.alive) {
                i.draw();
            }

        }
    }

    update(){
        for( var i of this.elements) {
            i.update();
            i.debug && i.debug();
        }
    }
}