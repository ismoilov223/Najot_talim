import React from "react";
import { BlogStyled } from "./Blog.Styled";
import { Link } from "react-router-dom";
import Menu from "../../components/Component/Menu";
const Menudata = [
  {
    text: "Barchasi",
  },
  {
    text: "Bitiruv marosimi",
  },
  {
    text: "Master-klass",
  },
  {
    text: "Musobaqa",
  },
  {
    text: "Dasturlash",
  },
  {
    text: "Najot Quiz",
  },
];
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
          <div className="menu">
            {Menudata.map((item) => (
              <Menu Text={item.text}></Menu>
            ))}]]
          </div>
        </div>
      </div>
    </BlogStyled>
  );
};

export default Blog;
