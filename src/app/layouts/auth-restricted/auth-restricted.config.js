;(function() {
    angular
        .module('auth-restricted')
        .config(config);

    /*ngInject*/
    function config($stateProvider) {
        $stateProvider.state('auth-restricted', {
            abstract: true,
            resolve: {
                userInfo: userInfo
            },
            views: {
                content: {
                    templateUrl : 'layouts/auth-restricted/auth-restricted.tpl.html'
                }
            }
        })
    }

    /*ngInject*/
    function userInfo($firebaseAuth, $q, $state, firebaseReference) {
        var userInfo = $firebaseAuth(firebaseReference).$getAuth();
        if (userInfo == null) {
            $state.go('game');
            return $q.reject();
        } else {
            return $q.resolve(userInfo);
        }
    }
})();