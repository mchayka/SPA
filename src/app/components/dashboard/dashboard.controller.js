;(function() {
    angular
        .module('dashboard')
        .controller('DashboardController', DashboardController);

    /*ngInject*/
    function DashboardController($scope, $state, dashboardService, chatsService, authService, AccountInfo) {

        dashboardService.setOnline(AccountInfo.uid);

        $scope.accountInfo = AccountInfo;
        $scope.userInfo = dashboardService.getUserInfo(AccountInfo.uid);
        $scope.chats = chatsService.getChats(AccountInfo.uid);
        $scope.users = dashboardService.getUsers();
        $scope.onlineUsers = dashboardService.getOnlineUsers();
        $scope.checkOnline = checkOnline;

        $scope.talkTo = talkTo;
        $scope.signOut = signOut;

        function talkTo(event, uid) {
            event.preventDefault();
            chatsService.createChat(AccountInfo.uid, uid);
        }

        function signOut() {
            authService.unAuth();
            $state.go('login');
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