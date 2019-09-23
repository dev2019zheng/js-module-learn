define( function(require, exports, module) {
    'use strict';
    var data = 'module3';
    function fun() {
        console.log(data);
    }
    
    exports.module3 = { fun:fun };
});