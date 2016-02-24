;(function() {
    angular
        .module('chat')
        .factory('chatService', chatService);

    /*ngInject*/
    function chatService() {
        var allMessages = [
            {name: 'John', content:'Hi, I`m John!'},
            {name: 'Tomi', content:'Hi, I`m Tomi!'},
            {name: 'Vasya', content:'Hello!'},
            {name: 'John', content:'...'}
        ];

        return {
            getMessages: getMessages,
            sendMessage: sendMessage
        };

        function getMessages(name) {
            var messages = [];
            angular.forEach(allMessages, function(message) {
                if (message.name == name || message.name == 'Vasya') {
                    messages.push(message);
                }
            });
            return messages;
        }

        function sendMessage() {

        }
    }
})();