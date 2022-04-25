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
import mexico from "../public/pictures/mexico.jpeg";
import hawaii from "../public/pictures/hawaii.jpeg";

export default function America() {
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
          <Heading className="BigFontStyle">Amerika</Heading>
          <Line></Line>
          <CountryDiv className="MediumFontStyle2">Mexiko</CountryDiv>
          <Mexico>
            <Image src={mexico} alt="Mexico" width={350} height={470} />
            <TotalContainer className="SmallFontStyle">
              Was wird als Symbol für Unterstützung und Verantwortung in der Ehe
              betrachtet?
              <ChoiceContainer>
                <Choice>A) Lasso</Choice> <Choice>B) Armbänder</Choice>
                <Choice>C) Schal</Choice>
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
                A) Lasso 🎉
              </p>
            </TotalContainer>
          </Mexico>

          <CountryDiv className="MediumFontStyle2">Hawaii</CountryDiv>
          <Hawaii>
            <Image src={hawaii} alt="Hawaii" width={350} height={470} />
            <TotalContainer className="SmallFontStyle">
              Mit was befüllt das Brautpaar eine Glasvase während der Trauung?
              <ChoiceContainer>
                <Choice>A) Sand</Choice> <Choice>B) Steine</Choice>
                <Choice>C) Blumen</Choice>
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
                A) Sand 🎉
              </p>
            </TotalContainer>
          </Hawaii>
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

const Mexico = styled.div`
  margin-top: 2rem;
`;

const Hawaii = styled.div`
  margin-top: 2rem;
`;
