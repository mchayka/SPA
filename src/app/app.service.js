;(function() {
    angular
        .module('app')
        .factory('appService', appService);

    /*ngInject*/
    function appService() {
        return {
            getUsers: getUsers,
            getChats: getChats
        };

        function getUsers() {
            return [
                {name:'John'},
                {name:'Tomi'},
                {name:'Lisa'}
            ];
        }

        function getChats() {
            return [
                {id: 'John'},
                {id: 'Tomi'}
            ];
        }
    }
})();