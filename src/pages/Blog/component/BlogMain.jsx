import React from "react";
import { BlogMainStyled } from "../BlogMain.Styled";
import { Iconeye } from "../../../images";

const BlogMain = (
  { BlogImg },
  { BlogDate },
  { BlogSeen },
  { BlogText },
  { BlogDoing }
) => {
  return (
    <>
      <BlogMainStyled>
        <div className="blog">
          <img src={BlogImg} className="blog_img" alt="" />
          <div className="blog_content">
            <div className="blog_content_title">
              <p className="blog_cotent_date">{BlogDate}</p>
              <img src={Iconeye} alt="" />
              <p className="blog_cotent_see">{BlogSeen}</p>
            </div>
            <p className="blog_content_text">{BlogText}</p>
            <p className="blog_content_doing">{BlogDoing}</p>
          </div>
        </div>
      </BlogMainStyled>
    </>
  );
};

export default BlogMain;
