angular.module('rtfmApp')
.controller('threadsCtrl', function($scope, threadService, $firebaseArray){

// threadService.getThreads();
// .then(function(threadsRef){
//   $scope.threads = $firebaseArray(threadsRef);
// });
$scope.threads = $firebaseArray(threadService.getThreads());


  $scope.threads.$loaded().then(function (threads) {
    console.log(threads);
  });

  $scope.createThread = function (username, title) {
    $scope.threads.$add({
      username: username,
      title: title
    });

  };

});
