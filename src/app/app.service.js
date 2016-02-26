;(function() {
    angular
        .module('app')
        .factory('appService', appService);

    /*ngInject*/
    function appService() {
        return {
            generateUniqueId: generateUniqueId
        };

        function generateUniqueId() {
            var uniqueIdMask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
                uniqueId = '';
            angular.forEach(uniqueIdMask, function(letter) {
                if (letter == 'x') {
                    uniqueId += (parseInt(Math.random() * 16)).toString(16);
                } else if (letter == 'y') {
                    uniqueId += ( 8 + parseInt(Math.random() * 4)).toString(16);
                } else {
                    uniqueId += letter;
                }
            });
            return uniqueId;
        }
    }
})();