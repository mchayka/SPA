;(function() {
    angular
        .module('account')
        .factory('accountService', accountService);

    /*ngInject*/
    function accountService($firebaseAuth, firebaseReference) {
        return {
            signOut: signOut
        };

        function signOut() {
            $firebaseAuth(firebaseReference).$unauth();
        }
    }
})();