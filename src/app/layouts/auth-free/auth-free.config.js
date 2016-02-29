;(function() {
    angular
        .module('auth-free')
        .config(config);

    /*ngInject*/
    function config($stateProvider) {
        $stateProvider.state('auth-free', {
            abstract: true,
            resolve: {
                AccountInfo: accountInfoResolver
            },
            views: {
                content: {
                    templateUrl : 'layouts/auth-free/auth-free.tpl.html'
                }
            }
        })
    }

    /*ngInject*/
    function accountInfoResolver($firebaseAuth, $q, $state, $timeout, firebaseReference) {
        var deferred = $q.defer();

        $timeout(function() {
            var userInfo = $firebaseAuth(firebaseReference).$getAuth();
            if (userInfo != null) {
                $state.go('dashboard');
                deferred.reject();
            } else {
                deferred.resolve();
            }
        });

        return deferred.promise;
    }
})();