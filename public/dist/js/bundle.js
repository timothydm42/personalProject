"use strict";angular.module("placid",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("posts",{url:"/posts",template:"<all-posts-dir></all-posts-dir>"}).state("about",{url:"/about",template:"<about-dir></about-dir>"}).state("submit",{url:"/submit/:id",template:"<submit-dir></submit-dir>"}).state("post",{url:"/post/:id",template:"<single-post-dir></single-post-dir>"}),e.when("/","/posts"),e.otherwise("/posts")}]),angular.module("placid").controller("placidCtrl",["$scope","placidService","$state",function(t,e,i){}]),angular.module("placid").service("placidService",["$http","$q",function(t,e){this.testPost=function(e){return console.log(e),t({url:"http://localhost:3000/submit",method:"POST",data:e})},this.postToDB=function(e){return t({url:"http://localhost:3000/database",method:"POST",data:e})},this.getThesesWId=function(e){return t({url:"http://localhost:3000/theses",method:"GET"})},this.getPost=function(e){return t({url:"http://localhost:3000/post/"+e,method:"GET"})},this.getLinkContext=function(e){return t({url:"http://localhost:3000/link",method:"PUT",data:{url:e}})}}]),angular.module("placid").directive("aboutDir",function(){return{templateUrl:"./views/aboutDTemplate.html",restrict:"E",scope:{}}}),angular.module("placid").directive("allPostsDir",function(){return{templateUrl:"./views/allPostsDTemplate.html",restrict:"E",scope:{},controller:["$scope","placidService",function(t,e){!function(){t.fetchMessage="fetching posts :)",e.getThesesWId().then(function(e){t.fetchMessage="",t.theses=e.data})}()}]}}),angular.module("placid").directive("responses",[function(){return{templateUrl:"./views/responsesDTemplate.html",restrict:"E",scope:{}}}]),angular.module("placid").directive("singlePostDir",[function(){return{templateUrl:"./views/singlePostDTemplate.html",restrict:"E",scope:{},controller:["$scope","$state","placidService",function(t,e,i){t.id=e.params.id;var s=function(t){var e=t.split("//");if(e.length>1&&"h"===e[0][0]&&"w"!==e[1][0]){return t.split("//")[1].split("/")[0]}if(e.length>1&&"w"===e[1][0]){return e[1].split("/")[0]}if(1===e.length&&"w"!=t[0]){return t.slice(0,t.indexOf("/"))}return t.split("/")[0]};!function(){i.getPost(e.params.id).then(function(e){t.post=e.data,t.link=s(e.data.link),i.getLinkContext(e.data.link).then(function(e){console.log(e),t.linkAnalysis=e.data})})}()}]}}]),angular.module("placid").directive("submitDir",[function(){return{templateUrl:"./views/submitDTemplate.html",restrict:"E",scope:{},controller:["$scope","$state","placidService",function(t,e,i){t.determination="",t.testPost=function(){t.isHidden=!1,t.determination="robots are reading your post",e.params.id&&(t.post.id=e.params.id);for(var s in t.post)t.post[s]||(t.post[s]=null);i.testPost(t.post).then(function(e){t.determination="",console.log(JSON.stringify(t.post,null,2)+"here"),"checking your submission against our database"===e.data?(t.determination=e.data,i.postToDB(t.post).then(function(e){t.determination=e.data,t.isHidden=!0;for(var i in t.post)t.post[i]=""}).catch(function(e){t.determination=e.data,t.isHidden=!0})):(t.determination="Watson is kinda sensitive...",t.fixes=e.data)})}}]}}]);
//# sourceMappingURL=bundle.js.map
