;(function() {
    angular
        .module('app')
        .controller('AppController', AppController);

    /*ngInject*/
    function AppController($rootScope, authService) {

        $rootScope.logout = logout;

        function logout() {
            authService.unAuth();
        }
    }
})();