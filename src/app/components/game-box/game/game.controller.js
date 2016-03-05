;(function() {
    angular
        .module('game')
        .controller('GameController', GameController);

    /*ngInject*/
    function GameController($scope, gameService) {
        var gameInstance = false,
            turnResult;

        $scope.turns = gameService.getTurns($scope.game);

        $scope.$watch('turns', function(newValue) {
            if (gameInstance) {
                angular.forEach(newValue, function(item) {
                    turnResult = gameInstance.push(item);
                    //if (angular.isString(turnResult)) {
                    //    if (turnResult == 'draw') {
                    //        gameService.finishWithDraw($scope.game);
                    //    } else {
                    //        gameService.finishWithWin($scope.game, turnResult);
                    //    }
                    //}

                })
            }
        }, true);

        $scope.$watch('game.status', function() {
            if ($scope.game.status == 1) {
                startPlay();
            } else if ($scope.game.status == 2) {
                showPlay();
            } else if ($scope.game.status == 3) {
                destroyGame();
            }
        });

        function startPlay() {
            gameInstance = new TicTacToe(
                $scope.game.creator,
                $scope.game.opponent,
                $scope.game.creator == $scope.accountInfo.uid ?
                    $scope.game.creator : $scope.game.opponent,
                callbackFunction);
        }

        function showPlay() {
            if (!gameInstance) {
                gameInstance = new TicTacToe(
                    $scope.game.creator,
                    $scope.game.opponent,
                    $scope.game.creator == $scope.accountInfo.uid ?
                        $scope.game.creator : $scope.game.opponent,
                    callbackFunction);
            }
        }

        function destroyGame() {
            gameInstance.destroy();
            gameInstance = false;
        }

        function callbackFunction(turn, winner) {
            gameService.turn($scope.game, turn);
            if (angular.isString(winner)) {
                if (winner == 'draw') {
                    gameService.finishWithDraw($scope.game);
                } else {
                    gameService.finishWithWin($scope.game, winner);
                }
            }
        }
    }
})();