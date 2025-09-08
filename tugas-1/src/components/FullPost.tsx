interface FullPostProps {
  title: string;
  body: string;

  onBack: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}
export default function FullPost({ title, body, onBack }: FullPostProps) {
  return (
    <div className="border p-4 rounded">
      <a className="hover:underline block mb-2 cursor-pointer" onClick={onBack}>
        &larr; Back
      </a>
      <a className="text-xl font-bold">{title}</a>
      <p>{body}</p>
    </div>
  );
}
