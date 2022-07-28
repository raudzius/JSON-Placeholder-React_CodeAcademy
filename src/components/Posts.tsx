import { useState, useEffect } from 'react';
import PostInterface from './models/PostInterface';
import PaginationLinks from './pagination/PaginationLinks';
import PaginationPosts from './pagination/PaginationPosts';
import PaginationSelection from './pagination/PaginationSelection';

export default function Posts() {
  const [allPosts, setAllPosts] = useState<PostInterface[]>([]);
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [numOfPages, setNumOfPages] = useState<number>(4);
  const [limit, setLimit] = useState<number>(25);
  const [start, setStart] = useState<number>(0);

  function paginatePosts(limit: number) {
    setNumOfPages(Math.ceil(allPosts.length / limit));
    setLimit(limit);
  }

  function switchPosts(page: number) {
    fetchAllPosts();
    setStart(limit * (page - 1));
  }

  async function fetchAllPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const fetchedPosts = await res.json();
    setAllPosts(fetchedPosts);
  }

  useEffect(() => {
    fetchAllPosts();
  }, []);

  async function fetchPosts() {
    const limitParam: string = ``;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_expand=user&_start=${start}&_limit=${limit}`
    );
    const fetchedPosts = await res.json();
    setPosts(fetchedPosts);
  }

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <PaginationSelection paginatePosts={paginatePosts} />
      <PaginationPosts posts={posts} />
      <PaginationLinks numOfPages={numOfPages} switchPosts={switchPosts} />
    </div>
  );
}
