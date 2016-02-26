;(function() {
    angular
        .module('chat')
        .controller('ChatController', ChatController);

    /*ngInject*/
    function ChatController($scope, chatService) {

        $scope.messages = chatService.getMessages($scope.chatId);

        $scope.minimize = minimize;
        $scope.close = close;
        $scope.keyPress = keyPress;

        function minimize(event, value) {
            event.preventDefault();

            if (value == 2) {
                chatService
                    .minimize($scope.accountInfo.uid, $scope.chatId);
            } else {
                chatService
                    .maximize($scope.accountInfo.uid, $scope.chatId);
            }
        }

        function close(event) {
            event.preventDefault();
            event.stopPropagation();

            chatService
                .close($scope.accountInfo.uid, $scope.chatId);
        }

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