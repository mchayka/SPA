;(function() {
    angular
        .module('app')
        .controller('AppController', AppController);

    /*ngInject*/
    function AppController($rootScope, authService, appService) {

        $rootScope.users = appService.getUsers();
        $rootScope.chats = appService.getChats();
        $rootScope.logout = logout;

        function logout() {
            authService.unAuth();
        }
    }
})();