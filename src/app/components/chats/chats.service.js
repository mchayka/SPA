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
            return $firebaseObject(firebaseReference.child('users/' + uid + '/chats'));
        }

        function createChat(myUid, uid) {
            var chatId,
                isExist = false;

            firebaseReference.child('chats/').once('value', function(snap) {
                snap.forEach(function(childSnap) {
                    var chat = childSnap.val();
                    if (typeof chat[myUid] !== 'undefined' && typeof chat[uid] !== 'undefined') {
                        isExist = true;
                        chatId = childSnap.key();
                    }
                });
                if (!isExist) {
                    chatId = appService.generateUniqueId();

                    firebaseReference.child('chats/' + chatId + '/' + myUid)
                        .set(2);

                    firebaseReference.child('chats/' + chatId + '/' + uid)
                        .set(2);

                    firebaseReference.child('users/' + myUid + '/chats/' + chatId)
                        .set({
                            receiver: uid,
                            status: 2,
                            unread: 0
                        });

                    firebaseReference.child('users/' + uid + '/chats/' + chatId)
                        .set({
                            receiver: myUid,
                            status: 0,
                            unread: 0
                        });
                } else {
                    firebaseReference.child('users/' + myUid + '/chats/' + chatId + '/status')
                        .set(2);
                }
            } );
        }
    }
})();