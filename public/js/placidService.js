angular.module("placid").service("placidService",["$http","$q",function($http,$q){

  this.thesisTester = (postObj) => {
    return $http({
      url:"http://localhost:3000/submit",
      method:"POST",
      data:postObj.thesis
    })
  };

  this.explanationTester = (postObj) => {
    return $http({
      url:"http://localhost:3000/submit",
      method:"POST",
      data:postObj.explanation
    })
  }

}])
