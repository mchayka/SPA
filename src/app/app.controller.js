;(function() {
    angular
        .module('app')
        .controller('AppController', AppController);

    /*ngInject*/
    function AppController($rootScope, appService) {

        $rootScope.users = appService.getUsers();
        $rootScope.chats = appService.getChats();

    }
})();