import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BuyNow = () => {
  const [submitted, setSubmitted] = useState(false);
  const submittedForm = () => {
    setSubmitted(true);
  };

  const [card, setCard] = useState(false);
  const handleCardPayment = () => {
    setCard((val) => !val);
  };
  return (
    <Container>
      {!submitted ? (
        <form onSubmit={submittedForm} action="">
          <input type="text" required placeholder="Adınız..." />
          <input type="text" required placeholder="Soyadınız..." />
          <input type="email" required placeholder="E-mail addressiniz..." />
          <input type="text" required placeholder="Fin kod..." />

          <select onChange={handleCardPayment} required name="" id="">
            <option value="">Ödəniş növü</option>
            <option value="">Master Card</option>
            <option value="">Nəğd ödəniş</option>
          </select>
          {card ? (
            <div className="cardField">
              <p>Cartla ödəniş üçün məlumatları doldurun...</p>
              <input type="number" placeholder="Cart nömrəsi" />
              <div>
                <input type="number" placeholder="ay/il" />
                <input type="text" placeholder="CVC" />
              </div>
              <button className="payBtn">Ödə</button>
            </div>
          ) : (
            <p>Nağd ödəniş üçün göstərilən addresə yaxınlaşa bilərsiniz</p>
          )}
          <button className="submitForm" type="submit">
            Satın Al
          </button>
        </form>
      ) : (
        <div className="success">
          <h1>Əməliyyat Uğurla həyata keçirildi</h1>
          <p>
            Növbəti 10 gün ərzində məlumat bölgəsində verilən addresə
            yaxınlaşaraq nömrənizi əldə edə bilərsiniz. Əks təqdirdə 10 gün
            sonra nömrə ləğv olunub yenidən satışa çıxarılacaqdır.
          </p>
          <Link className="backLink" to={"/"}>
            Ana səfihəyə dön
          </Link>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  margin: 20px auto;
  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .backLink {
    text-decoration: none;
    margin: 25px;
  }
  input,
  select {
    margin: 8px auto;
    padding: 14px;
    font-size: 15px;
    width: 40%;
    border: none;
    border-radius: 5px;
    @media only screen and (max-width: 768px) {
      width: 90%;
    }
  }
  .submitForm {
    width: 20%;
    margin: 10px auto;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    background-color: #980f5a;
    color: white;
    @media only screen and (max-width: 768px) {
      width: 90%;
    }
    cursor: pointer;
    &:hover {
      -webkit-box-shadow: 1px 1px 5px 1px rgba(179, 179, 179, 1);
      -moz-box-shadow: 1px 1px 5px 1px rgba(179, 179, 179, 1);
      box-shadow: 1px 1px 5px 1px rgba(179, 179, 179, 1);
    }
  }
  .success {
    width: 60%;
    margin: 0 auto;
    padding: 40px;
    border-radius: 5px;
    display: block;
    background-color: #ffffff4c;
    @media only screen and (max-width: 768px) {
      margin: 5px auto;
      width: 90%;
      padding: 20px;
      h1 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
    }
  }
  .cardField {
    width: 40%;
    background-color: white;
    margin: 10px auto;
    padding: 15px;
    border-radius: 5px;
  }
  .cardField > input {
    width: 90%;
    background-color: #f5f5f5;
  }
  .cardField > div {
    display: flex;
    justify-content: space-between;
  }
  .cardField > div > input {
    width: 40%;
    background-color: #f5f5f5;
  }
  .payBtn {
    color: white;
    background-color: #4fbdba;
    padding: 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    width: 35%;
    margin: 20px;
    float: right;
  }
`;
