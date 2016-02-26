;(function() {
    angular
        .module('login')
        .config(config);

    /*ngInject*/
    function config($stateProvider) {
        $stateProvider.state('register', {
            parent: 'auth-free',
            url: '^/register',
            views: {
                content: {
                    templateUrl : 'components/account/register/register.tpl.html',
                    controller: 'RegisterController'
                }
            }
        })
    }
})();