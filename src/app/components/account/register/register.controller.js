;(function() {
    angular
        .module('register')
        .controller('RegisterController', RegisterController);

    /*ngInject*/
    function RegisterController($scope, registerService) {
        $scope.formData = {};
        $scope.register = register;

        function register(event) {
            event.preventDefault();

            registerService
                .register($scope.formData)
                .then(function(response) {
                    console.log(response);
                }, function(response) {
                    console.log(response);
                });
        }
    }
})();