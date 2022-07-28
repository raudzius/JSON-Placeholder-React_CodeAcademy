interface LinkProps {
  i: number;
  switchPosts: (page: number) => void;
}

export default function PaginationLink({ i, switchPosts }: LinkProps) {
  function handleClick() {
    switchPosts(i);
  }

  return (
    <li>
      <button onClick={handleClick}>{i}</button>
    </li>
  );
}
