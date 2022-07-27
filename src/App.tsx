import { useEffect, useState } from 'react';
import PostI from './components/models/post';
import Posts from './components/Posts';
function App() {
  const [posts, setPosts] = useState<PostI[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_expand=user')
      .then(res => res.json())
      .then((posts: PostI[]) => {
        setPosts(posts);
      });
  });

  if (posts.length) {
    return (
      <div>
        <Posts posts={posts} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default App;
