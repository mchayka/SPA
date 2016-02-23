;(function() {
    angular
        .module('dashboard')
        .config(config);

    /*ngInject*/
    function config($stateProvider) {
        $stateProvider.state('dashboard', {
            parent: 'auth-restricted',
            url: '^/',
            views: {
                content: {
                    templateUrl : 'components/dashboard/dashboard.tpl.html',
                    controller: 'DashboardController'
                }
            }
        })
    }
})();