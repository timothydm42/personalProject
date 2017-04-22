angular.module("placid").directive("submitDir",[function(){
  return{
    templateUrl:"./views/submitDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope","$state","placidService",function($scope,$state,placidService){

      $scope.post.id = $state.params.id

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
              $scope.determination = result.data
              $scope.isHidden = true
              for (let prop in $scope.post){
                $scope.post[prop] = ""
              }
            }).catch((result)=>{
              $scope.determination = result.data
              $scope.isHidden = true
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
