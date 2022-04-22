import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { Line } from "../pages/index";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import ethiopia from "../public/icons/ethiopia.png";

export default function Africa({ toggle }) {
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
          <Heading className="BigFontStyle">Afrika</Heading>
          <Line></Line>
          <CountryDiv className="MediumFontStyle2">Äthiopien</CountryDiv>
          <Ethiopia>
            <Image src={ethiopia} alt="Ethiopia" width={280} height={400} />
            <TotalContainer className="SmallFontStyle">
              Welches Tier muss ein Bräutigam besitzen um heiraten zu können?
              <ChoiceContainer>
                <Choice>A) Esel</Choice> <Choice>B) Affe</Choice>
                <Choice>C) Schlange</Choice>
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
                A) Esel 🎉
              </p>
            </TotalContainer>
          </Ethiopia>
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

export const CountryDiv = styled.div`
  background-color: #f9e4d4;
  border-radius: 1rem;
  border-color: #6c4a4a;
  padding: 0.5rem;
  width: 50%;
  border: 1px solid;
  margin: 2rem auto 2rem auto;
  box-shadow: 0.3rem 0.3rem 0.3rem #ccb29e;
`;

const Ethiopia = styled.div`
  margin-top: 2rem;
`;

export const TotalContainer = styled.div`
  width: 95%;
  background-color: #efdad7;
  border-radius: 1rem;
  border: none;
  margin: 1rem auto 4rem auto;
  padding: 1rem;
  box-shadow: 0.3rem 0.3rem 0.3rem #cac2c1;
`;

export const ChoiceContainer = styled.div`
  margin-top: 0.5rem;
`;

export const Choice = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #efdad7;
  border-radius: 1rem;
  border-color: #6c4a4a;
  padding: 0.3rem;
  width: 40%;
  border: 1px solid #6c4a4a;
  margin: 0.5rem auto 0.5rem auto;
  box-shadow: 0.3rem 0.3rem 0.3rem #ccb29e;
  cursor: pointer;
  &:active {
    width: 45%;
    padding: 0.2rem;
  }
`;

const Answer = styled.p`
  margin: auto;
`;
