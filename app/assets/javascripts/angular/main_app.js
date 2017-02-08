var mainApp = angular.module('mainApp', ['ngRoute', 'templates', 'ngResource', 'Devise', 'satellizer']);

mainApp.config(['$routeProvider', '$locationProvider', '$resourceProvider', '$authProvider', function($routeProvider, $locationProvider, $resourceProvider, $authProvider) {

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

  $authProvider.facebook({
    clientId: '1221865404576722',
    responseType: 'token'
  });

  $authProvider.google({
    clientId: '443127887775-in0in6478toc2kuqloil6ck8pl0t4n95.apps.googleusercontent.com'
  });
}])

mainApp.config(function(AuthProvider) {
  AuthProvider.onUnauthorized=function(event, xhr, deferred) {
  }
})


mainApp.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        window.scrollTo(0, 0);
    });
}]);
