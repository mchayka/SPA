;(function() {
    angular
        .module('chat')
        .factory('chatService', chatService);

    /*ngInject*/
    function chatService($firebaseArray, firebaseReference) {
        return {
            getMessages: getMessages,
            sendMessage: sendMessage
        };

        function getMessages(chatId) {
            return $firebaseArray(firebaseReference.child('dots/messages/' + chatId));
        }

        function sendMessage(chatId, uid, message) {
            firebaseReference.child('dots/messages/' + chatId)
                .push({
                    sender: uid,
                    message: message
                });
        }
    }
})();