import { Card } from "antd";
import React from "react";

const PostCard = ({ post }) => {
  return (
    <Card title={post.User.nickName}>
      <p>{post.content}</p>
    </Card>
  );
};

export default PostCard;
