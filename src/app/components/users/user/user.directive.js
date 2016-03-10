;(function() {
    angular
        .module('user')
        .directive('user', user);

    /*ngInject*/
    function user() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'components/users/user/user.tpl.html',
            controller: 'UserController'
        };
    }
})();