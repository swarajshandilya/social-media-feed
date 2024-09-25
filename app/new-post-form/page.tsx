"use client";
import { useState } from "react";

interface NewPostFormProps {
  addPost: (content: string) => void;
}

const NewPostForm = ({ addPost }: NewPostFormProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addPost(content);
      setContent("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 mb-6"
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="What's on your mind?"
        rows={3}
      />
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Post
      </button>
    </form>
  );
};

export default NewPostForm;
