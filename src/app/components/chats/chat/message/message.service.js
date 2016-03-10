;(function() {
    angular
        .module('message')
        .factory('messageService', messageService);

    /*ngInject*/
    function messageService(firebaseReference) {
        return {
            updateStatus: updateStatus
        };

        function updateStatus(uid, chatId, message) {
            firebaseReference.child('messages/' + chatId + '/' + message.$id + '/status').set(0);

            firebaseReference.child('users/' + uid + '/chats/' + chatId + '/unread').set(0);
        }
    }

})();