import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import InputFormGuest from "../components/InputFormGuest";
import PlusButton from "../components/Buttons/PlusButton";
import arrowRightIcon from "../public/icons/arrowRightIcon.svg";
import deleteIcon from "../public/icons/deleteIcon.svg";
import editIcon2 from "../public/icons/editIcon2.svg";
import { Line } from "../pages/index";
import { useState } from "react";
import Image from "next/image";

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
          <Heading className="BigFontStyle">Familie & Freunde</Heading>
          <Line></Line>
          <StyledDiv>
            {newGuest && (
              <GuestContainer>
                <p className="MediumFontStyle2">{newGuest.name}</p>
                <p className="MediumFontStyle2">
                  {newGuest.addGuestArray[0].newAddGuestItem}
                </p>
                <EditDeleteDiv>
                  <Image src={editIcon2} alt="Edit" width={25} height={25} />
                  <Image src={deleteIcon} alt="Delete" width={25} height={25} />
                </EditDeleteDiv>
              </GuestContainer>
            )}
            {/* <StatusDiv>
              <Image
                src={arrowRightIcon}
                alt="Arrow"
                width={25}
                height={25}
              />
            </StatusDiv> */}
          </StyledDiv>
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

const Heading = styled.div`
  margin-top: 3em;
`;

// event. export zu budgetpage
const GuestContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #efdad7;
  border-radius: 1rem;
  border: none;
  margin: 1rem auto 1rem auto;
  padding: 0.5rem;
`;

const StyledDiv = styled.div`
  width: 100%;
  border: none;
  text-align: center;
`;

// const StatusDiv = styled.div`
//   width: 90%;
// `;

const EditDeleteDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
`;
