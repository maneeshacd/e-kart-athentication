
mainApp.factory('Product', ['$resource', function($resource){
  return $resource('/', {}, {
    get_products: {url: '/get_products', method: 'GET'}
  })
}])
