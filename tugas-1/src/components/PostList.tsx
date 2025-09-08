import PostCard from "./PostCard";

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostListProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

export default function PostList({ onPostClick, posts }: PostListProps) {
  return (
    <>
      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard {...post} onClick={() => onPostClick(post)} />
          </li>
        ))}
      </ul>
    </>
  );
}
