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
  }
`;
