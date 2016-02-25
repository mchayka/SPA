;(function() {
    angular
        .module('register')
        .factory('registerService', registerService);

    /*ngInject*/
    function registerService($firebaseAuth, firebaseReference) {
        return {
            register: register
        };

        function register(formData) {
            return $firebaseAuth(firebaseReference).$createUser(formData);
        }
    }
})();