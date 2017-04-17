angular.module("placid").directive("allPostsDir",function(){
  return{
    templateUrl:"./views/allPostsDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope","placidService",function($scope,placidService){
      var getThesesWId = () => {
        placidService.getThesesWId().then((result)=>{
          $scope.theses = result.data;
          //console.log($scope.theses)
        })
      };
      getThesesWId();
    }]
  }
})
