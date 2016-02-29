;(function() {
    angular
        .module('dashboard')
        .factory('dashboardService', dashboardService);

    /*ngInject*/
    function dashboardService($firebaseObject, $firebaseArray, firebaseReference) {
        return {
            getUserInfo: getUserInfo,
            getUsers: getUsers,
            setOnline: setOnline,
            getOnlineUsers: getOnlineUsers
        };

        function getUserInfo(uid) {
            return $firebaseObject(firebaseReference.child('users/' + uid));
        }

        function getUsers() {
            return $firebaseObject(firebaseReference.child('users'));
        }

        function setOnline(uid) {
            var presenceList = firebaseReference.child('presence'),
                userRef = presenceList.push(),
                connectedRef = firebaseReference.root().child('.info/connected');

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