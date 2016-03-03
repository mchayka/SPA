;(function() {
    angular
        .module('game-box')
        .controller('GameBoxController', GameBoxController);

    /*ngInject*/
    function GameBoxController($scope, gameBoxService) {
        $scope.game = gameBoxService.getGame($scope.accountInfo.uid);

        $scope.acceptPlay = acceptPlay;
        $scope.rejectPlay = rejectPlay;

        function acceptPlay() {
            gameBoxService.acceptPlay($scope.game);
        }

        function rejectPlay() {
            gameBoxService.rejectPlay($scope.game);
        }
    }
})();