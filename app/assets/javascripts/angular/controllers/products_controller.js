mainApp.controller('productsCtrl', ['$scope', '$rootScope','$location', 'Auth',
'Product', function ($scope, $rootScope, $location, Auth, Product) {

  $scope.getProducts = function(){
    Product.get_products(function(response){
      $scope.products = response.data
    })
  }
  $scope.getProducts()

  $scope.payment = function(){
    $scope.options = {
         'key': 'rzp_test_Wl2WptJM7LnCyx',
         // Insert the amount here, dynamically, even
         'amount': 100,
         'name': '',
         'description': 'Pay for Order #2323',
         'image': '',
         'handler': function (transaction) {
           var mapForm = document.createElement("form");
        mapForm.target = "_self";
        mapForm.method = "POST";
        mapForm.action = "/orders";

        var mapInput = document.createElement("input");
        mapInput.type = "text";
        mapInput.name = "payment_id";
        mapInput.value = transaction.razorpay_payment_id;
        mapForm.appendChild(mapInput);

        var mapInput2 = document.createElement("input");
        mapInput2.type = "text";
        mapInput2.name = "user_id";
        mapInput2.value = 12;

        var mapInput3 = document.createElement("input");
        mapInput3.type = "text";
        mapInput3.name = "product_id";
        mapInput3.value = 1;

        mapForm.appendChild(mapInput);
        mapForm.appendChild(mapInput2);
        mapForm.appendChild(mapInput3);

        mapForm.submit();
         },
         'prefill': {
           'name': '',
           'email': '',
           'contact': ''
          }
         }
   $.getScript('https://checkout.razorpay.com/v1/checkout.js', function() {
        var rzp1 = new Razorpay($scope.options);
        rzp1.open();
      })
  }

}])
