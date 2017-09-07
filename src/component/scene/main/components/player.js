import utils from '../../../utils/utils.js';
import conf from '../../../conf/conf.js';
import Animation from '../../animation.js';

export  default class Player extends Animation{
    constructor(game, x, y) {
        super(game);
        this.game = game;
        this.x = x;
        this.y = y;
        this.speed = 5;
        // 设置动画字典
        this.actionNames = {
            up:'fly',
            adown:'fly',
            ddown:'fly',
        };

        this.initAnimation(
            [
            {
            name:'fly',
            length:3,
            imageName:'bird',
            }
            ],'fly'
        );

        this.h = this.img.height;
        this.w = this.img.width;
        this.rotation = 0;
        this.jumpH = 12;
        // 重力和加速度
        this.vg = 25;
        this.vy = 0;
        this.alive = true;
    }

    draw(){
        this.changeActions();
        var ctx = this.game.ctx;
        ctx.save();

        var halfW = this.w / 2;
        var halfH = this.h / 2;
        // 得到图片中心点
        ctx.translate(this.x + halfW, this.y + halfH);
        if(this.flipX) {
            ctx.scale(-1, 1);
        }
        this.rotation += 5;
        this.rotation = Math.min(45, this.rotation);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.translate(-halfW, -halfH);
         // 恢复
        ctx.drawImage(this.img, 0, 0);
        ctx.restore();

    }

    moveRight(keyStatus) {
        this.flipX = false;
        var name = this.actionNames [keyStatus];
        this.changeCurrentAction(name);
        this.x += this.speed;
        this.x = Math.min(400 - this.w, this.x);
    }

    moveLeft(keyStatus) {
        this.flipX = true;
        var name = this.actionNames [keyStatus];
        this.changeCurrentAction(name);
        this.x -= this.speed;
        this.x = Math.max(0, this.x);
    }

    jump(keyStatus){
       this.y -= this.jumpH;
       this.y = Math.max(0, this.y);
       this.rotation -= 15;
       this.rotation = Math.max(-45, this.rotation);
       window.audio.play();
    }


    update() {

        this.y += this.vy;
        this.vy = this.vg * 0.2;
        this.y = Math.min(450, this.y);
        this.countdown--;
    }

    debug(){
        this.speed = conf.conf_player.playerSpeed.value;
        this.jumpH = conf.conf_player.birdjump.value;
        this.vg = conf.conf_player.birdG.value;
    }


    collide(obj) {
        // 判断两个矩形相交
        var self = this;
        if (utils.aInb(obj.x, self.x, self.x + self.w) || utils.aInb(self.x, obj.x, obj.x + obj.w)) {
            if (utils.aInb(obj.y, self.y, self.y + self.h) || utils.aInb(self.y, obj.y, obj.y + obj.h)) {
                return true
            }
        }
        return false;
    };
}