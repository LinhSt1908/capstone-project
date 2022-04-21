import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { Line } from "../pages/index";
import Image from "next/image";
import { useState } from "react";
import vietnam from "../public/icons/vietnam.jpeg";
import { CountryDiv } from "./africa";
import { TotalContainer } from "./africa";
import { Choice } from "./africa";
import { Button } from "./africa";
import { ChoiceContainer } from "./africa";

export default function Asia() {
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
          <Heading className="BigFontStyle">Asien</Heading>
          <Line></Line>
          <CountryDiv className="MediumFontStyle2">Vietnam</CountryDiv>
          <Vietnam>
            <Image src={vietnam} alt="Vietnam" width={280} height={400} />
            <TotalContainer className="SmallFontStyle">
              Welches majestätische Tier spielt neben dem Drachen eine besondere
              Rolle auf der traditionellen Hochzeitskleidung?
              <ChoiceContainer>
                <Choice>A) Löwe</Choice> <Choice>B) Phönix</Choice>
                <Choice>C) Elch</Choice>
              </ChoiceContainer>
              <Button className="MediumFontStyle" onClick={toggle}>
                Antwort
              </Button>
              <p
                className="MediumFontStyle2"
                style={{
                  display: showAnswer ? "block" : "none",
                }}
                showAnswer={showAnswer}
              >
                B) Phönix 🎉
              </p>
            </TotalContainer>
          </Vietnam>
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

const Vietnam = styled.div`
  margin-top: 2rem;
`;
