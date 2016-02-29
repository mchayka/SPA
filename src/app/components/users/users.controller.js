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
        $scope.onlineUsers = usersService.getOnlineUsers();

        $scope.talkTo = talkTo;
        $scope.checkOnline = checkOnline;

        function talkTo(event, uid) {
            event.preventDefault();
            chatsService.createChat($scope.accountInfo.uid, uid);
        }

        function checkOnline(uid) {
            var isOffline = true;
            angular.forEach($scope.onlineUsers, function(onlineUser) {
                if (onlineUser.uid == uid) {
                    isOffline = false;
                }
            });
            return isOffline;
        }
    }
})();