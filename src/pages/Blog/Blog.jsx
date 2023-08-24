import React, { useState } from "react";
import { BlogStyled } from "./Blog.Styled";
import { Link } from "react-router-dom";
import Menu from "./component/Menu";
import BlogMain from "./component/BlogMain";
import { BlogMainStyled } from "./BlogMain.Styled";
import { BlogImg, Iconeye } from "../../images";
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
const Blogdata = [
  {
    blogtitle: "Musobaqa",
    blogimgname: "Blog-img-one.png",
    blogdate: "19-aprel, 2023",
    blogsee: "918",
    blogtext:
      "16-aprel kuni «Najot Ta'lim»da SMM menejerlari uchun story management…",
    blogdoing: "«SMM musobaqasi» bo'lib o'tdi",
  },
  {
    blogtitle: "Master-klass",
    blogimgname: "Blog-img-one.png",
    blogdate: "19-aprel, 2023",
    blogsee: "239",
    blogtext:
      "Farg'ona filialida «Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimo…",
    blogdoing:
      "«Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimov bilan master-klass",
  },
  {
    blogtitle: "Musobaqa",
    blogimgname: "Blog-img-one.png",
    blogdate: "19-aprel, 2023",
    blogsee: "240",
    blogtext:
      "SMM-menejer va Grafik dizaynerlar o'rtasidagi «Marketing Team» jamoaviy…",
    blogdoing: "«Marketing Team» musobaqasi g'oliblari e'lon qilindi",
  },
  {
    blogtitle: "Musobaqa",
    blogimgname: "Blog-img-one.png",
    blogdate: "19-aprel, 2023",
    blogsee: "259",
    blogtext:
      "2-aprel kuni bo'lib o'tgan dasturlash bo'yicha «Algoritmlash» musobaqasi…",
    blogdoing: "Dasturchilar o'rtasida «Algoritmlash» musobaqasi",
  },
  {
    blogtitle: "Master-klass",
    blogimgname: "Blog-img-one.png",
    blogdate: "19-aprel, 2023",
    blogsee: "325",
    blogtext:
      "«Iwash» va «Carbon technologies» loyihalari asoschilari bilan «Shaxsiy…",
    blogdoing: "Otabek Jurayev va Behzodbek Shoyunusovlar bilan master-klass",
  },
  {
    blogtitle: "Musobaqa",
    blogimgname: "Blog-img-one.png",
    blogdate: "11-aprel, 2023",
    blogsee: "387",
    blogtext:
      "100 ga yaqin SMM-menejer va grafik dizaynerlar «Marketing Team»…",
    blogdoing: "«Marketing Team» jamoaviy musobaqasi",
  },
];
const Blog = () => {
  const [blogdata, setblogdata] = useState(Blogdata);
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
              <Menu blogdata={blogdata} setblogdata={setblogdata} key={item.text} Text={item.text}></Menu>
            ))}
          </div>
        </div>
        <div className="blog__main">
          <BlogMainStyled>
            {Blogdata.map((item) => (
              <div className="blog" key={item.blogsee}>
                <div className="blog_title_box">
                  <p className="blog_title_text">{item.blogtitle}</p>
                </div>
                <img src={BlogImg} className="blog_img" alt="" />
                <div className="blog_content">
                  <div className="blog_content_title">
                    <p className="blog_cotent_date">{item.blogdate}</p>
                    <img src={Iconeye} alt="" />
                    <p className="blog_cotent_see">{item.blogsee}</p>
                  </div>
                  <p className="blog_content_text">{item.blogtext}</p>
                  <p className="blog_content_doing">{item.blogdoing}</p>
                </div>
              </div>
            ))}
          </BlogMainStyled>
        </div>
      </div>
    </BlogStyled>
  );
};

export default Blog;
