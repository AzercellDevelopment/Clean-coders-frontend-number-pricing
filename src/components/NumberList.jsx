import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "../commons";
export const NumList = () => {
  const [realNums, setRealNums] = useState([
    { realNum: "+994502017983" },
    { realNum: "+994502017967" },
    { realNum: "+994502017987" },
    { realNum: "+994502017900" },
    { realNum: "+994502017234" },
    { realNum: "+994502017983" },
    { realNum: "+994502017967" },
    { realNum: "+994502017987" },
    { realNum: "+994502017900" },
    { realNum: "+994502017234" },
    { realNum: "+994502017983" },
    { realNum: "+994502017967" },
    { realNum: "+994502017987" },
    { realNum: "+994502017900" },
    { realNum: "+994502017234" },
  ]);

  useEffect(() => {
    // axios
    // .get("")
    // .then((res) => JSON(res))
    // .then((res) => setRealNums([...res]))
    // .catch((err) => console.log(err));
  }, []);
  return (
    <Container>
      <div>
        <div className="header">Hazır Nömrələr</div>
        <ul className="numberList">
          {realNums.map((readyNums, ind) => (
            <li className="singleNums">
              <Link numberForBuy={readyNums} to={`/buy/${ind}`}>
                {readyNums.realNum}
              </Link>
            </li>
          ))}
        </ul>
        <LoadMore>Daha çox</LoadMore>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  /* padding: 40px; */
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .header {
    background-color: #9c0f48;
    padding: 15px;
    color: white;
    font-size: 16px;
    font-weight: 500;
    margin: 0 auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  div {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #bebebe31;
  }
  .numberList {
    list-style: none;
    display: grid;
    grid-template-columns: 200px 200px 200px;
    justify-content: space-around;
    margin: auto;

    padding: 20px;
    @media only screen and (max-width: 768px) {
      display: block;
      margin: 10px auto;
    }
  }
  .singleNums {
    margin: 5px auto;
    padding: 10px;
    border-radius: 5px;
    width: 95%;
    cursor: pointer;

    &:hover {
      -webkit-box-shadow: 1px 1px 5px 5px rgba(211, 211, 211, 0.45);
      box-shadow: 1px 1px 5px 5px #8f8e8e6d;
    }
    @media only screen and (max-width: 768px) {
      width: 90%;
    }
  }
`;
const LoadMore = styled.button`
  margin: 25px;
  border: none;
  border-radius: 5px;
  padding: 12px;
  width: 20%;
  font-weight: bold;
  font-size: 16px;
  background-color: #9c0f48;
  color: white;
  cursor: pointer;
  &:hover {
    -webkit-box-shadow: 1px 1px 5px 1px rgba(179, 179, 179, 1);
    -moz-box-shadow: 1px 1px 5px 1px rgba(179, 179, 179, 1);
    box-shadow: 1px 1px 5px 1px rgba(179, 179, 179, 1);
  }
  @media only screen and (max-width: 768px) {
    width: 70%;
  }
`;
