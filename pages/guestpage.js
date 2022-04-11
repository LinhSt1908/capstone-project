import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import InputFormGuest from "../components/InputFormGuest";
import PlusButton from "../components/Buttons/PlusButton";
import { Line } from "../pages/index";
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
          <BigLineStyle className="BigFontStyle">
            Familie & Freunde
          </BigLineStyle>
          <Line></Line>
          <PlusButton toggle={toggle} />
          <InputFormGuest showGuest={showGuest} setShowGuest={setShowGuest} />
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

const BigLineStyle = styled.div`
  margin-top: 3em;
`;
