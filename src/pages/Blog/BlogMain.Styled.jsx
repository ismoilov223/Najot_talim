import styled from "styled-components";

export const BlogMainStyled = styled.div`
  display: flex;
  gap: 90px;
  flex-wrap: wrap;
  .blog {
    width: 342px;
    padding: 8px;
    position: relative;
    &_title_box {
      display: flex;
      padding: 5px 12.69px 5px 12px;
      align-items: flex-start;
      position: absolute;
      left: 20px;
      top: 35px;
      border-radius: 4px;
      background: #fff;
      box-shadow: 0px 0px 2px 0px #000;
    }
    &_title_text {
      color: #000;
      font-family: Lato;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 128.571% */
    }
    &_img {
      border-radius: 8px;
    }
    &_content {
      padding-top: 20px;
      &_title {
        display: flex;
        gap: 6px;
        margin-bottom: 14px;
      }
      &_date {
        color: rgba(0, 0, 0, 0.35);
        font-family: Lato;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 17px; /* 121.429% */
        letter-spacing: -0.28px;
      }
      &_see {
        color: rgba(0, 0, 0, 0.35);
        font-family: Lato;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 17px; /* 121.429% */
        letter-spacing: -0.28px;
      }
      &_text {
        color: #000;
        font-family: Lato;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 27px; /* 150% */
        padding-bottom: 14px;
      }
      &_doing {
        color: rgba(0, 0, 0, 0.5);
        font-family: Lato;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 157.143% */
      }
    }
  }
`;
