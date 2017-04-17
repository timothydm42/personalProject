angular.module("placid").service("placidService",["$http","$q",function($http,$q){

  this.postTester = (postObj) => {
    return $http({
      url:"http://localhost:3000/submit",
      method:"POST",
      data:postObj
    })
  };

  this.getTheses = (postObj) => {
    return $http({
      url:"http://localhost:3000/theses",
      method:"GET",
    })
  }

}])
