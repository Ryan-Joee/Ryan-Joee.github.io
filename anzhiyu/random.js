var posts=["Ryan/这是另一篇新的文章/","Ryan/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };