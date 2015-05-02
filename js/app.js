var app = angular.module('desktop', ['ngRoute', 'firebase']);

app.constant('fb', 'https://desktop-app.firebaseio.com') 
app.config(function($routeProvider){
  $routeProvider
  .when('/signup', {
      templateUrl: 'js/signup/signup.html',
      controller: 'signupCtrl'
    })
  .when('/login', {
      templateUrl: 'js/login/login.html',
      controller: 'loginCtrl'
    })
  .otherwise({
      redirectTo: '/login'
    });


});

