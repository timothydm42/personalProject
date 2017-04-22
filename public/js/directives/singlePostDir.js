angular.module("placid").directive("singlePostDir",[function(){
  return{
    templateUrl:"./views/singlePostDTemplate.html",
    restrict:"E",
    scope:{},
    controller:["$scope","$state","placidService",function($scope,$state,placidService){

      $scope.id = $state.params.id

      let getDomainName = (url) => {

        var test = url.split("//")
        if(test.length > 1 && test[0][0]==="h" && test[1][0] !== "w") {
          var rStr = url.split("//")[1].split("/")[0]
          return rStr
        }
        if(test.length > 1 && test[1][0]==="w") {
          var pArray = test[1].split("/")
          var rHWStr = pArray[0]
          return rHWStr
        }
        if(test.length === 1 && url[0] != "w"){
          var rSStr = url.slice(0,url.indexOf("/"))
          return rSStr
        }
        else {
          var wArray = url.split("/")
          var rwStr = wArray[0]
          return rwStr
        }
      }

      let getPost = () => {
        placidService.getPost($state.params.id).then(result=>{
          $scope.post = result.data
          $scope.link = getDomainName(result.data.link)
          //console.log($scope.post)
          placidService.getLinkContext(result.data.link).then(result=>{
            console.log(result)
            $scope.linkAnalysis = result.data
          })
        })
      }
      getPost()
    }]
  }
}])
