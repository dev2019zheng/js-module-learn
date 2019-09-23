// 定义没有依赖的模块
define(function(require, exports, module) {
    'use strict';
    var msg = 'module1';
    function foo() {
        return msg;
    }
    // 暴露模块
    module.exports = { foo: foo };
});