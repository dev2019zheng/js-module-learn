// 定一个有依赖的模块

(function(window, dataService) {
  var msg = "alerter.js";
  function showMsg() {
    console.log(msg, dataService.getName());
  }
  window.alerter = { showMsg: showMsg };
})(window, dataService);
