;(function() {
    angular
        .module('game')
        .directive('game', game);

    /*ngInject*/
    function game() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/game-box/game/game.tpl.html',
            controller: 'GameController'
        };
    }
})();