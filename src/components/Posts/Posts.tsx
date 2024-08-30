import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../utilities/redux/slices/postSlice";
import { RootState } from "../../utilities/redux/store/store";

const Posts = () => {
  const dispatch = useDispatch();
  const postStatus = useSelector((state: RootState) => state.posts.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return <div>Posts</div>;
};

export default Posts;
