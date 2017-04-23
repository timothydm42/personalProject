angular.module("placid").directive("responses",[function(){
  return{
    templateUrl:"./views/responsesDTemplate.html",
    restrict:"E",
    scope:{
      response: "=",
      getDomainName: "&",
    },
    controller:["$scope","placidService",function($scope,placidService){
      $scope.getLinkContext = placidService.getLinkContext;
    }],
    link:function(scope,element,attributes){
      console.log(JSON.stringify(scope.response, null, 2) + "    link thing___")

      scope.link = scope.getDomainName()

      scope.getLinkContext(scope.response.link).then(result=>{
        scope.linkAnalysis = result.data
      })
    },
  }
}])
