;(function() {
    angular
        .module('chat')
        .controller('ChatController', ChatController);

    /*ngInject*/
    function ChatController($scope, chatService) {

        $scope.messages = chatService.getMessages($scope.chatId);
        $scope.keyPress = keyPress;

        function keyPress(event) {
            var message;
            if (event.originalEvent.keyCode == 13) {
                if ($scope.messageField) {
                    message = $scope.messageField;
                    $scope.messageField = '';
                    chatService
                        .sendMessage($scope.chatId, $scope.accountInfo.uid, message);
                }
            }
        }
    }
})();