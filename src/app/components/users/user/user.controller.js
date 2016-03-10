;(function() {
    angular
        .module('user')
        .controller('UserController', UserController);

    /*ngInject*/
    function UserController($scope, chatsService, gameBoxService) {
        $scope.talkTo = talkTo;
        $scope.play = play;

        function talkTo(event, uid) {
            event.preventDefault();

            chatsService.createChat($scope.accountInfo.uid, uid);
        }

        function play(event, opponentUid) {
            event.preventDefault();

            gameBoxService.createGameRequest($scope.accountInfo.uid, opponentUid);
        }
    }
})();