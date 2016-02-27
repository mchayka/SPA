;(function() {
    angular
        .module('game')
        .config(config);

    /*ngInject*/
    function config($stateProvider) {
        $stateProvider.state('game', {
            parent: 'auth-restricted',
            url: '^/game',
            views: {
                content: {
                    templateUrl : 'components/games/game/game.tpl.html',
                    controller: 'GameController'
                }
            }
        })
    }
})();