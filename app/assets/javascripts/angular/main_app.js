var mainApp = angular.module('mainApp', ['ngRoute', 'templates', 'ngResource', 'Devise']);

mainApp.config(['$routeProvider', '$locationProvider', '$resourceProvider',
  function($routeProvider, $locationProvider, $resourceProvider) {

  $routeProvider.when('/',{
    templateUrl: 'sessions/sign_in.html',
    controller: 'sessionsCtrl'
  })

  $routeProvider.when('/sign_up',{
    templateUrl: 'sessions/sign_up.html',
    controller: 'sessionsCtrl'
  })

  $routeProvider.when('/users',{
    templateUrl: 'users/users.html',
    controller: 'usersCtrl'
  })

  $locationProvider.html5Mode(true)
}])

mainApp.config(function(AuthProvider) {
  AuthProvider.onUnauthorized=function(event, xhr, deferred) {
    alert(1)
  }
})

mainApp.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        window.scrollTo(0, 0);
    });
}]);
