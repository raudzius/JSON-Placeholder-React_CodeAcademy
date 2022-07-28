import PostInterface from '../models/PostInterface';
import Post from '../Post';

interface PostsProps {
  posts: PostInterface[];
}

export default function PaginationPosts({ posts }: PostsProps) {
  return (
    <div>
      <ul>
        {posts.map(post => {
          return (
            <Post
              title={post.title}
              body={post.body}
              name={post.user.name}
              key={post.id}
            />
          );
        })}
      </ul>
    </div>
  );
}
