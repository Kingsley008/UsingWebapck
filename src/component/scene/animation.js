export default class Animation{
    constructor(game){
        this.game = game;
        this.actions = {};
        // 字典 需要子类初始化
        // 数据格式：this.actionNames = {
        //     up:'fly',
        //     adown:'fly',
        //     ddown:'fly',
        // };
        this.actionNames = {};

    }

    /**
     * @param option 为数组 存放 对象的格式  每个对象代表一个对应的动画
     *   option =  [{
     *        name:'fly',
     *        length:3,
     *        imageName:'bird',
     *        }]
     * @param initAction 初始动画
     *
     *
     *
    **/
    initAnimation(option, initAction) {
        this.countdown = 5;
        this.index = 0;
        for (let i = 0; i < option.length; i++){
            this.actions[option[i].name] = this.loadAnimation(option[i].length, option[i].imageName);

        }

        this.currentAction = this.actions[initAction];
        // 更新到初始动画的第一帧
        console.log(this.currentAction);
        this.img = this.game.getImgByName(this.currentAction[this.index]);
    }

    loadAnimation(length,imgName){
        var arr = [];
        for (let i = 1; i <= length; i++) {
            arr.push(imgName + i)
        }
        return arr;
    }

    changeActions() {

        if(this.countdown < 0){
            // this.index = this.index % this.currentAction.length;
            if(this.index >= this.currentAction.length -1) {
                this.index = 0;
            }
            this.img = this.game.getImgByName(this.currentAction[this.index]);

            this.countdown = 5;

            this.index++;
        }

    }


    changeCurrentAction(name) {
        this.currentAction = this.actions[name];
    }


}