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
            finishGame(game, 'draw');
        }

        function finishWithWin(game, winner) {
            finishGame(game, winner);
        }

        function finishGame(game, winner) {
            firebaseReference.child('users/' + game.creator + '/game').update({
                status: 2,
                winner: winner
            });
            firebaseReference.child('users/' + game.opponent + '/game').update({
                status: 2,
                winner: winner
            });

            firebaseReference.child('games/' + game.id).update({
                status: 2,
                winner: winner
            });
        }
    }
})();