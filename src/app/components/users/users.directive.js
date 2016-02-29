;(function() {
    angular
        .module('users')
        .directive('users', users);

    /*ngInject*/
    function users() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/users/users.tpl.html',
            controller: 'UsersController'
        };
    }
})();