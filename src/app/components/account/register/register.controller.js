;(function() {
    angular
        .module('register')
        .controller('RegisterController', RegisterController);

    //TODO: Show some error message for Register page

    /*ngInject*/
    function RegisterController($scope, $state, registerService, authService) {
        $scope.formData = {};
        $scope.register = register;

        function register(event) {
            event.preventDefault();

            registerService
                .register($scope.formData)
                .then(function(response) {
                    registerService
                        .updateProfile(response.uid, $scope.name)
                        .then(function() {
                            authService
                                .auth($scope.formData)
                                .then(function() {
                                    $state.go('dashboard');
                                }, function(response) {
                                    console.log(response);
                                });
                        }, function(response) {
                            console.log(response);
                        });
                }, function(response) {
                    console.log(response);
                });
        }
    }
})();