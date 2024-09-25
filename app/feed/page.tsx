"use client";
import { useState } from "react";
import Post from "../post/post";
import NewPostForm from "../new-post-form/page";

interface PostData {
  id: number;
  content: string;
  likes: number;
}

const Feed = () => {
  const [posts, setPosts] = useState<PostData[]>([
    { id: 1, content: "Hello World!", likes: 0 },
    { id: 2, content: "My first post!", likes: 0 },
  ]);

  const handleLike = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const addPost = (content: string) => {
    const newPost = {
      id: posts.length + 1,
      content,
      likes: 0,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* New Post Form */}
      <NewPostForm addPost={addPost} />

      {/* Feed Content */}
      <div className="mt-6 space-y-6">
        {posts.map((post) => (
          <Post key={post.id} post={post} onLike={handleLike} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
