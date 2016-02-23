;(function() {
    angular
        .module('auth-restricted')
        .config(config);

    /*ngInject*/
    function config($stateProvider) {
        $stateProvider.state('auth-restricted', {
            abstract: true,
            resolve: {
                authService: 'authService',
                Login: ['authService', '$state', '$q', function(authService, $state, $q) {
                    var deferred = $q.defer();
                    authService.isAuth()
                        .then(function() {
                            deferred.resolve();
                        }, function() {
                            $state.go('login');
                            deferred.reject();
                        });
                    return deferred.promise;
                }]
            },
            views: {
                content: {
                    templateUrl : 'layouts/auth-restricted/auth-restricted.tpl.html'
                }
            }
        })
    }
})();