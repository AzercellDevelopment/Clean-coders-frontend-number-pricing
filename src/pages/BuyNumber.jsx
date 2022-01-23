import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { Layout } from "../commons";
import { BuyNow, Information } from "../components";

export const BuyNumber = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumberId, setPhoneNumberId] = useState("");
  const [pin, setPin] = useState("");

  const [isShown, setShown] = useState(false);
  const { id } = useParams();
  const handleBuy = () => {
    setShown(true);
  };
  const handleInfo = () => {
    setShown(false);
  };
  useEffect(() => {
    console.log(id);
    // axios
    //   .post("http://localhost:8080/hackathon/customer/brone", { id: id })
    //   .then((res) => JSON(res))
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <Layout>
      <Container>
        <div className="header">Bu nömrəni satın al</div>
        <div className="numberField">
          <h3>+994502017983</h3>

          <BuyThisNumber onClick={handleInfo} className="greenBck">
            Ətraflı Məlumat
          </BuyThisNumber>
          <BuyThisNumber onClick={handleBuy}>Dərhal satın al</BuyThisNumber>
          <div className="price">35AZN</div>
        </div>
        {isShown ? (
          <div className="centered">
            <BuyNow />{" "}
          </div>
        ) : (
          <Information />
        )}
      </Container>
    </Layout>
  );
};
const Container = styled.div`
  /* width: 90%; */
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  .centered {
    margin: 0 auto;

    width: 100%;
  }
  .header {
    padding: 20px;
    font-size: 20px;
    font-weight: 500;
  }
  .numberField {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 16px;
    margin: 50px auto;
    background-color: #bebebe31;
    border-radius: 5px;
    padding: 20px;

    @media only screen and (max-width: 768px) {
      display: block;
      width: 90%;
      margin: 0 auto;
    }
  }

  .price {
    background-color: #4fbdba;
    padding: 8px;
    width: 10%;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    &:hover {
      -webkit-box-shadow: 1px 1px 5px 1px rgba(179, 179, 179, 1);
      -moz-box-shadow: 1px 1px 5px 1px rgba(179, 179, 179, 1);
      box-shadow: 1px 1px 5px 1px rgba(179, 179, 179, 1);
    }
    @media only screen and (max-width: 768px) {
      width: 60%;
      margin: 10px auto;
    }
  }
  .greenBck {
    background-color: #96ceb4;
  }
`;

const BuyThisNumber = styled.button`
  border: none;
  padding: 10px;
  width: 17%;
  border-radius: 8px;
  margin: 5px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  background-color: #35858b;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 1px 1px 5px 1px rgba(179, 179, 179, 1);
    -moz-box-shadow: 1px 1px 5px 1px rgba(179, 179, 179, 1);
    box-shadow: 1px 1px 5px 1px rgba(179, 179, 179, 1);
  }

  @media only screen and (max-width: 768px) {
    width: 60%;
  }
`;
