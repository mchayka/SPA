;(function() {
    angular
        .module('dashboard')
        .controller('DashboardController', DashboardController);

    /*ngInject*/
    function DashboardController($scope, $state, authService, AccountInfo) {

        $scope.accountInfo = AccountInfo;

        $scope.signOut = signOut;

        function signOut() {
            authService.unAuth();
            $state.go('login');
        }
    }
})();