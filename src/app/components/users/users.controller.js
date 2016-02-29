;(function() {
    angular
        .module('users')
        .controller('UsersController', UsersController);

    /*ngInject*/
    function UsersController($scope, usersService, chatsService) {
        usersService.setOnline($scope.accountInfo.uid);

        $scope.users = usersService.getUsers();

        $scope.userInfo = usersService.getUserInfo($scope.accountInfo.uid);
        $scope.users = usersService.getUsers();

        $scope.talkTo = talkTo;

        function talkTo(event, uid) {
            event.preventDefault();
            chatsService.createChat($scope.accountInfo.uid, uid);
        }
    }
})();