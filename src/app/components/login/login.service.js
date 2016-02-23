;(function() {
    angular
        .module('login')
        .factory('loginService', loginService);

    /*ngInject*/
    function loginService($q, authService) {
        return {
            login: login
        };

        function login(name) {
            var deferred = $q.defer();

            if (name == 'Vasya') {
                authService.auth(name);
                deferred.resolve(name);
            } else {
                deferred.reject();
            }
            return deferred.promise;
        }
    }
})();