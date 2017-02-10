mainApp.controller('applicationCtrl', ['$scope', '$rootScope', '$location', 'Auth', '$http', function ($scope, $rootScope, $location, Auth, $http) {
  $rootScope.currentUser = null


  // Auth.currentUser().then(function(user) {
  //   $rootScope.currentUser = user
  //   if($rootScope.currentUser){
  //      $location.path( "/users" )
  //   }
  // }, function(error) {
  //   if(error.status == 401){
  //     $location.path( "/" )
  //   }
  // })

  // $scope.$on('devise:unauthorized', function(event, xhr, deferred) {
  //     deferred.reject(xhr);
  // });
}])
