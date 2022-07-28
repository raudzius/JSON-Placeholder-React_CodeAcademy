import React from 'react';
import PaginationLink from './PaginationLink';

interface LinksProps {
  numOfPages: number;
  switchPosts: (page: number) => void;
}

export default function PaginationLinks({
  numOfPages,
  switchPosts,
}: LinksProps) {
  const linkArray: JSX.Element[] = [];

  for (let i = 1; i <= numOfPages; i++) {
    linkArray.push(<PaginationLink key={i} i={i} switchPosts={switchPosts} />);
  }

  return <ul>{linkArray}</ul>;
}
