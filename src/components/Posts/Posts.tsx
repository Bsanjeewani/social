import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  selectPosts,
  selectPostsError,
  selectPostsStatus,
} from "../../utilities/redux/slices/postSlice";
import { RootState } from "../../utilities/redux/store/store";
import Card from "../Card/card";

const Posts = () => {
  const dispatch = useDispatch();
  const postStatus = useSelector((state: RootState) => state.posts.status);
  const posts = useSelector(selectPosts);
  const status = useSelector(selectPostsStatus);
  const error = useSelector(selectPostsError);

  console.log("posts", posts);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <div className="mt-4">
      <Card posts={posts} />
    </div>
  );
};

export default Posts;
