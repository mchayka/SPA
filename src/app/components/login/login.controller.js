;(function() {
    angular
        .module('login')
        .controller('LoginController', LoginController);

    /*ngInject*/
    function LoginController($scope, $state, loginService) {
        $scope.login = login;

        function login() {
            if ($scope.name) {
                loginService
                    .login($scope.name)
                    .then(function() {
                        $state.go('dashboard');
                    }, function(response) {
                        alert('Wrong name!');
                    });
            }
        }
    }
})();