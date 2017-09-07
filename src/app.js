import Game from './component/game/game.js';
import conf from './component/conf/conf.js';
import './css/test.scss';
import SceneStart from './component/scene/start/scene_start.js';

var audio = document.getElementById('audio');

var imgs = {
    bird1 : 'img/bird/1.png',
    bird2 : 'img/bird/2.png',
    bird3 : 'img/bird/3.png',
    bg:'img/background.png',
    floor:'img/floor.png',
    pipeT:'img/pipe/top.png',
    pipeB:'img/pipe/bottom.png',
    logo:'img/logo.png',
    ready:'img/getready.png'
};



var bindEvent = function () {
    conf.bindAll('.conf', 'change', function (e) {

        var target = e.target;
        // 得到 conf 对象的string
        var bindConf = target.dataset.value;
        var v = target.value;
        eval('_conf2.default.'+ bindConf+'.value' + '=' + v);
        //找到最近的label节点
        var label = target.closest('label').querySelector('.gua-speed');
        label.innerText = v;

    });
}


var _main = function () {
    conf.insertTemplateControls();
    bindEvent();
    var game = new Game(imgs, function (g) {
        var s = new SceneStart(g);
        g.scene = s;
    })

}


_main();