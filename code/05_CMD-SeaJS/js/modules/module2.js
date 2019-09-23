// 定义
define(function(require, exports, module) {
    'use strict';
    var msg = 'module2';
    function bar() {
        console.log(msg);
    }

    module.exports = bar;
});