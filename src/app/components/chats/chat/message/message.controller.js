;(function() {
    angular
        .module('message')
        .controller('MessageController', MessageController);

    /*ngInject*/
    function MessageController($scope, messageService) {
        if ($scope.message.status == 1 && $scope.message.sender != $scope.accountInfo.uid && $scope.chatVisibility == 2) {
            messageService.updateStatus($scope.chatId, $scope.message);
        }
    }
})();