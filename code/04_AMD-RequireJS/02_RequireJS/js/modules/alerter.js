// 定义有依赖的模块
define([
    'dataService',
    'jquery'
], function(dataService, $) {
    'use strict';
    var msg = 'alerter.js';
    function showMsg() {
        console.log(msg, dataService.getName());
    }
    $('body').css('background', 'pink');
    // 暴露模块
    return { showMsg: showMsg };
});
