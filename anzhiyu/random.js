var posts=["2025/01/13/这是另一篇新的文章/","2025/01/13/hello-world/","2025/01/13/新文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };