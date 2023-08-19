import React from "react";
import { BlogStyled } from "./Blog.Styled";

const Blog = () => {
  return (
    <BlogStyled className="home">
      <div className="blog__header">
        <div className="bredcrumb">
            <p className="bredcrumb__"></p>
        </div>
      </div>
    </BlogStyled>
  );
};

export default Blog;
