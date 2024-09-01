import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,

  // selectPostsError,
  // selectPostsStatus,
} from "../../utilities/redux/slices/postSlice";
import { AppDispatch, RootState } from "../../utilities/redux/store/store";
import Card from "../Card/Card";

const Posts = () => {
  const dispatch: AppDispatch = useDispatch();
  const postStatus = useSelector((state: RootState) => state.posts.status);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <div className="mt-4">
      <Card />
    </div>
  );
};

export default Posts;
