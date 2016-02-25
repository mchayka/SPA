;(function() {
    angular
        .module('dashboard')
        .controller('DashboardController', DashboardController);

    /*ngInject*/
    function DashboardController($scope, $state, $firebaseAuth, userInfo, firebaseReference) {
        console.log(userInfo);

        $scope.signOut = signOut;

        function signOut() {
            $firebaseAuth(firebaseReference).$unauth();
            $state.go('login');
        }
    }
})();