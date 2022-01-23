import React from "react";
import styled from "styled-components";
import { Layout } from "../commons";
import { NumList, Search } from "../components";
export const HomePage = () => {
  return (
    <Container>
      <Layout>
        <div>
          <Search />
          <NumList />
        </div>
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v960-ning-30.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=63dd5f402645ef52fb7dfb592aec765a");
`;
