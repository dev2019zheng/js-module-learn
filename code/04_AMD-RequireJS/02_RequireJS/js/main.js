(function () {
    requirejs.config({
        baseUrl: 'js/', // 设置基本的路径, paths里的路径相对这个路径
        paths: { // 配置路径
            dataService: './modules/dataService',
            alerter: './modules/alerter',
            jquery: './libs/jquery-1.8.2',
            angular: './libs/angular'
        },
        shim: {
            angular: {
                exports: 'angular'  // angular 不支持amd,需要配置
            }
        }
    });
    requirejs(['alerter', 'angular'], function(alerter, angular) {
        alerter.showMsg();
        console.log(angular);
    });
})();