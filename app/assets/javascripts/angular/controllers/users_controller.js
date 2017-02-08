mainApp.controller('usersCtrl', ['$scope', '$rootScope','$location', 'Auth', function ($scope, $rootScope, $location, Auth) {

  $scope.currentUser = function(){
    Auth.currentUser().then(function(user) {
        $scope.user = user;
    }, function(error) {
        // unauthenticated error
    });
  }
  $scope.currentUser()

  $scope.logout = function(){
    Auth.logout().then(function(oldUser) {
        $location.path( "/" )
    }, function(error) {
        // An error occurred logging out.
    });
  }
}])
