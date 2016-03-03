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
                    if (angular.isString(turnResult)) {
                        if (turnResult == 'draw') {
                            gameService.finishWithDraw($scope.game);
                        } else {
                            gameService.finishWithWin($scope.game, turnResult);
                        }
                    }

                })
            }
        }, true);

        $scope.$watch('game.status', function() {
            if ($scope.game.status == 1) {
                startPlay();
            } else if ($scope.game.status == 2) {

            } else if ($scope.game.status == 3) {
                destroyGame();
            }
        });

        function startPlay() {
            if ($scope.game.creator == $scope.accountInfo.uid) {
                gameInstance = new TicTacToe($scope.game.creator, $scope.game.opponent, $scope.game.creator, callbackFunction);
            } else {
                gameInstance = new TicTacToe($scope.game.creator, $scope.game.opponent, $scope.game.opponent, callbackFunction);
            }
        }

        function destroyGame() {
            gameInstance.destroy();
            gameInstance = false;
            gameService.removeGame();
        }

        function callbackFunction(turn) {
            gameService.turn($scope.game, turn);
        }
    }
})();