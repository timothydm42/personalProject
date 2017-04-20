angular.module("placid").directive("submitDir",[function(){
  return{
    templateUrl:"./views/submitDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope","placidService",function($scope,placidService){
      $scope.determination = ""

      $scope.testPost = () => {
        $scope.isHidden = false
        $scope.determination = "robots are reading your post"
        placidService.testPost($scope.post).then(result=>{
          $scope.determination = ""
          console.log(result)
          if(result.data === "checking your submission against our database"){
            $scope.determination = result.data
            placidService.postToDB($scope.post).then(result=>{
              console.log("here!!!")
              $scope.determination = result.data
              $scope.isHidden = true
              for (let prop in $scope.post){
                $scope.post[prop] = ""
              }
            }).catch((result)=>{
              console.log("here!!! as well")
              $scope.determination = result.data
              $scope.isHidden = true
              for (let prop in $scope.post){
                $scope.post[prop] = ""
              }
            })
          }
          else {
            $scope.determination = "Watson is kinda sensitive..."
            $scope.fixes = result.data
          }
        })
      }
    }],
  }
}])
