;(function() {
    angular
        .module('dashboard')
        .factory('dashboardService', dashboardService);

    /*ngInject*/
    function dashboardService($firebaseObject, $firebaseArray, firebaseReference) {
        return {
            getUserInfo: getUserInfo,
            getUsers: getUsers,
            getChats: getChats,
            createChat: createChat,
            setOnline: setOnline,
            getOnlineUsers: getOnlineUsers
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

        function setOnline(uid) {
            var presenceList = firebaseReference.child('presence'),
                userRef = presenceList.push(),
                connectedRef = firebaseReference.child('.info/connected');

            connectedRef.on('value', function(snap) {
                if (snap.val()) {
                    userRef.set({
                        uid: uid
                    });
                    userRef.onDisconnect().remove();
                }
            });
        }

        function getOnlineUsers() {
            return $firebaseArray(firebaseReference.child('presence'));
        }
    }
})();