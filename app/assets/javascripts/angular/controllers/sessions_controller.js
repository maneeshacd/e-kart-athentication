mainApp.controller('sessionsCtrl', ['$scope', '$rootScope', 'Auth', '$location', function ($scope, $rootScope, Auth, $location) {

  $scope.signIn = function() {
    Auth.login($scope.signin).then(function(user) {
        $location.path( "/users" )
    }, function(error) {
        alert(error.message)
    });
  }

  $scope.register = function(){
    Auth.register($scope.signup).then(function(response) {
      $location.path( "/users" )
    }, function(error) {
      errors = []
      $.each(error.data.errors,function(k, v){
        concat = []
        $.each(v, function(i, v){concat.push(k + ' '+ v)})
        errors.push(concat)
      })
      alert(errors)
    });
  }

}])
