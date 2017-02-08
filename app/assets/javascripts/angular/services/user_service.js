
mainApp.factory('User', ['$resource', function($resource){
  return $resource('/', {}, {
    social_auth: {url: '/social_authentication', method: 'POST'}
  })
}])
