let  conf = conf || {};
conf.conf_player = {
    playerSpeed: {
        des: "玩家速度",
        value: 5,
    },
    spaceBetweenTopBottom: {
        des: '管子上与下的距离',
        value: 110,
    },
    spaceBetweenPipe: {
        des: '管子左右的距离',
        value: 320
    },
    pipesMoveSpeed: {
        des: '管子移动速度',
        value: 5,
    },
    birdG: {
        des: '鸟的重力',
        value: 23
    },
    birdjump: {
        des: '鸟跳起来的高度',
        value: 12,

    },
    gamefps:{
        des:"帧率",
        value:50,
    }
};


conf.fillTemplateControls = function (key, item) {


    var template = '        <div >\n' +
        '            <label class="gua-conf">' + item.des + '\n' +
        '                <span class="gua-speed"></span>\n' +
        '                <input type="number"  max="300" data-value="conf_player.' + key + '" class ="conf" value="' + item.value + '" >\n' +
        '            </label>\n' +
        '        </div>'

    return template;

}

conf.insertTemplateControls = function () {
    var keys = Object.keys(this.conf_player);
    var container = document.querySelector('.container');
    for (var i = 0; i < keys.length; i++) {
        var item = this.conf_player[keys[i]];
        var key = keys[i];
        var html = this.fillTemplateControls(key, item);
        container.insertAdjacentHTML('beforeEnd', html);
    }
}


conf.bindAll = function (sel, eventName, callback) {
    var l = document.querySelectorAll(sel);
    for (var i = 0; i < l.length; i++) {
        var input = l[i];
        input.addEventListener(eventName, function (e) {
            callback(e);
        })
    }
}

export default conf;

