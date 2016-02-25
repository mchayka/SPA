;(function() {
    angular
        .module('auth-restricted')
        .config(config);

    /*ngInject*/
    function config($stateProvider) {
        $stateProvider.state('auth-restricted', {
            abstract: true,
            resolve: {
                AccountInfo: accountInfoResolver
            },
            views: {
                content: {
                    templateUrl : 'layouts/auth-restricted/auth-restricted.tpl.html'
                }
            }
        })
    }

    /*ngInject*/
    function accountInfoResolver($firebaseAuth, $q, $state, $timeout, firebaseReference) {
        var deferred = $q.defer();

        $timeout(function() {
            var userInfo = $firebaseAuth(firebaseReference).$getAuth();
            if (userInfo == null) {
                $state.go('login');
                deferred.reject();
            } else {
                deferred.resolve(userInfo);
            }
        });

        return deferred.promise;
    }
})();