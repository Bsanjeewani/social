import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaRetweet,
  FaShare,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectUser } from "../../utilities/redux/slices/userSlice"; // Importing user selector

const Card = ({ posts }) => {
  const [likepost, setLikePost] = useState(false);
  const [showLikes, setShowLikes] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [visibleLikesPostId, setVisibleLikesPostId] = useState(null);
  const [visibleCommentsPostId, setVisibleCommentsPostId] = useState(null);

  const [likedPosts, setLikedPosts] = useState({});

  // Getting user from Redux store
  const user = useSelector(selectUser);

  const toggleLike = (postId, isLiked, count) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: {
        isLiked: !isLiked,
        count: isLiked ? count : count + 1,
      },
    }));
  };

  const toggleLikes = (postId) => {
    console.log("p id", postId);

    setVisibleLikesPostId(visibleLikesPostId === postId ? null : postId);
    setVisibleCommentsPostId(null);
  };

  const handleLiked = () => {
    setLikePost(!likepost);
  };

  const toggleComments = (postId) => {
    setVisibleCommentsPostId(visibleCommentsPostId === postId ? null : postId);
    setVisibleLikesPostId(null);
  };

  return (
    <>
      <div className="p-6 text-white w-full rounded-xl text-gray-700">
        <div className="gap-9 flex flex-wrap">
          {posts &&
            posts.map((post) => {
              const likeCount =
                likedPosts[post.hash]?.count || post.likes.count;
              const isLiked = likedPosts[post.hash]?.isLiked || false;

              return (
                <div
                  key={post.hash}
                  className="bg-black w-[100%] md:w-[45%] lg:w-[30%] rounded-md pt-4 border-2 border-purple-500 shadow-purple"
                >
                  <div className="flex justify-between mx-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <img
                          src={post.likes.author.pfp}
                          alt="avatar"
                          className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
                        />
                      </div>
                      <div>@{post.author.username}</div>
                    </div>
                    <div className="mt-4">
                      <div className="mt-4">
                        {Math.floor(post.timestamp / 1440) % 10} days ago
                      </div>
                    </div>
                  </div>
                  <div className="mx-4 font-sans text-start mt-4 text-base font-light text-gray-700">
                    {post.text}
                  </div>
                  <div className="relative mx-4 mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                      src={post.images[0].url}
                      className="h-[40vh] w-[100%] bg-auto"
                      alt="ui/ux review check"
                    />
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                    <button
                      className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                      onClick={() =>
                        toggleLike(post.hash, isLiked, post.likes.count)
                      }
                    >
                      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        {isLiked ? (
                          <FaHeart className="w-6 h-6 text-red" />
                        ) : (
                          <FaRegHeart className="w-5 h-5" />
                        )}
                      </span>
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="inline-flex flex-wrap items-center gap-3 group">
                      <span
                        className="flex items-center cursor-pointer rounded-full bg-gray-900/5 p-3 text-gray-900 hover:bg-gray-900/10"
                        onClick={() => {
                          console.log(post.author.soconId);
                          toggleLikes(post.hash);
                        }}
                      >
                        <FaRegHeart className="w-5 h-5" />
                        <span className="ml-2 text-sm">{likeCount}</span>
                      </span>
                      <span
                        className="flex items-center cursor-pointer rounded-full bg-gray-900/5 p-3 text-gray-900 transition-colors hover:bg-gray-900/10 group-hover:opacity-70"
                        onClick={() => {
                          console.log(post.author.soconId);
                          toggleComments(post.hash);
                        }}
                      >
                        <FaComment className="w-5 h-5" />
                        <span className="ml-2 text-sm">
                          {post.comments.count}
                        </span>
                      </span>
                      <span className="flex items-center cursor-pointer rounded-full bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <FaRetweet className="w-5 h-5" />
                        <span className="ml-2 text-sm">{post.reposts}</span>
                      </span>
                      <span className="flex items-center cursor-pointer rounded-full bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                        <FaShare className="w-5 h-5" />
                        <span className="ml-2 text-sm">{post.shares}</span>
                      </span>

                      {/* Display liked users */}
                      {visibleLikesPostId === post.hash && (
                        <div className="mt-2 text-sm text-gray-700">
                          <div className="flex items-center gap-4">
                            {/* Post author's like */}
                            <img
                              src={post.likes.author.pfp}
                              alt="avatar"
                              className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
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

                      {visibleCommentsPostId === post.hash && (
                        <div className="mt-2 text-sm text-gray-700">
                          <div className="flex items-center gap-4">
                            <img
                              src={post.comments.comment.author.pfp}
                              alt="avatar"
                              className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
                            />
                            <div>@{post.comments.comment.author.username}</div>
                            <div>{post.comments.comment.text}</div>
                            {Math.floor(
                              post.comments.comment.timestamp / 24000000
                            )}{" "}
                            days ago
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
    </>
  );
};

export default Card;
