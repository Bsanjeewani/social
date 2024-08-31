import React, { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaRetweet,
  FaShare,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectPosts } from "../../utilities/redux/slices/postSlice";

const Card = ({ posts }) => {
  const [showLikes, setShowLikes] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [visibleLikesPostId, setVisibleLikesPostId] = useState(null);
  const [visibleCommentsPostId, setVisibleCommentsPostId] = useState(null);

  const toggleLikes = (postId) => {
    console.log("p id", postId);

    setVisibleLikesPostId(visibleLikesPostId === postId ? null : postId);
  };

  const toggleComments = (postId) => {
    setVisibleCommentsPostId(visibleCommentsPostId === postId ? null : postId);
  };

  return (
    <>
      <div className=" pt-6  text-white  w-full  rounded-xl  text-gray-700  ">
        {/* Auther */}
        <div className=" gap-9 flex flex-wrap">
          {posts &&
            posts.map((post) => (
              <div className="bg-black w-[100%] md:w-[45%] lg:w-[30%] rounded-md pt-4 border-2 border-purple-500 shadow-purple">

                <div className="flex   justify-between mx-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <img
                        src={post.likes.author.pfp}
                        alt="avatar"
                        className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                      />
                    </div>
                    <div>@{post.author.username}</div>
                  </div>
                  <div className="mt-4">{post.timestamp}</div>
                </div>
                {/* Description */}
                <div className=" mx-4 font-sans text-start mt-4 text-base  font-light text-gray-700">
                  Enter a freshly updated and thoughtfully furnished peaceful
                  home surrounded by ancient trees, stone walls, and open
                  meadows.
                </div>
                {/* Main Img */}
                <div className="relative mx-4 mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                  <img
                    src={post.images[0].url}
                    className="h-[40vh] w-[100%] bg-auto"
                    alt="ui/ux review check"
                  />

                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                  {/* Like Button */}
                  <button
                    className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="p-6">
                  {/* Features */}

                  <div className="inline-flex flex-wrap items-center gap-3 group">
                    <span
                      className="flex items-center cursor-pointer rounded-full bg-gray-900/5 p-3 text-gray-900 hover:bg-gray-900/10"
                      onClick={() => {
                        console.log(post.author.soconId);
                        toggleLikes(post.author.soconId);
                        // Add any additional logic you want to execute when soconId exists
                      }}
                    >
                      <FaRegHeart className="w-5 h-5" />

                      <span className="ml-2 text-sm">{post.likes.count}</span>
                    </span>

                    <span
                      className="flex items-center cursor-pointer rounded-full bg-gray-900/5 p-3 text-gray-900 transition-colors hover:bg-gray-900/10 group-hover:opacity-70"
                      onClick={() => {
                        console.log(post.author.soconId);
                        toggleComments(post.author.soconId);
                      }}
                    >
                      <FaComment className="w-5 h-5" />
                      <span className="ml-2 text-sm">
                        {post.comments.count}
                      </span>
                    </span>

                    <span className="flex items-center cursor-pointer rounded-full  bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <FaRetweet className="w-5 h-5" />
                      <span className="ml-2 text-sm">{post.reposts}</span>
                    </span>

                    <span className="flex items-center cursor-pointer rounded-full  bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      <FaShare className="w-5 h-5" />
                      <span className="ml-2 text-sm">{post.shares}</span>
                    </span>
                    {/* {showLikes && (
                      <div className="text-sm text-gray-700">
                        <div className="flex items-center gap-4">
                          <div>
                            <img
                              src={post.likes.author.pfp}
                              alt="avatar"
                              className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                            />
                          </div>
                          <div>@{post.likes.author.username}</div>
                        </div>
                      </div>
                    )} */}
                    {visibleLikesPostId === post.likes.author.soconId && (
                      <div className="mt-2 text-sm text-gray-700">
                        <div className="flex items-center gap-4">
                          <img
                            src={post.likes.author.pfp}
                            alt="avatar"
                            className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
                          />
                          <div>@{post.likes.author.username}</div>
                        </div>
                      </div>
                    )}

                    {/* {showComments && (
                      <div className="mt-2 text-sm text-gray-700">
                        <div className="flex items-center gap-4">
                          <div>
                            <img
                              src={post.comments.comment.author.pfp}
                              alt="avatar"
                              className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                            />
                          </div>
                          <div>@{post.comments.comment.author.username}</div>
                          <div>{post.comments.comment.text}</div>
                          <div>{post.comments.comment.timestamp}</div>
                        </div>
                      </div>
                    )} */}
                    {/* 
                    {visibleCommentsPostId === post.likes.author.soconId && (
                      <div className="mt-2 text-sm text-gray-700">
                        {posts?.map((post) => (
                          <div
                            // key={comment.id}
                            className="flex items-center gap-4"
                          >
                            <img
                              src={post.comments.comment.author.pfp}
                              alt="avatar"
                              className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
                            />
                            <div>@{post.comments.comment.author.username}</div>
                            <div>{post.comments.comment.text}</div>
                            <div>{post.comments.comment.timestamp}</div>
                          </div>
                        ))}
                      </div>
                    )} */}

                    {visibleCommentsPostId === post.author.soconId && (
                      <div className="mt-2 text-sm text-gray-700">
                        {/* {post.comments.comment && ( */}
                        <div className="flex items-center gap-4">
                          <img
                            src={post.comments.comment.author.pfp}
                            alt="avatar"
                            className="relative inline-block h-12 w-12 rounded-full object-cover object-center"
                          />
                          <div>@{post.comments.comment.author.username}</div>
                          <div>{post.comments.comment.text}</div>
                          <div>{post.comments.comment.timestamp}</div>
                        </div>
                        {/* )} */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Button */}
      </div>
    </>
  );
};

export default Card;

{
  /* Title and Rating */
}

{
  /* <div className="flex items-center justify-between mb-3"> */
}
{
  /* Title */
}

{
  /* <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              Wooden House, Florida
            </h5> */
}
{
  /* Rating */
}

{
  /* <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              5.0
            </p> */
}
{
  /* </div> */
}
