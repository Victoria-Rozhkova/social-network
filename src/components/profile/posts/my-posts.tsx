import React, { FC } from "react";
import { useSelector } from "react-redux";

import { Post } from "@/components/profile/posts/post";
import { postsSelector } from "@/redux/selectors/profile.selectors";
import { MyPostForm } from "@/components/profile/posts//my-posts-form";

export const MyPosts: FC = () => {
  const posts = useSelector(postsSelector);

  return (
    <div>
      <h3>My posts</h3>
      <MyPostForm />
      <div>
        {posts.map((post) => {
          return (
            <Post key={post.id} likesCount={post.likesCount} post={post.post} />
          );
        })}
      </div>
    </div>
  );
};
