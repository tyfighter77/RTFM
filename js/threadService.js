angular.module('rtfmApp')
.service('threadService', function($firebaseObject, $firebaseArray, fb){
  var firebaseRef = new Firebase('https://rtfm-tyhill.firebaseio.com/');
  this.getThreads = function(){
    return new Firebase(fb.url + '/threads');
  };
  this.getThread = function(threadId){
    return new Firebase(fb.url + '/threads/' + threadId);
  };
  this.getComments = function(threadId){
    return new Firebase(fb.url + '/threads/', + threadId + '/comments');
  };
});
