;(function() {
    angular
        .module('dashboard')
        .factory('dashboardService', dashboardService);

    /*ngInject*/
    function dashboardService($firebaseObject, firebaseReference) {
        return {
            getUserInfo: getUserInfo,
            getUsers: getUsers,
            getChats: getChats,
            createChat: createChat
        };

        function getUserInfo(uid) {
            return $firebaseObject(firebaseReference.child('dots/users/' + uid));
        }

        function getUsers() {
            return $firebaseObject(firebaseReference.child('dots/users'));
        }

        function getChats(uid) {
            return $firebaseObject(firebaseReference.child('dots/users/' + uid + '/chats'));
        }

        function createChat(myUid, uid) {
            var chatId = myUid + '-' + uid;
            firebaseReference.child('dots/chats/' + chatId + '/' + myUid)
                .set(true);

            firebaseReference.child('dots/chats/' + chatId + '/' + uid)
                .set(true);

            firebaseReference.child('dots/users/' + myUid + '/chats/' + chatId)
                .set(true);

            firebaseReference.child('dots/users/' + uid + '/chats/' + chatId)
                .set(true);
        }
    }
})();