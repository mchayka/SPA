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
            var chatId = appService.generateUniqueId();
            firebaseReference.child('dots/chats/' + chatId + '/' + myUid)
                .set(2);

            firebaseReference.child('dots/chats/' + chatId + '/' + uid)
                .set(2);

            firebaseReference.child('dots/users/' + myUid + '/chats/' + chatId)
                .set(2);

            firebaseReference.child('dots/users/' + uid + '/chats/' + chatId)
                .set(2);
        }
    }
})();