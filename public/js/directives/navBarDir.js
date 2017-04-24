
angular.module("placid").directive("navBar",[function(){
  return{
    template:`<link rel="stylesheet" href="../styles/navBarDir.css"/>
              <div class="navBar">
              <a ui-sref="about"><button type="button" class="nav">About</button></a>
              <a ui-sref="posts"><button type="button" class="nav">Posts</button></a>
              <a ui-sref="submit"><button type="button" class="nav">Create Post</button></a>
              </div>`,
  }
}])
