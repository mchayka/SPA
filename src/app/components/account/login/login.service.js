;(function() {
    angular
        .module('login')
        .factory('loginService', loginService);

    /*ngInject*/
    function loginService($firebaseAuth, firebaseReference) {
        return {
            login: login
        };

        function login(formData) {
            return $firebaseAuth(firebaseReference).$authWithPassword(formData);
        }
    }
})();