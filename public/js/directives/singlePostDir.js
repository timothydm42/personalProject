angular.module("placid").directive("singlePostDir",[function(){
  return{
    templateUrl:"./views/singlePostDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope","$state","placidService",function($scope,$state,placidService){

      var getPost = () => {
        placidService.getPost($state.params.id).then((result)=>{
          $scope.post = result.data
          console.log($scope.post)
        })
      }
      getPost()
    }]
  }
}])
