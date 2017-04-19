angular.module("placid").directive("submitDir",[function(){
  return{
    templateUrl:"./views/submitDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope","placidService",function($scope,placidService){
      $scope.determination = ""
      $scope.testPost = () => {
        $scope.determination = "robots are reading your post"
        placidService.testPost($scope.post).then((result)=>{
          console.log(result);
          if(typeof result.data === "string")$scope.determination = result.data;
          else {
            $scope.determination = "Robots want you to address the following:";

          }
        })
      };
    }],
  }
}])
