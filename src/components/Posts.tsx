import PostI from './models/post';
import { useRef, useState } from 'react';
import Post from './Post';

interface PostsProps {
  posts: PostI[];
}

export default function Posts({ posts }: PostsProps) {
  const [limitedPosts, setLimitedPosts] = useState(limitPosts(25, posts));
  const selectRef = useRef<HTMLSelectElement>(null);

  function limitPosts(limit: number, posts: PostI[]) {
    const limitedPosts: JSX.Element[] = [];
    for (let i = 0; i < limit; i++) {
      const post = (
        <Post
          key={posts[i].id}
          title={posts[i].title}
          body={posts[i].body}
          name={posts[i].user.name}
        />
      );
      limitedPosts.push(post);
    }
    return limitedPosts;
  }

  function handleSelect() {
    setLimitedPosts(limitPosts(+selectRef.current!.value, posts));
  }

  return (
    <div>
      <select name='posts' id='posts' onClick={handleSelect} ref={selectRef}>
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
      <ul>{limitedPosts}</ul>
    </div>
  );
}
