angular.module('rtfmApp')
.controller('threadCtrl', function($scope, threadService, $firebaseObject, $firebaseArray, $stateParams){

  // threadService.getThread($stateParams.threadId)
  // .then(function(threadRef){
  //
  // });

var threadObj = threadService.getThread($stateParams.threadId);

  var thread = $firebaseObject(threadObj);
  thread.$bindTo($scope, 'thread');

$scope.comments = $firebaseArray(threadService.getComments($stateParams.threadId));

$scope.createComment = function (username, text) {
  $scope.comments.$add({
    username: username,
    text: text
  });
};

console.log($stateParams.threadId);

});
