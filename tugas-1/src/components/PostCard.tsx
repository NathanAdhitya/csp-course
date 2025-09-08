interface PostCardProps {
  title: string;
  body: string;

  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const bodyLimit = 100;

function getBodyPreview(body: string) {
  return body.length > bodyLimit ? body.slice(0, bodyLimit) + "..." : body;
}

export default function PostCard({ title, body, onClick }: PostCardProps) {
  return (
    <div className="border p-4 rounded">
      <a className="text-xl font-bold hover:underline block mb-2 cursor-pointer" onClick={onClick}>
        {title}
      </a>
      <p>{getBodyPreview(body)}</p>
    </div>
  );
}
