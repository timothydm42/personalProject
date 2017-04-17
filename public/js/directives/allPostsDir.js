angular.module("placid").directive("allPostsDir",function(){
  return{
    templateUrl:"./views/allPostsDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope","placidService",function($scope,placidService){
      var getTheses = () => {
        placidService.getTheses().then((result)=>{
          $scope.theses = result.data;
        })
      };
      getTheses();
    }]
  }

})
