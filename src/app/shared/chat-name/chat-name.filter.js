;(function() {
    angular
        .module('chat-name')
        .filter('chatName', chatName);

    /*ngInject*/
    function chatName(firebaseReference, $filter) {
        return function(chatUid, uid) {
                var name = '',
                    chatUsers;
                firebaseReference
                    .child('dots/chats/' + chatUid)
                    .once('value', function(snap) {
                        chatUsers = snap.val();
                        angular.forEach(chatUsers, function(item, index) {
                            if (index != uid) {
                                name = $filter('userName')(index);
                            }
                        });
                    });
                return name;
        }
    }
})();