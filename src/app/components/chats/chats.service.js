;(function() {
    angular
        .module('chats')
        .factory('chatsService', chatsService);

    /*ngInject*/
    function chatsService($firebaseObject, firebaseReference, appService) {
        return {
            getChats: getChats,
            createChat: createChat
        };

        function getChats(uid) {
            return $firebaseObject(firebaseReference.child('dots/users/' + uid + '/chats'));
        }

        function createChat(myUid, uid) {
            var chatId,
                isExist = false;

            firebaseReference.child('dots/chats/').once('value', function(snap) {
                snap.forEach(function(childSnap) {
                    var chat = childSnap.val();
                    if (typeof chat[myUid] !== 'undefined' && typeof chat[uid] !== 'undefined') {
                        isExist = true;
                        chatId = childSnap.key();
                    }
                });
                if (!isExist) {
                    chatId = appService.generateUniqueId();
                }
                firebaseReference.child('dots/chats/' + chatId + '/' + myUid)
                    .set(2);

                firebaseReference.child('dots/chats/' + chatId + '/' + uid)
                    .set(2);

                firebaseReference.child('dots/users/' + myUid + '/chats/' + chatId)
                    .set(2);

                firebaseReference.child('dots/users/' + uid + '/chats/' + chatId)
                    .set(2);
            } );
        }
    }
})();