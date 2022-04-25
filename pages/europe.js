import Image from "next/image";
import { useState } from "react";
import { Choice } from "./africa";
import { Button } from "./africa";
import { CountryDiv } from "./africa";
import { Line } from "../pages/index";
import styled from "styled-components";
import { TotalContainer } from "./africa";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { ChoiceContainer } from "./africa";
import norway from "../public/pictures/norway.jpeg";
import ukraine from "../public/pictures/ukraine.jpg";

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
            <Image src={norway} alt="Norway" width={330} height={470} />
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
                C) Reinheit 🎉
              </p>
            </TotalContainer>
          </Norway>

          <CountryDiv className="MediumFontStyle2">Ukraine</CountryDiv>
          <Ukraine>
            <Image src={ukraine} alt="Ukraine" width={400} height={400} />
            <TotalContainer className="SmallFontStyle">
              Wer als erstes vor dem Ehegelübde auf ein besticktes Tuch tritt,
              derjenige/diejenige…?
              <ChoiceContainer>
                <Choice>A) hat das Sagen</Choice>{" "}
                <Choice>B) wird mehr Geld verdienen</Choice>
                <Choice>C) darf das nächste Urlaubsziel bestimmen</Choice>
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
                A) hat das Sagen 🎉
              </p>
            </TotalContainer>
          </Ukraine>
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

const Ukraine = styled.div`
  margin-top: 2rem;
`;
