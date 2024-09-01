import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store/store";

interface PostAuthor {
  soconId: number;
  pfp: string;
  display_name: string;
  username: string;
  rewardPoints?: number;
}

interface PostImage {
  url: string;
  caption: string;
  type: number;
}

interface PostComment {
  hash: string;
  text: string;
  timestamp: number;
  type: number;
  images: any[];
  author: PostAuthor;
}

interface Post {
  hash: string;
  timestamp: number;
  text: string;
  isPrivate: boolean;
  type: number;
  hashtags: string[];
  author: PostAuthor;
  isLiked: boolean;
  isSaved: boolean;
  isARepost: boolean;
  images: PostImage[];
  shares: number;
  reposts: number;
  likes: {
    count: number;
    author: PostAuthor;
  };
  comments: {
    count: number;
    comment: PostComment[];
  };
}

interface PostState {
  posts: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PostState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    "https://api.socialcontinent.xyz/api/v1/post/suggested"
  );
  return response.data;
});

export const likePost = createAsyncThunk(
  "posts/likePost",
  async (postId: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return postId;
  }
);

export const commentOnPost = createAsyncThunk(
  "posts/commentOnPost",
  async (payload: { postId: string; comment: PostComment }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return payload;
  }
);

export const repostPost = createAsyncThunk(
  "posts/repostPost",
  async (postId: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return postId;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(likePost.fulfilled, (state, action) => {
        const postId = action.payload;
        const post = state.posts.find((p) => p.hash === postId);
        if (post) {
          post.likes.count += 1;
          post.isLiked = true;
        }
      })
      .addCase(commentOnPost.fulfilled, (state, action) => {
        const { postId, comment } = action.payload;
        const post = state.posts.find((p) => p.hash === postId);
        if (post) {
          post.comments.count += 1;
          post.comments.comment.push(comment);
        }
      })
      .addCase(repostPost.fulfilled, (state, action) => {
        const postId = action.payload;
        const post = state.posts.find((p) => p.hash === postId);
        if (post) {
          post.reposts += 1;
        }
      });
  },
});

export default postsSlice.reducer;

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;
