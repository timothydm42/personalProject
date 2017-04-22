angular.module("placid").directive("submitDir",[function(){
  return{
    templateUrl:"./views/submitDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope","$state","placidService",function($scope,$state,placidService){



      $scope.determination = ""

      $scope.testPost = () => {
        $scope.isHidden = false
        $scope.determination = "robots are reading your post"

        if($state.params.id) $scope.post.id = $state.params.id

        placidService.testPost($scope.post).then(result=>{
          $scope.determination = ""
          console.log(JSON.stringify($scope.post, null, 2) + "here")
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
