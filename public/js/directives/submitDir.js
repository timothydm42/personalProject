angular.module("placid").directive("submitDir",[function(){
  return{
    templateUrl:"./views/submitDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope","placidService",function($scope,placidService){
      $scope.testPost = () => {
        placidService.testPost($scope.post).then((result)=>{
          console.log(result);
        })
      };
    }],
  }
}])
