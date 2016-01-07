angular.module('rtfmApp', ['firebase', 'ui.router'])
.constant('fb', {
  url: 'https://rtfm-tyhill.firebaseio.com/'
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('threads', {
      url: '/threads',
      templateUrl: '/js/views/threads.html',
      controller: 'threadsCtrl',

    })
    .state('thread', {
      url: '/threads/:threadId',
      templateUrl: '/js/views/thread.html',
      controller: 'threadCtrl',
    });
    $urlRouterProvider.otherwise('/threads');


});
