interface PostProps {
  title: string;
  body: string;
  name: string;
}

export default function Post({ title, body, name }: PostProps) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{body}</p>
      <div>{name}</div>
    </li>
  );
}
