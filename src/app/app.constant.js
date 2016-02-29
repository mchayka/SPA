angular
    .module('app')
    .constant('firebaseReferenceRoot', new Firebase('https://scorching-torch-5829.firebaseio.com'))
    .constant('firebaseReference', new Firebase('https://scorching-torch-5829.firebaseio.com/dots'));