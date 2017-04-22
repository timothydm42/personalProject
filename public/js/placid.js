angular.module("placid",["ui.router"]).config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider) {

  $stateProvider.state("posts",{
    url:"/posts",
    template:"<all-posts-dir></all-posts-dir>"
  }).state("about",{
    url:"/about",
    template:"<about-dir></about-dir>"
  }).state("submit",{
    url:"/submit/:id",
    template:"<submit-dir></submit-dir>"
  }).state("post",{
    url:"/post/:id",
    template:"<single-post-dir></single-post-dir>"
  });

  $urlRouterProvider.when("/", "/posts");
  $urlRouterProvider.otherwise("/posts");

}])
