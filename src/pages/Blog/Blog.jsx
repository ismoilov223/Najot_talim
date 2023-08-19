import React from "react";
import { BlogStyled } from "./Blog.Styled";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <BlogStyled className="blog">
      <div className="container">
        <div className="blog__header">
          <div className="bredcrumb">
            <Link to={"/"} className="bredcrumb__link">
              Bosh sahifa
            </Link>
            <p className="bredcrumb__name">Bloglar</p>
          </div>
        </div>
      </div>
    </BlogStyled>
  );
};

export default Blog;
