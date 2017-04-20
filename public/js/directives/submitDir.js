angular.module("placid").directive("submitDir",[function(){
  return{
    templateUrl:"./views/submitDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope","placidService",function($scope,placidService){
      $scope.determination = ""
      $scope.isHidden = false;
      $scope.testPost = () => {
        $scope.determination = "robots are reading your post"
        placidService.testPost($scope.post).then((result)=>{
          console.log(result);
          if(typeof result.data === "string"){
            $scope.determination = result.data
            $scope.isHidden = true
            for (let prop in $scope.post){
              $scope.post[prop] = ""
            }
          }
          else {
            $scope.determination = "Robots want you to address the following:"
            $scope.fixes = result.data
          }
        })
      };
    }],
  }
}])
