;(function() {
    angular
        .module('game')
        .factory('gameService', gameService);

    /*ngInject*/
    function gameService($firebaseArray, firebaseReference) {
        return {
            getTurns: getTurns,
            turn: turn,
            finishWithDraw: finishWithDraw,
            finishWithWin: finishWithWin
        };

        function getTurns(game) {
            return $firebaseArray(firebaseReference.child('games/' + game.id + '/turns'));
        }

        function turn(game, turn) {
            firebaseReference.child('games/' + game.id + '/turns').push(turn);
        }

        function finishWithDraw(game) {
            console.log('draw');
        }

        function finishWithWin(game, winner) {
            console.log(winner);
        }
    }
})();