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
    })
    .state('login', {
      url: '/login',
      controller: 'loginCtrl',
      templateUrl: 'js/views/login.html'
    })
    .state('Signup', {
      url: '/signup',
      controller: 'signupCtrl',
      templateUrl: 'js/views/signup.html'
    });
    $urlRouterProvider.otherwise('/threads');


});
