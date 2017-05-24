
angular.module("placid").directive("navBar",[function(){
  return{
    template:`<link rel="stylesheet" href="../styles/navBarDir.css"/>
              <div class="navBar">
              <a ui-sref="about"><button type="button" class="nav">About</button></a>
              <a ui-sref="posts"><button type="button" class="nav">Posts</button></a>
              <a ui-sref="submit"><button type="button" class="nav">Create Post</button></a>
              <a href="https://github.com/timothydm42/personalProject" target="_blank"
                style="position:fixed; top:3px; right:18px;"><img src="../../github.png" style="height:50px; width:50px;"/></a>
              </div>`,
  }
}])
