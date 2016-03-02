;(function() {
    var ticTacToe = {};

    ticTacToe.players = false;
    ticTacToe.winner = false;
    ticTacToe.crossLine = false;
    ticTacToe.destroyed = false;

    ticTacToe.presenter = (function() {
        var context,
            size = {
                width: 480,
                height: 480
            };
        return {
            init: init,
            draw: draw
        };

        function init(canvasId) {
            context = document.getElementById(canvasId).getContext('2d');
        }

        function draw() {
            clean();
            drawNets();

            ticTacToe.scene.forEach(function(item, index) {
                if (item == 'x') {
                    drawX(index);
                } else if (item == 'o') {
                    drawO(index);
                }
            });

            if (ticTacToe.crossLine) {
                drawCrossLine();
            }
        }

        function clean() {
            context.fillStyle = '#ffffff';
            context.fillRect( 0, 0, size.width, size.height );
        }

        function drawNets() {
            var xIndex, yIndex,
                gradient;
            for(xIndex = 1; xIndex < 3; xIndex++) {
                gradient = context.createLinearGradient((size.width / 3) * xIndex, 0, (size.width / 3) * xIndex, size.height);
                gradient.addColorStop(0, '#ffffff');
                gradient.addColorStop(0.5, "#333333");
                gradient.addColorStop(1, '#ffffff');
                context.beginPath();
                context.moveTo((size.width / 3) * xIndex, 0);
                context.lineTo((size.width / 3) * xIndex, size.height);
                context.strokeStyle = gradient;
                context.lineWidth = 2;

                context.stroke();
            }

            for(yIndex = 1; yIndex < 3; yIndex++) {
                gradient = context.createLinearGradient(0, (size.height / 3) * yIndex, size.width, (size.height / 3) * yIndex);
                gradient.addColorStop(0, '#ffffff');
                gradient.addColorStop(0.5, '#333333');
                gradient.addColorStop(1, '#ffffff');
                context.beginPath();
                context.moveTo(0, (size.height / 3) * yIndex);
                context.lineTo(size.width, (size.height / 3) * yIndex);
                context.strokeStyle = gradient;
                context.lineWidth = 2;

                context.stroke();
            }
        }

        function drawX(index) {
            var x = index % 3,
                y = parseInt(index / 3),
                shiftX = x * 160,
                shiftY = y * 160;
            context.beginPath();
            context.moveTo(shiftX + 20, shiftY + 20);
            context.lineTo(shiftX + 140, shiftY + 140);
            context.moveTo(shiftX + 20, shiftY + 140);
            context.lineTo(shiftX + 140, shiftY + 20);
            context.strokeStyle = 'black';
            context.lineWidth = 20;
            context.stroke();
        }

        function drawO(index) {
            var x = index % 3,
                y = parseInt(index / 3),
                shiftX = x * 160,
                shiftY = y * 160;
            context.beginPath();
            context.arc(shiftX + 80, shiftY + 80, 60, 0, 2*Math.PI);
            context.strokeStyle = 'black';
            context.lineWidth = 20;
            context.stroke();
        }
       function drawCrossLine() {
           if (ticTacToe.crossLine.direction == 'h') {
               context.beginPath();
               context.moveTo(0, ticTacToe.crossLine.line * 160 + 80);
               context.lineTo(480, ticTacToe.crossLine.line * 160 + 80);
               context.strokeStyle = 'darkred';
               context.lineWidth = 20;
               context.stroke();
           } else if (ticTacToe.crossLine.direction == 'v') {
               context.beginPath();
               context.moveTo(ticTacToe.crossLine.line * 160 + 80, 0);
               context.lineTo(ticTacToe.crossLine.line * 160 + 80, 480);
               context.strokeStyle = 'darkred';
               context.lineWidth = 20;
               context.stroke();
           } else if (ticTacToe.crossLine.direction == 'd') {
               context.beginPath();
               context.moveTo(ticTacToe.crossLine.line * 480, 0);
               context.lineTo(Math.abs(ticTacToe.crossLine.line - 1) * 480, 480);
               context.strokeStyle = 'darkred';
               context.lineWidth = 20;
               context.stroke();
           }
       }

    })();

    function TicTacToe(firstPlayer, secondPlayer, callback) {
        var me = this;

        ticTacToe.players = {
            first: firstPlayer,
            second: secondPlayer
        };

        ticTacToe.scene = [
            0, 0, 0,
            0, 0, 0,
            0, 0, 0
        ];
        ticTacToe.turns = [];
        ticTacToe.winner = false;
        ticTacToe.crossLine = false;
        ticTacToe.destroyed = false;
        ticTacToe.last = false;
        ticTacToe.callback = callback;

        ticTacToe.presenter.init('play-field');

        document.getElementById('play-field').addEventListener('click', clickHandler);

        function clickHandler(event) {
            var x = parseInt(event.layerX / 160),
                y = parseInt(event.layerY / 160);
            me.push({
                uid: ticTacToe.players.first,
                x: x,
                y: y
            });
        }

        (function _lifeCycle() {
            ticTacToe.presenter.draw();
            if (!ticTacToe.destroyed) {
                window.requestAnimationFrame(_lifeCycle);
            } else {
                document.getElementById('play-field').removeEventListener('click', clickHandler);
            }
        })();
    }

    TicTacToe.prototype = (function() {
        return {
            destroy: destroy,
            push: push
        };

        function destroy() {
            ticTacToe.destroyed = true;
        }

        function push(turn) {
            if (pushToScene(turn)) {
                ticTacToe.turns.push(turn);
                if (ticTacToe.winner) {
                    console.log('WIN!!!');
                    return ticTacToe.winner;
                } else {
                    return 1;
                }
            } else {
                return 0;
            }
        }

        function pushToScene(turn) {
            var isValid = true,
                turnIndex = turn.y * 3 + turn.x;
            if (!ticTacToe.last || ticTacToe.last != turn.uid ) {
                if (ticTacToe.scene[turnIndex] == 0) {
                    if (ticTacToe.players.first == turn.uid) {
                        ticTacToe.scene[turnIndex] = 'o';
                        ticTacToe.last = ticTacToe.players.first;
                    } else {
                        ticTacToe.scene[turnIndex] = 'x';
                        ticTacToe.last = ticTacToe.players.second;
                    }
                    ticTacToe.callback(turn);
                    validateToWin();
                } else {
                    isValid = false;
                }
            } else {
                isValid = false;
            }
            return isValid;
        }

        function validateToWin() {
            if (ticTacToe.scene[0] != 0 && ticTacToe.scene[0] == ticTacToe.scene[1] && ticTacToe.scene[0] == ticTacToe.scene[2]) {
                ticTacToe.winner = ticTacToe.scene[0] == 'x' ? ticTacToe.players.second : ticTacToe.players.first;
                ticTacToe.crossLine = {direction: 'h', line: 0};
            } else if (ticTacToe.scene[3] != 0 && ticTacToe.scene[3] == ticTacToe.scene[4] && ticTacToe.scene[3] == ticTacToe.scene[5]) {
                ticTacToe.winner = ticTacToe.scene[3] == 'x' ? ticTacToe.players.second : ticTacToe.players.first;
                ticTacToe.crossLine = {direction: 'h', line: 1};
            } else if (ticTacToe.scene[6] != 0 && ticTacToe.scene[6] == ticTacToe.scene[7] && ticTacToe.scene[6] == ticTacToe.scene[8]) {
                ticTacToe.winner = ticTacToe.scene[6] == 'x' ? ticTacToe.players.second : ticTacToe.players.first;
                ticTacToe.crossLine = {direction: 'h', line: 2};
            } else if (ticTacToe.scene[0] != 0 && ticTacToe.scene[0] == ticTacToe.scene[3] && ticTacToe.scene[0] == ticTacToe.scene[6]) {
                ticTacToe.winner = ticTacToe.scene[0] == 'x' ? ticTacToe.players.second : ticTacToe.players.first;
                ticTacToe.crossLine = {direction: 'v', line: 0};
            } else if (ticTacToe.scene[1] != 0 && ticTacToe.scene[1] == ticTacToe.scene[4] && ticTacToe.scene[1] == ticTacToe.scene[7]) {
                ticTacToe.winner = ticTacToe.scene[1] == 'x' ? ticTacToe.players.second : ticTacToe.players.first;
                ticTacToe.crossLine = {direction: 'v', line: 1};
            } else if (ticTacToe.scene[2] != 0 && ticTacToe.scene[2] == ticTacToe.scene[5] && ticTacToe.scene[2] == ticTacToe.scene[8]) {
                ticTacToe.winner = ticTacToe.scene[2] == 'x' ? ticTacToe.players.second : ticTacToe.players.first;
                ticTacToe.crossLine = {direction: 'v', line: 2};
            } else if (ticTacToe.scene[0] != 0 && ticTacToe.scene[0] == ticTacToe.scene[4] && ticTacToe.scene[0] == ticTacToe.scene[8]) {
                ticTacToe.winner = ticTacToe.scene[0] == 'x' ? ticTacToe.players.second : ticTacToe.players.first;
                ticTacToe.crossLine = {direction: 'd', line: 0};
            } else if (ticTacToe.scene[2] != 0 && ticTacToe.scene[2] == ticTacToe.scene[4] && ticTacToe.scene[2] == ticTacToe.scene[6]) {
                ticTacToe.winner = ticTacToe.scene[2] == 'x' ? ticTacToe.players.second : ticTacToe.players.first;
                ticTacToe.crossLine = {direction: 'd', line: 1};
            }
        }
    })();

    window.TicTacToe = TicTacToe;
})();