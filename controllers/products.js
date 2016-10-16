var app = angular.module('productApp', []);


app.controller('productCtrl',function($scope,$http){
    $scope.products=[];
    $scope.soldout;
    $http.get('mockData/mockResponse.json').success(function(response){
        $scope.products=response.products;
      
        console.log("PRODUCTS",$scope.products);
    })
});