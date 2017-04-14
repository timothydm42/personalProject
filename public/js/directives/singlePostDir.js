angular.module("placid").directive("singlePostDir",[function(){
  return{
    templateUrl:"./views/singlePostDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope",function($scope){
      $scope.test = "hey";

    }]
  }
}])
