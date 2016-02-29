;(function() {
    angular
        .module('game-box')
        .directive('gameBox', gameBox);

    /*ngInject*/
    function gameBox() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/game-box/game-box.tpl.html',
            controller: 'GameBoxController'
        };
    }
})();