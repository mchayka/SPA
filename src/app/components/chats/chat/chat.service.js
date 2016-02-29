;(function() {
    angular
        .module('chat')
        .factory('chatService', chatService);

    /*ngInject*/
    function chatService($q, $firebaseArray, firebaseReference) {
        return {
            getChatName: getChatName,
            getMessages: getMessages,
            sendMessage: sendMessage,
            minimize: minimize,
            maximize: maximize,
            close: close
        };

        function getChatName(chatId, uid) {
            var deferred = $q.defer(),
                chatName = '';
            firebaseReference
                .child('chats/' + chatId)
                .once('value', function(snap) {
                    angular.forEach(snap.val(), function(item, index) {
                        if (index != uid) {
                            chatName = index;
                        }
                    });
                    deferred.resolve(chatName);
                });
            return deferred.promise;
        }

        function getMessages(chatId) {
            return $firebaseArray(firebaseReference.child('messages/' + chatId));
        }

        function sendMessage(chatId, uid, message) {
            firebaseReference.child('messages/' + chatId)
                .push({
                    status: 1,
                    sender: uid,
                    content: message
                });
        }

        function minimize(myUid, chatId) {
            firebaseReference.child('users/' + myUid + '/chats/' + chatId)
                .set(1);
        }

        function maximize(myUid, chatId) {
            firebaseReference.child('users/' + myUid + '/chats/' + chatId)
                .set(2);
        }

        function close(myUid, chatId) {
            firebaseReference.child('users/' + myUid + '/chats/' + chatId)
                .set(0);
        }
    }
})();