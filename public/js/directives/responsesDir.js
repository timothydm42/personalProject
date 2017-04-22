angular.module("placid").directive("responses",[function(){
  return{
    templateUrl:"./views/responsesDTemplate.html",
    restrict:"E",
    scope:{
      parent: "=",
    },
    controller:["$scope","placidService",function($scope,placidService){
      $scope.getParentResp = placidService.getParentResp;
    }],
    link:function(scope,element,attributes){
      scope.getParentResp(scope.parent).then(result=>{
        console.log(result)
        scope.results = result
      })
    },
  }
}])
