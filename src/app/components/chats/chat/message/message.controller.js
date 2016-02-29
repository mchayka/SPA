;(function() {
    angular
        .module('message')
        .controller('MessageController', MessageController);

    /*ngInject*/
    function MessageController($scope, messageService) {
        var watching = false;
        if ($scope.message.status == 1 && $scope.message.sender != $scope.accountInfo.uid && $scope.chat.status != 2) {
            watching = $scope.$watch('chat.status', function() {
                if ($scope.message.status == 1 && $scope.message.sender != $scope.accountInfo.uid && $scope.chat.status == 2) {
                    messageService.updateStatus($scope.accountInfo.uid, $scope.chatId, $scope.message);
                    watching();
                }
            });
        } else if($scope.message.status == 1 && $scope.message.sender != $scope.accountInfo.uid && $scope.chat.status == 2) {
            messageService.updateStatus($scope.accountInfo.uid, $scope.chatId, $scope.message);
        }
    }
})();