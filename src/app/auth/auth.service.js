;(function() {
    angular
        .module('auth')
        .factory('authService', authService);

    /*ngInject*/
    function authService($q) {
        var authKey = false;

        return {
            auth: auth,
            unAuth: unAuth,
            isAuth: isAuth
        };

        function auth(key) {
            authKey = key;
        }

        function unAuth() {
            authKey = false;
        }

        function isAuth() {
            return authKey !== false ? $q.resolve() : $q.reject();
        }
    }
})();