var posts=["Ryan/hello-world/","Ryan/Linux学习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };