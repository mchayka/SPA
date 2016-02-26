;(function() {
    angular
        .module('user-name')
        .filter('userName', userName);

    /*ngInject*/
    function userName(firebaseReference) {
        return function(uid) {
                var name = '';
                firebaseReference.child('dots/users/' + uid + '/name').once('value', function(snap) {
                    name = snap.val();
                });
                return name;
            }
    }
})();