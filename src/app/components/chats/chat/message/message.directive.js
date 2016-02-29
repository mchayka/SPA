;(function() {
    angular
        .module('message')
        .directive('message', message);

    /*ngInject*/
    function message() {
        return {
            restrict: 'E',
            replace: false,
            templateUrl: 'components/chats/chat/message/message.tpl.html',
            controller: 'MessageController'
        };
    }
})();