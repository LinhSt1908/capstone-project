import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { Line } from "../pages/index";
import Image from "next/image";
import { useState } from "react";
import mexico from "../public/icons/mexico.jpeg";
import { CountryDiv } from "./africa";
import { TotalContainer } from "./africa";
import { Choice } from "./africa";
import { Button } from "./africa";
import { ChoiceContainer } from "./africa";

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
            <Image src={mexico} alt="Mexico" width={280} height={400} />
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
                A)! 🎉
              </p>
            </TotalContainer>
          </Mexico>
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
