angular.module('rtfmApp')
  .service('userService', function($firebaseAuth, $state, fb) {

    var authRef = $firebaseAuth(new Firebase (fb.url));
    var usersRef = $firebaseAuth(new Firebase(fb.url + '/users'));

    this.getUser = function() {
      return authRef.$getAuth();
    };

    this.register = function() {
      authRef.$createUser({
        email: email,
        password: password
      })
      .then(function(newUser){
        console.log('New User Created: ', newUser);
        // $state.go('login');

    this.login(email, password);
      }).cath(function(err){
        console.error('Register Error: ', err);
      });
    };

    this.login = function(email, password) {
      authRef.$authWithPassword({
        email: email,
        password: password
      })
      .then(function(authData) {
        console.log('Login Success: ', authData);
        $state.go('threads');
      })
      .catch(function(err){
        console.error('Login Error: ', err);
      });
    };

  });
