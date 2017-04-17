angular.module("placid").directive("singlePostDir",[function(){
  return{
    templateUrl:"./views/singlePostDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope","$state","placidService",function($scope,$state,placidService){
      $scope.test = $state.params.id;

    }]
  }
}])
