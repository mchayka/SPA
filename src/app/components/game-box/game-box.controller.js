;(function() {
    angular
        .module('game-box')
        .controller('GameBoxController', GameBoxController);

    /*ngInject*/
    function GameBoxController($scope, gameBoxService) {
        $scope.game = gameBoxService.getGame($scope.accountInfo.uid);

        $scope.yourTurn = false;

        $scope.acceptPlay = acceptPlay;
        $scope.rejectPlay = rejectPlay;
        $scope.closeGame = closeGame;
        $scope.playAgain = playAgain;
        $scope.cancel = cancel;

        function acceptPlay() {
            gameBoxService.acceptPlay($scope.game);
        }

        function rejectPlay() {
            gameBoxService.rejectPlay($scope.game, $scope.accountInfo.uid);
        }

        function closeGame() {
            gameBoxService.closeGame($scope.game, $scope.accountInfo.uid);
        }

        function playAgain() {
            gameBoxService.playAgain($scope.game, $scope.accountInfo.uid);
        }

        function cancel() {
            gameBoxService.cancel($scope.game);
        }
    }
})();