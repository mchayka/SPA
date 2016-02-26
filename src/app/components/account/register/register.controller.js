;(function() {
    angular
        .module('register')
        .controller('RegisterController', RegisterController);

    /*ngInject*/
    function RegisterController($scope, $state, registerService) {
        $scope.formData = {};
        $scope.register = register;

        function register(event) {
            event.preventDefault();

            registerService
                .register($scope.formData, $scope.name)
                .then(function() {
                    $state.go('dashboard');
                }, function() {
                    //TODO: Show some error message for Register page
                });
        }
    }
})();