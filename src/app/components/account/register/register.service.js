;(function() {
    angular
        .module('register')
        .factory('registerService', registerService);

    /*ngInject*/
    function registerService($q, firebaseReference) {
        return {
            register: register,
            updateProfile: updateProfile
        };

        function register(formData) {
            var deferred = $q.defer();
            firebaseReference
                .createUser(formData, function(error, userData) {
                    if (!error) {
                        deferred.resolve(userData);
                    } else {
                        deferred.reject(error);
                    }
                });
            return deferred.promise;
        }

        function updateProfile(uid, name) {
            var deferred = $q.defer();
            firebaseReference
                .child('dots/users/' + uid)
                .set({
                    name: name
                }, function(error) {
                    if (!error) {
                        deferred.resolve();
                    } else {
                        deferred.reject(error);
                    }
                });
            return deferred.promise;
        }
    }
})();