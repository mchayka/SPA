;(function() {
    angular
        .module('register')
        .factory('registerService', registerService);

    /*ngInject*/
    function registerService($q, $firebaseAuth, firebaseReference) {
        return {
            register: register
        };

        //TODO: Split it!
        function register(formData, name) {
            var deferred = $q.defer();
            $firebaseAuth(firebaseReference)
                .$createUser(formData)
                .then(function(response) {
                    firebaseReference
                        .child('dots/users/' + response.uid)
                        .set({
                            name: name,
                            chats: []
                        }, function(error) {
                            if (!error) {
                                $firebaseAuth(firebaseReference)
                                    .$authWithPassword(formData)
                                    .then(function() {
                                        deferred.resolve();
                                    }, function() {
                                        //TODO: Should be returned some error information
                                        deferred.reject();
                                    });
                            } else {
                                deferred.reject(error);
                            }
                        });
                }, function(response) {
                    console.log(response);
                    //TODO: Should be returned some error information
                    deferred.reject();
                });

            return deferred.promise;
        }
    }
})();