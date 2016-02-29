;(function() {
    angular
        .module('message')
        .factory('messageService', messageService);

    /*ngInject*/
    function messageService(firebaseReference) {
        return {
            updateStatus: updateStatus
        };

        function updateStatus(chatId, message) {
            firebaseReference.child('messages/' + chatId + '/' + message.$id + '/status').set(0);
        }
    }

})();