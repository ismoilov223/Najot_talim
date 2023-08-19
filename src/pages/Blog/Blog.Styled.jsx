import styled from "styled-components";

export const BlogStyled = styled.div`
  .blog {
    &__header {
      padding-top: 32px;
      padding-bottom: 32px;
      .bredcrumb {
        display: flex;
        align-items: center;
        &__link {
          color: #c4c4c4;
          font-family: Lato;
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 500;
          text-decoration: none;
        }
        &__link::after {
          display: inline-block;
          content: "";
          width: 1.2rem;
          height: 5px;
          margin-right: 10px;
          margin-left: 10px;
          background-image: url("https://najottalim.uz/_next/static/media/arrow-breadcrumb.8858464b.svg");
          background-repeat: no-repeat;
          background-size: contain;
        }
        &__name {
          color: #ba8d5b;
          font-family: Lato;
          font-size: 1.6rem;
          font-style: normal;
          font-weight: 500;
        }
      }
    }
  }
`;
