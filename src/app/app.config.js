;(function() {
    angular
        .module('app')
        .config(config);

    /*ngInject*/
    function config($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }
})();