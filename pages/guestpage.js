import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import InputFormGuest from "../components/InputFormGuest";
import AddKids from "../components/AddKids";
import PlusButton from "../components/Buttons/PlusButton";
import { useState } from "react";

export default function GuestPage() {
  const [showGuest, setShowGuest] = useState(true);
  function toggle() {
    setShowGuest(!showGuest);
  }

  return (
    <>
      <Header />
      <MainWrapper>
        <TextWrapperStyle>
          <BigFontStyle className="BigFontStyle">
            Familie & Freunde
          </BigFontStyle>
          <Line></Line>
          <PlusButton toggle={toggle} />
          <InputFormGuest showGuest={showGuest} setShowGuest={setShowGuest} />
          <AddKids />
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
`;

const BigFontStyle = styled.div`
  margin-top: 3em;
`;

const Line = styled.p`
  color: #f5b424;
  border-bottom: 2px solid;
  width: 80%;
  margin: auto;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
`;
