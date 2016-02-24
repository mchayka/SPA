;(function() {
    angular
        .module('chat')
        .directive('chat', chat);

    /*ngInject*/
    function chat() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'shared/chat/chat.tpl.html',
            controller: 'ChatController'
        };
    }
})();