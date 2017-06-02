
angular.module("placid").directive("navBar",[function(){
  return{
    template:`<link rel="stylesheet" href="../styles/navBarDir.css"/>
              <div class="navBar">
              <a ui-sref="about"><div class="nav"><div>About</div></div></a>
              <a ui-sref="posts"><div class="nav"><div>Posts</div></div></a>
              <a ui-sref="submit"><div class="nav"><div>Create Post</div></div></a>
              <a href="https://github.com/timothydm42/personalProject" target="_blank"
                style="position:fixed; top:12px; right:18px; background:none;"><img src="../../github.png" style="height:50px; width:50px; background:none;"/></a>
              </div>`,
  }
}])
