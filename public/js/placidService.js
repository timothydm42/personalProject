angular.module("placid").service("placidService",["$http","$q",function($http,$q){

  this.postTester = (postObj) => {
    return $http({
      url:"http://localhost:3000/submit",
      method:"POST",
      data:postObj
    })
  };

  this.getThesesWId = (postObj) => {
    return $http({
      url:"http://localhost:3000/theses",
      method:"GET",
    })
  };

  this.getPost = (id) => {
    return $http({
      url:"http://localhost:3000/post/" + id,
      method:"GET",
    })
  }

}])
