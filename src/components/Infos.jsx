import React from "react";
import styled from "styled-components";
export const Information = () => {
  return (
    <Container>
      <h2>
        <span>Şəhər </span>
        <span> Rayon </span>
        <span> Küçə </span>
      </h2>
      <p>
        Nömrəni satın aldıqdan sonra yaxınlaşıb yuxarıda qeyd olunan
        filialımızdan əldə edə bilərsiniz.Aldığınız halda növbəti 10 gün ərzində
        əldə etməsəniz satış ləğv olunacaqdır.
      </p>
    </Container>
  );
};
const Container = styled.div`
  background-color: #bebebe31;
  width: 30%;
  margin: 10px auto;
  padding: 40px;
  border-radius: 5px;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
  h3 {
  }
`;
