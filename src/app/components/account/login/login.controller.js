;(function() {
    angular
        .module('login')
        .controller('LoginController', LoginController);

    /*ngInject*/
    function LoginController($scope, $state, loginService) {
        $scope.formData = {};
        $scope.login = login;

        function login(event) {
            event.preventDefault();

            loginService
                .login($scope.formData)
                .then(function() {
                    $state.go('dashboard');
                }, function(response) {
                    //TODO: Show some error message for login page
                });
        }
    }
})();