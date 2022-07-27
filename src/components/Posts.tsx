import { useEffect } from 'react';
import { useState } from 'react';
import Post from './Post';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface PostInt {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User;
}

export default function Posts() {
  const [posts, setPosts] = useState<PostInt[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_expand=user&_limit=25')
      .then(res => res.json())
      .then((posts: PostInt[]) => {
        setPosts(posts);
      });
  });

  function paginate(limit: number, posts: PostInt[]) {
    for (let i = 0; i < posts.length; i += limit) {}
  }

  return (
    <div>
      <ul>
        {posts.map((post: PostInt) => (
          <Post
            title={post.title}
            body={post.body}
            name={post.user.name}
            key={post.id}
          />
        ))}
      </ul>
      <div>
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
      </div>
    </div>
  );
}
