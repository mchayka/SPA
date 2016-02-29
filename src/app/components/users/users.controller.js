;(function() {
    angular
        .module('users')
        .controller('UsersController', UsersController);

    /*ngInject*/
    function UsersController($scope, usersService) {
        usersService.setOnline($scope.accountInfo.uid);

        $scope.users = usersService.getUsers();

        $scope.userInfo = usersService.getUserInfo($scope.accountInfo.uid);
        $scope.users = usersService.getUsers();
    }
})();