mainApp.controller('sessionsCtrl', ['$scope', '$rootScope', 'Auth', '$location', function ($scope, $rootScope, Auth, $location) {

  $scope.signIn = function() {
    Auth.login($scope.signin).then(function(user) {
        $location.path( "/users" )
    }, function(error) {
        alert(error.message)
    });

    // $scope.$on('devise:login', function(event, currentUser) {
    // });

    // $scope.$on('devise:new-session', function(event, currentUser) {
    // });

    // $scope.$on('devise:unauthorized', function(event, xhr, deferred) {

    // })
  }

}])
