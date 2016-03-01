;(function() {
    angular
        .module('auth')
        .factory('authService', authService);

    /*ngInject*/
    function authService($firebaseAuth, firebaseReference) {
        return {
            auth: auth,
            unAuth: unAuth,
            isAuthorized: isAuthorized
        };

        function auth(formData) {
            return $firebaseAuth(firebaseReference).$authWithPassword(formData);
        }

        function unAuth(uid) {
            firebaseReference.child('users/' + uid + '/status').set(0);
            $firebaseAuth(firebaseReference).$unauth();
        }

        function isAuthorized() {
            return $firebaseAuth(firebaseReference).$getAuth();
        }
    }
})();