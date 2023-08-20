import styled from "styled-components";

export const CartStyle = styled.div`
  .cart {
    &__box {
      display: flex;
      flex-wrap: wrap;
      gap: 31px;
      margin-top: 48px;
    }
    &__border {
      display: flex;
      width: 550px;
      padding: 24px;
      align-items: flex-start;
      flex-shrink: 0;
      border-radius: 4px;
      background: #ffffff;
      border: 1px solid;
    }
    &__padding {
      padding-right: 30px;
    }
    &__button {
      border: none;
      padding: 5px 12px;
      border-radius: 4px;
      color: #ffffff;
    }
    &__h1 {
      color: #000000;
      padding-top: 64px;
      padding-bottom: 38px;
      font-size: 28px;
    }
    &__p {
      color: rgba(0, 0, 0, 0.7);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: -0.28px;
    }
  }
`;
