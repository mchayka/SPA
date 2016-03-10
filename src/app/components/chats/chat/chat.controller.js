;(function() {
    angular
        .module('chat')
        .controller('ChatController', ChatController);

    /*ngInject*/
    function ChatController($scope, chatService) {

        chatService.getChatName($scope.chatId, $scope.accountInfo.uid)
            .then(function(response) {
                $scope.chatName = response;
            });

        console.log($scope.chat);

        $scope.messages = chatService.getMessages($scope.chatId);
        $scope.unreadMessages = 0;

        $scope.minimize = minimize;
        $scope.close = close;
        $scope.keyPress = keyPress;

        $scope.$watch('messages', function() {
            console.log($scope.chat.status);
        });

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
                        .sendMessage($scope.chat, $scope.chatId, $scope.accountInfo.uid, message);
                }
            }
        }
    }
})();