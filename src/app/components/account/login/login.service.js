;(function() {
    angular
        .module('login')
        .factory('loginService', loginService);

    /*ngInject*/
    function loginService(authService) {
        return {
            login: login
        };

        function login(formData) {
            return authService.auth(formData);
        }
    }
})();