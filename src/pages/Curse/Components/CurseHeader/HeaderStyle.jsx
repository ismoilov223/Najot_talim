import styled from "styled-components";

export const HeaderStyle = styled.div`
  .header {
    &__h3 {
      display: flex;
      align-items: center;
    }
    &__boshs::after {
      display: inline-block;
      content: "";
      width: 12px;
      height: 5px;
      margin-right: 10px;
      margin-left: 10px;
      background-image: url("https://najottalim.uz/_next/static/media/arrow-breadcrumb.8858464b.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
    &__boshs {
      color: #c4c4c4;
      font-family: Lato;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.2rem;
    }
    &__kurs {
      color: #ba8d5b;
      font-family: Lato;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.2rem;
    }
    &__form {
      display: flex;
      gap: 0.8rem;
      border: 0.1rem solid;
      align-items: center;
    }
  }
`;
