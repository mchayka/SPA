;(function() {
    angular
        .module('login')
        .config(config);

    /*ngInject*/
    function config($stateProvider) {
        $stateProvider.state('login', {
            parent: 'auth-free',
            url: '^/login',
            views: {
                content: {
                    templateUrl : 'components/account/login/login.tpl.html',
                    controller: 'LoginController'
                }
            }
        })
    }
})();