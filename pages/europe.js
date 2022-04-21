import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { Line } from "../pages/index";
import Image from "next/image";
import norway from "../public/icons/norway.jpeg";
import { CountryDiv } from "./africa";
import { TotalContainer } from "./africa";
import { Choice } from "./africa";
import { Button } from "./africa";
import { ChoiceContainer } from "./africa";
import { useState } from "react";

export default function Europe() {
  const [showAnswer, setShowAnswer] = useState(false);
  function toggle() {
    setShowAnswer(!showAnswer);
  }

  function onClick(data) {
    toggle();
  }
  return (
    <>
      <Header />
      <MainWrapper>
        <TextWrapperStyle>
          <Heading className="BigFontStyle">Europa</Heading>
          <Line></Line>
          <CountryDiv className="MediumFontStyle2">Norwegen</CountryDiv>
          <Norway>
            <Image src={norway} alt="Norway" width={270} height={400} />
            <TotalContainer className="SmallFontStyle">
              Für was steht die Krone als Familienerbstück einer jeden Braut?
              <ChoiceContainer>
                <Choice>A) Schönheit</Choice> <Choice>B) Klugheit</Choice>
                <Choice>C) Reinheit</Choice>
              </ChoiceContainer>
              <Button className="MediumFontStyle" onClick={toggle}>
                Antwort
              </Button>
              <p
                className="MediumFontStyle2"
                style={{
                  display: showAnswer ? "block" : "none",
                }}
              >
                C)! 🎉
              </p>
            </TotalContainer>
          </Norway>
        </TextWrapperStyle>
      </MainWrapper>
      <NavBar />
    </>
  );
}

const MainWrapper = styled.main`
  margin: 0;
  padding: 1rem;
`;

const TextWrapperStyle = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Heading = styled.div`
  margin-top: 3em;
`;

const Norway = styled.div`
  margin-top: 2rem;
`;
