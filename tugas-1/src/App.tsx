import { useEffect, useState } from "react";
import "./App.css";
import PostList, { type Post } from "./components/PostList";
import FullPost from "./components/FullPost";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-2xl p-4 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Posts</h1>
      {loading ? (
        <div className="flex items-center flex-col justify-center">
          Loading... <LoadingSpinner />
        </div>
      ) : currentPost !== null ? (
        <FullPost {...currentPost} onBack={() => setCurrentPost(null)} />
      ) : (
        <PostList onPostClick={setCurrentPost} posts={posts} />
      )}
    </div>
  );
}

export default App;
