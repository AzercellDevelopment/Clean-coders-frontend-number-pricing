import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { Layout } from "../commons";
import { AiOutlineCheck, AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineDoDisturbOn } from "react-icons/md";
export const AdminPanel = () => {
  useEffect(() => {
    console.log();
    // axios
    //   .post("", { id: id })
    //   .then((res) => JSON(res))
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <Container>
        <div className="headers">
          <ul>
            <li>Nömrələr</li>
            <li>Qiyməti</li>
            <li>Satılıb</li>
            <li>Bron olunub</li>
            <li>Vaxt</li>
          </ul>
        </div>
        <div className="body">
          <ul>
            <li>+994502017983</li>
            <li>24AZN</li>
            <li>
              <AiOutlineCheck />
            </li>
            <li>
              <MdOutlineDoDisturbOn />
            </li>
            <li>11.03.2022</li>
          </ul>
          <ul>
            <li>+994502017987</li>
            <li>21AZN</li>
            <li>
              <MdOutlineDoDisturbOn />
            </li>
            <li>
              <AiOutlineCheck />
            </li>
            <li>11.03.2022</li>
          </ul>
          <ul>
            <li>+994502347980</li>
            <li>45AZN</li>
            <li>
              <AiOutlineCheck />
            </li>
            <li>
              <MdOutlineDoDisturbOn />
            </li>
            <li>11.03.2022</li>
          </ul>
          <ul>
            <li>+994502017987</li>
            <li>21AZN</li>
            <li>
              <AiOutlineCheck />
            </li>
            <li>
              <MdOutlineDoDisturbOn />
            </li>
            <li>11.03.2022</li>
          </ul>{" "}
          <ul>
            <li>+994502347980</li>
            <li>45AZN</li>
            <li>
              <AiOutlineCheck />
            </li>
            <li>
              <MdOutlineDoDisturbOn />
            </li>
            <li>11.03.2022</li>
          </ul>
        </div>
      </Container>
    </Layout>
  );
};
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px;
  height: 100vh;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    width: 100%;
    padding: 0px;
  }
  ul {
    list-style: none;
  }
  .headers ul {
    justify-content: space-between;
    display: flex;
    background-color: #9c0f48;
    padding: 14px;
    text-align: center;
    font-size: 16px;
    color: white;
    font-weight: 500;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  .headers ul li {
    padding: 5px;
    cursor: pointer;
    &:hover {
      color: wheat;
    }
    @media only screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
  .body {
    margin: 0;
    margin-top: -16px;
    padding: 20px;
    background-color: #bebebe31;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    @media only screen and (max-width: 768px) {
      padding: 5px;
    }
  }
  .body > ul {
    display: flex;
    justify-content: space-between;
    display: flex;
    padding: 14px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      -webkit-box-shadow: 1px 1px 5px 5px rgba(211, 211, 211, 0.45);
      box-shadow: 1px 1px 5px 5px #8f8e8e6d;
    }
    @media only screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
