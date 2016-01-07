angular.module('rtfmApp').controller('loginCtrl', function($scope, userService){
  $scope.login = function(email, password) {
    userService.login(email, password);
  };
});
