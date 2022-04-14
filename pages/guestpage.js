import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import InputFormGuest from "../components/InputFormGuest";
import PlusButton from "../components/Buttons/PlusButton";
import { Line } from "../pages/index";
import { useState } from "react";

export default function GuestPage({ addNewGuest, newGuest }) {
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
          <GuestContainer>
            <StyledDiv>
              {newGuest ? (
                <p className="MediumFontStyle">{newGuest.name}</p>
              ) : (
                <p>{""}</p>
              )}
              {newGuest ? (
                <p className="MediumFontStyle">{newGuest.companion}</p>
              ) : (
                <p>{""}</p>
              )}
              {/* {newGuest ? (
                <p className="MediumFontStyle">{newGuest.address}</p>
              ) : (
                <p>{""}</p>
              )}
              {newGuest ? (
                <p className="MediumFontStyle">{newGuest.group}</p>
              ) : (
                <p>{""}</p>
              )} */}
            </StyledDiv>
          </GuestContainer>
          <PlusButton toggle={toggle} />
          <InputFormGuest
            addNewGuest={addNewGuest}
            showGuest={showGuest}
            toggle={toggle}
          />
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

const GuestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  border: none;
  width: 90%;
`;

const StyledDiv = styled.div`
  background-color: #efdad7;
  width: 100%;
  border: none;
  border-radius: 1rem;
  text-align: center;
  padding: 0.5rem;
  margin: auto;
`;
