angular.module("placid").directive("submitDir",[function(){
  return{
    templateUrl:"./views/submitDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope","placidService",function($scope,placidService){}],
  }
}])
