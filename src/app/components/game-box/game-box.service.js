;(function() {
    angular
        .module('game-box')
        .factory('gameBoxService', gameBoxService);

    /*ngInject*/
    function gameBoxService($q, $firebaseObject, firebaseReference, appService) {
        return {
            getGame: getGame,
            acceptPlay: acceptPlay,
            rejectPlay: rejectPlay,
            closeGame: closeGame,
            playAgain: playAgain,
            cancel: cancel,
            createGameRequest: createGameRequest
        };

        function getGame(uid) {
            return $firebaseObject(firebaseReference.child('users/' + uid + '/game'));
        }

        function acceptPlay(game) {
            firebaseReference.child('users/' + game.creator + '/game/status').set(1);
            firebaseReference.child('users/' + game.opponent + '/game/status').set(1);

            firebaseReference.child('games/' + game.id + '/status').set(1);
        }

        function rejectPlay(game, uid) {
            firebaseReference.child('users/' + uid + '/game').remove();

            firebaseReference.child('users/' + game.creator + '/game/status').set(3);
            firebaseReference.child('games/' + game.id + '/status').set(3);
        }

        function closeGame(game, uid) {
            firebaseReference.child('users/' + uid + '/game').remove();
        }

        function playAgain(game, uid) {
            firebaseReference.child('users/' + game.creator + '/game').remove();
            firebaseReference.child('users/' + game.opponent + '/game').remove();
            createGameRequest(uid, uid == game.creator ? game.opponent : game.creator );
        }

        function cancel(game) {
            firebaseReference.child('users/' + game.creator + '/game').remove();
            firebaseReference.child('users/' + game.opponent + '/game').remove();
            //firebaseReference.child('games/' + game.id + '/status').set(3);
        }

        function createGameRequest(uid, opponentUid) {
            var gameUid = appService.generateUniqueId();

            validateGame(uid, opponentUid)
                .then(function() {
                    firebaseReference.child('users/' + uid + '/game').set({
                        creator: uid,
                        winner: false,
                        opponent: opponentUid,
                        status: 0, // 0 - waiting, 1 - gaming, 2 - finished, 3 - rejected
                        id: gameUid
                    });

                    firebaseReference.child('users/' + opponentUid + '/game').set({
                        creator: uid,
                        winner: false,
                        opponent: opponentUid,
                        status: 0, // 0 - waiting, 1 - gaming, 2 - finished, 3 - rejected
                        id: gameUid
                    });

                    firebaseReference.child('games/' + gameUid).set({
                        creator: uid,
                        winner: false,
                        status: 0 // 0 - waiting, 1 - gaming, 2 - finished, 3 - rejected
                    });
                    firebaseReference.child('games/' + gameUid + '/players/' + uid).set(true);
                    firebaseReference.child('games/' + gameUid + '/players/' + opponentUid).set(true);
                });
        }

        function validateGame(uid, opponentUid) {
            var deferred = $q.defer();
            firebaseReference.child('users/' + uid + '/game').once('value', function(snap) {
                if (!snap.val()) {
                    firebaseReference.child('users/' + opponentUid + '/game').once('value', function(snap) {
                        if (!snap.val()) {
                            deferred.resolve();
                        } else {
                            deferred.reject();
                        }
                    });
                } else {
                    deferred.reject();
                }
            });
            return deferred.promise;
        }
    }
})();