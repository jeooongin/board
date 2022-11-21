import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";

import { loadPost } from "../reducers/post";

const index = () => {
  const dispatch = useDispatch();
  const { mainPost } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(loadPost());
  }, []);

  return (
    <AppLayout>
      {mainPost.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default index;
