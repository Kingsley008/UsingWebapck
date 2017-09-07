let uitls = uitls || {};
uitls.getRandomBetween = function  getRandomBetween(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

uitls.log = console.log.bind(console);


// 判断相撞
uitls.aInb = function (x, x1, x2) {
    return x >= x1 && x <= x2;
};

export  default  uitls;