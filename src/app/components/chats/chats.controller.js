;(function() {
    angular
        .module('chats')
        .controller('ChatsController', ChatsController);

    /*ngInject*/
    function ChatsController($scope, chatsService) {
        $scope.chats = chatsService.getChats($scope.accountInfo.uid);
    }
})();