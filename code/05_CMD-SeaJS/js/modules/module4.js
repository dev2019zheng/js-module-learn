define(function(require, exports, module) {
    'use strict';
    let msg = 'module4';
    // 同步引入
    let module2 = require('./module2');
    module2();
    // 异步引入
    require.async('./module3', function (module3) {
        module3.module3.fun();
    });

    function fun2() {
        // setTimeout(() => {
        console.log(msg);
        // }, 14);
    }

    exports.fun2 = fun2;
});