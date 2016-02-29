;(function() {
    angular
        .module('chats')
        .directive('chats', chats);

    /*ngInject*/
    function chats() {
        return {
            restrict: 'EA',
            replace: false,
            templateUrl: 'components/chats/chats.tpl.html',
            controller: 'ChatsController'
        };
    }
})();