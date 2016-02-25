;(function() {
    angular
        .module('register')
        .controller('RegisterController', RegisterController);

    /*ngInject*/
    function RegisterController($scope, registerService, firebaseReference) {
        $scope.formData = {};
        $scope.register = register;

        function register(event) {
            event.preventDefault();

            registerService
                .register($scope.formData)
                .then(function(response) {
                    firebaseReference
                        .child('dots/users/' + response.uid)
                        .set({
                            name: $scope.name
                        });
                    console.log(response);
                }, function(response) {
                    console.log(response);
                });
        }
    }
})();