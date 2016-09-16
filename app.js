(function () {
  'use strict';

angular.module('myFirstApp',[])

.controller('MyFirstController',function ($scope){
$scope.name= "Sushma";
$scope.sayHello = function() {
return "Hello Sushma";
};
});
})();
