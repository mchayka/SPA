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

        function unAuth() {
            $firebaseAuth(firebaseReference).$unauth();
        }

        function isAuthorized() {
            return $firebaseAuth(firebaseReference).$getAuth();
        }
    }
})();