import React from "react";
import styled from "styled-components";
export const Header = () => {
  return (
    <Container>
      <h3>Nömrələrin satışı</h3>
    </Container>
  );
};
const Container = styled.div`
  background-color: #bebebe31;
  padding: 12px;
  font-size: 16px;
  text-align: left;
  margin-bottom: 20px;
  margin-top: -20px;
  h3 {
  }
`;
