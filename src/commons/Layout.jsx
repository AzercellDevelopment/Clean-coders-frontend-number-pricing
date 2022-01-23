import React from "react";
import { Footer } from "./Footer";
import styled from "styled-components";
import { Header } from "./Header";
export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v960-ning-30.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=63dd5f402645ef52fb7dfb592aec765a");

  @media only screen and (max-width: 768px) {
  }
`;
const MainContainer = styled.div``;
