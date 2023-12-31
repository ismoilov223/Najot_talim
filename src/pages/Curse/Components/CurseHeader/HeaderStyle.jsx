import styled from "styled-components";

export const HeaderStyle = styled.div`
  .header {
    &__bg {
      background: #f7f7f5;
      padding-bottom: 24px;
    }

    &__h3 {
      display: flex;
      align-items: center;
      padding-top: 32px;
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
    &__serach {
      display: flex;
      justify-content: space-between;
      margin-top: 32px;
    }
    &__form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 319px;
      border-radius: 100px;
      background: white;
    }
    &__input {
      border: none;
      padding: 14px;

      margin-left: 15px;
    }
    &__lupa {
      margin-right: 15px;
    }
    &__button {
      margin-top: 24px;
    }
  }
`;
