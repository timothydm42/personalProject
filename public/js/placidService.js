angular.module("placid").service("placidService",["$http","$q",function($http,$q){

  this.testPost = (postObj) => {
    console.log(postObj)
    return $http({
      url:"http://localhost:3000/submit",
      method:"POST",
      data:postObj
    })
  }

  this.postToDB = (postObj) => {
    return $http({
      url:"http://localhost:3000/database",
      method:"POST",
      data:postObj
    })
  }

  this.getThesesWId = (postObj) => {
    return $http({
      url:"http://localhost:3000/theses",
      method:"GET",
    })
  }

  this.getPost = (id) => {
    return $http({
      url:"http://localhost:3000/post/" + id,
      method:"GET",
    })
  }

  this.getLinkContext = (url) => {
    return $http({
      url:"http://localhost:3000/link",
      method:"PUT",
      data:{"url":url}
    })
  }

}])
