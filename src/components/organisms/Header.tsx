import * as React from "react";
import styled from "styled-components";

const HeaderContent = styled.header`
  width: 100%;
  height: 40px;
  background-color: #dddddd;
`;

const Header = () => {
  return (
    <HeaderContent>
      <h1>header</h1>
    </HeaderContent>
  );
};

export default Header;
