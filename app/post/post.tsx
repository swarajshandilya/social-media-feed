"use client";
interface PostProps {
  post: {
    id: number;
    content: string;
    likes: number;
  };
  onLike: (id: number) => void;
}

const Post = ({ post, onLike }: PostProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      {/* Post Content */}
      <p className="text-gray-800 text-lg">{post.content}</p>

      {/* Like Button */}
      <div className="mt-4 flex justify-between items-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => onLike(post.id)}
        >
          Like ({post.likes})
        </button>

        {/* Display Post ID (optional for development) */}
        <span className="text-sm text-gray-500">Post ID: {post.id}</span>
      </div>
    </div>
  );
};

export default Post;
