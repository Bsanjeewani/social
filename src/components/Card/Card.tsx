import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaRetweet,
  FaShare,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUser } from "../../utilities/redux/slices/userSlice";
import { Post } from "../../utilities/types/types";

interface CardProps {
  posts: Post[];
}

const Card: React.FC<CardProps> = ({ posts }) => {
  const [likePost, setLikePost] = useState<{ [key: string]: boolean }>({});
  const [showLikes, setShowLikes] = useState<{ [key: string]: boolean }>({});
  const [showComments, setShowComments] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [newComment, setNewComment] = useState<{ [key: string]: string }>({});
  const [commentsState, setCommentsState] = useState<{ [key: string]: any[] }>(
    {}
  );

  const user = useSelector(selectUser);

  useEffect(() => {
    const initialCommentsState = posts.reduce((acc, post) => {
      if (post.comments.comment) {
        acc[post.hash] = [post.comments.comment];
      }
      return acc;
    }, {} as { [key: string]: any[] });

    setCommentsState(initialCommentsState);
  }, [posts]);

  const toggleLike = (postId: string, isLiked: boolean) => {
    setLikePost((prev) => ({
      ...prev,
      [postId]: !isLiked,
    }));
  };

  const toggleLikes = (postId: string) => {
    setShowLikes((prev) => ({ ...prev, [postId]: !prev[postId] }));
    setShowComments((prev) => ({ ...prev, [postId]: false }));
  };

  const toggleComments = (postId: string) => {
    setShowComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
    setShowLikes((prev) => ({ ...prev, [postId]: false }));
  };

  const handleComment = (postId: string) => {
    if (newComment[postId]) {
      setCommentsState((prev) => ({
        ...prev,
        [postId]: [
          {
            hash: Math.random().toString(36).substring(7),
            text: newComment[postId],
            timestamp: Date.now(),
            author: {
              soconId: user.soconId,
              pfp: user.avatar,
              display_name: user.displayName,
              username: user.username,
            },
          },
          ...(prev[postId] || []),
        ],
      }));
      setNewComment((prev) => ({ ...prev, [postId]: "" }));
    }
  };

  return (
    <div className="md:p-6 p-4 w-full rounded-xl text-white">
      <div className="gap-9 flex justify-center flex-wrap">
        {posts.map((post) => {
          const likeCount = likePost[post.hash]
            ? post.likes.count + 1
            : post.likes.count;
          const isLiked = likePost[post.hash] || post.isLiked;
          const comments = commentsState[post.hash] || [];

          return (
            <div
              key={post.hash}
              className="bg-black w-[100%] md:w-[45%] lg:w-[30%] rounded-md pt-4 border-2 border-purple-500 shadow-purple"
            >
              <div className="flex justify-between  mx-4">
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      src={post.likes.author.pfp}
                      alt="avatar"
                      className="relative inline-block h-10 w-10 md:h-12 md:w-12 !rounded-full object-cover object-center"
                    />
                  </div>
                  <div className="md:text-md-1  text-sm">
                    @{post.author.username}
                  </div>
                </div>
                <div>
                  <div className="mt-4 md:text-md-1  text-sm">
                    {Math.floor(post.timestamp / 1440) % 10} days ago
                  </div>
                </div>
              </div>
              <div className="mx-4 font-sans text-start mt-4 text-base font-light text-gray-700 ">
                {post.text}
              </div>
              <div className="relative mx-4 mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                <img
                  src={post.images[0].url}
                  className="md:h-[40vh] w-[100%] bg-auto"
                  alt="post"
                />
                <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                <button
                  className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  onClick={() => toggleLike(post.hash, isLiked)}
                >
                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    {isLiked ? (
                      <FaHeart className="w-6 h-6 text-red" />
                    ) : (
                      <FaRegHeart className="w-5 h-5 z-50" />
                    )}
                  </span>
                </button>
              </div>
              <div className="md:p-6 pt-4 md:pt-0">
                <div className="inline-flex flex-wrap items-center gap-3 group">
                  <span
                    className="flex items-center cursor-pointer rounded-full bg-gray-900/5 p-3 text-white hover:bg-gray-900/10"
                    onClick={() => toggleLikes(post.hash)}
                  >
                    <FaRegHeart className="w-5 h-5" />
                    <span className="ml-2 text-sm">{likeCount}</span>
                  </span>
                  <span
                    className="flex items-center cursor-pointer rounded-full bg-gray-900/5 p-3 text-white transition-colors hover:bg-gray-900/10 group-hover:opacity-70"
                    onClick={() => toggleComments(post.hash)}
                  >
                    <FaComment className="w-5 h-5" />
                    <span className="ml-2 text-sm">{post.comments.count}</span>
                  </span>
                  <span className="flex items-center cursor-pointer rounded-full bg-gray-900/5 p-3 text-white transition-colors hover:bg-gray-900/10 group-hover:opacity-70">
                    <FaRetweet className="w-5 h-5" />
                    <span className="ml-2 text-sm">{post.reposts}</span>
                  </span>
                  <span className="flex items-center cursor-pointer rounded-full bg-gray-900/5 p-3 text-white transition-colors hover:bg-gray-900/10 group-hover:opacity-70">
                    <FaShare className="w-5 h-5" />
                    <span className="ml-2 text-sm">{post.shares}</span>
                  </span>

                  {showLikes[post.hash] && (
                    <div className="mt-2 ml-4 mb-2 md:ml-0 md:mb-0 text-sm text-white">
                      <div className="flex items-center gap-4">
                        <img
                          src={post.likes.author.pfp}
                          alt="avatar"
                          className="relative inline-block h-10 w-10 md:h-12 md:w-12 rounded-full object-cover object-center"
                        />
                        <div>@{post.likes.author.username}</div>
                      </div>
                      {isLiked && (
                        <div className="flex items-center gap-4">
                          <img
                            src={user.avatar}
                            alt="User Avatar"
                            className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
                          />
                          <div>@{user.username}</div>
                        </div>
                      )}
                    </div>
                  )}

                  {showComments[post.hash] && (
                    <div className="mt-2 text-sm text-white">
                      <div className="flex items-center">
                        <input
                          type="text"
                          placeholder="Add a comment..."
                          value={newComment[post.hash] || ""}
                          onChange={(e) =>
                            setNewComment((prev) => ({
                              ...prev,
                              [post.hash]: e.target.value,
                            }))
                          }
                          className="w-full ml-4 md:ml-0 p-2 rounded-md text-black"
                        />
                        <button
                          onClick={() => handleComment(post.hash)}
                          className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-md"
                        >
                          Add
                        </button>
                      </div>
                      <div className="mt-4">
                        {comments.map((comment) => (
                          <div
                            key={comment.hash}
                            className="mb-2 flex ml-4  items-center"
                          >
                            <img
                              src={comment.author.pfp}
                              alt="avatar"
                              className="relative inline-block h-8 w-8 rounded-full object-cover object-center"
                            />
                            <div className="ml-2  flex justify-between w-full">
                              <div>
                                <strong>@{comment.author.username}</strong>
                                <p>{comment.text}</p>
                              </div>

                              <p>
                                {" "}
                                {Math.floor(comment.timestamp / 14400000)} days
                                ago
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
