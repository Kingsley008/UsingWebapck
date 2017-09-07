import conf from '../conf/conf.js';
export default class Game {
    constructor(images, callback) {
        this.images = images;
        this.callback = callback;
        this.score = 0;
        this.init();
        this.setupInputs();
        this.loadImg();

    }

    init() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.keys = {};
        this.activities = {};
        this.scene = null;
    }

    setupInputs() {
        var self = this;
        window.addEventListener('keydown', function (e) {
            self.keys[e.key] = 'down';
        });
        window.addEventListener('keyup', function (e) {
            self.keys[e.key] = 'up';
        });
    }

    update() {
        this.scene.update();
    }

    draw() {
        this.scene.draw();
    }

    drawImage(o) {
        this.ctx.drawImage(o.img, o.x, o.y);
    }

    registerEvent(event, callback) {
        this.activities[event] = callback;
    }

    replaceScene(s) {
        this.scene  = s;
    }

    loop() {
        var self = this;
        setTimeout(function () {
            // 事件的发射

            for (var i in self.activities) {
                var status = self.keys[i];
                if (status === 'down') {
                    // 键被按下 传给 player
                    self.activities[i]( i + 'down');
                } else if (status ===  'up') {
                    self.activities[i]('up');
                    // 删除这个key的状态
                    self.keys[i] = null;
                }
            }
            self.update();
            self.ctx.clearRect(0, 0, 400, 605);
            self.draw();
            self.loop();
        }, 1000 / conf.conf_player.gamefps.value)
    }

    // 图片载入
    loadImg() {
        var self = this;
        var imgs = self.images;
        var count = 0;
        var arr = {};
        var names = Object.keys(imgs);
        for (var i of names) {

            var img = new Image();
            img.src = imgs[i];
            img.onload = (function (i, img) {

                return function () {
                    arr[i] = img;
                    count++;
                    if (count >= names.length) {
                        self.images = arr;
                        self._start();
                    }
                }
            })(i, img)
        }


    }

    // 得到图片
    getImgByName(name) {
        return this.images[name];

    }

    _start() {
        var self = this;

        self.callback(self);
        self.loop()

    }


}