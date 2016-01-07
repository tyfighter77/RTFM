angular.module('rtfmApp').controller('signupCrl', function($scope, userService){

  $scope.register = function(newEmail, newPassword) {
    userService.register(newEmail, newPassword);
  };
});
