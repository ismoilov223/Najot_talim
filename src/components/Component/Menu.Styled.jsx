import styled from "styled-components";
export const MenuStyled = styled.div`
  .item {
    display: flex;
    border: 0.1rem solid transparent;
    border-radius: 32px;
    background: #f7f7f5;
    padding: 1.6rem 2.5rem;
    align-items: center;
    transition: 0.3s;
    &__text {
      color: rgba(0, 0, 0, 0.7);
      text-align: center;
      font-family: Lato;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 600;
    }
  }
  .item:hover {
    cursor: pointer;
    border-color: #ba8d5b;
  }
`;
