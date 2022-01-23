import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const Search = () => {
  let number = "";
  const [prefix, setPrefix] = useState("_");
  const [numbers, setNumbers] = useState({
    0: "_",
    1: "_",
    2: "_",
    3: "_",
    4: "_",
    5: "_",
    6: "_",
  });

  const onSelect = (val) => {
    setPrefix(val);
  };

  const updateValue = (evt, ind) => {
    setNumbers({ ...numbers, [ind]: evt });
  };

  useEffect(() => {
    number = "";
    for (let num in numbers) {
      number += numbers[num];
    }
    number = prefix + number;
    console.log(number);
  }, [numbers, prefix]);

  const onSearch = (e) => {
    console.log(e.target.value);
    console.log(this.numbers.values);
  };
  return (
    <Container>
      <h2>Axtar</h2>
      <div>
        <div className="">
          <select
            className="preNums"
            name=""
            id=""
            onChange={(ev) => onSelect(ev.target.value)}
          >
            <option> Hamısı&hellip;</option>
            <option>050</option>
            <option>051</option>
            <option>010</option>
          </select>
          <>
            {Object.keys(numbers).map((ind) => (
              <div className="inputs" key={ind}>
                <input
                  maxLength="1"
                  value={numbers[ind]}
                  type="tel"
                  onChange={(ev) => {
                    updateValue(ev.target.value, ind);
                  }}
                />
              </div>
            ))}
          </>
          <div onClick={onSearch} className="seacrhBtn">
            Axtar
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  background-color: #80808032;
  padding: 10px;
  border-radius: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media only screen and (max-width: 768px) {
      display: block;
    }
  }
  .preNums,
  .inputs {
    list-style: none;
    width: 5%;
    background-color: white;
    padding: 20px;
    margin: 2px;
    border-radius: 5px;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
      width: 30%;
      margin: 10px auto;
    }
  }
  .preNums {
    border: none;
    width: 10%;
    font-size: 18px;
    @media only screen and (max-width: 768px) {
      padding: 20px;
      width: 50%;
    }
  }
  option {
  }
  .inputs {
    display: flex;

    font-size: 18px;
    @media only screen and (max-width: 768px) {
      width: 40%;
    }
  }
  .inputs input {
    width: 100%;
    padding: 10px;
    margin: -10px;
    text-align: center;
    border: none;
    font-size: 18px;
  }
  .seacrhBtn {
    font-size: 18px;
    list-style: none;
    width: 7%;
    color: white;
    background-color: #980f5a;
    padding: 18px;
    margin: 3px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #750550;
    }
    @media only screen and (max-width: 768px) {
      width: 50%;
      margin: 15px auto;
    }
  }
`;
