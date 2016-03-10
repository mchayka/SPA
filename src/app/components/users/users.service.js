;(function() {
    angular
        .module('users')
        .factory('usersService', usersService);

    /*ngInject*/
    function usersService($firebaseObject, firebaseReference) {
        return {
            getUserInfo: getUserInfo,
            getUsers: getUsers,
            setOnline: setOnline
        };

        function getUserInfo(uid) {
            return $firebaseObject(firebaseReference.child('users/' + uid));
        }

        function getUsers() {
            return $firebaseObject(firebaseReference.child('users'));
        }

        function setOnline(uid) {
            var userRef = firebaseReference.child('users/' + uid + '/status'),
                connectedRef = firebaseReference.root().child('.info/connected');

            connectedRef.on('value', function(snap) {
                if (snap.val()) {
                    userRef.set(1);
                    userRef.onDisconnect().set(0);
                }
            });
        }
    }
})();