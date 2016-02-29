;(function() {
    angular
        .module('user')
        .controller('UserController', UserController);

    /*ngInject*/
    function UserController($scope, chatsService) {
        $scope.talkTo = talkTo;

        function talkTo(event, uid) {
            event.preventDefault();

            chatsService.createChat($scope.accountInfo.uid, uid);
        }
    }
})();