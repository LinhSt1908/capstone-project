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
          <BigLineStyle className="BigFontStyle">
            Familie & Freunde
          </BigLineStyle>
          <Line></Line>
          <GuestContainer>
            <StyledDiv>
              {newGuest && (
                <div>
                  <p className="MediumFontStyle">{newGuest.name}</p>
                  <p className="MediumFontStyle">
                    {newGuest.addGuestArray[0].newAddGuestItem}
                  </p>
                </div>
              )}
            </StyledDiv>
            {/* <StatusDiv>
              <Image src={arrowRightIcon} alt="Arrow" width={25} height={25} />
            </StatusDiv> */}
          </GuestContainer>
          {/* <EditDeleteDiv>
            <Image src={editIcon2} alt="Edit" width={25} height={25} />
            <Image src={deleteIcon} alt="Delete" width={25} height={25} />
          </EditDeleteDiv> */}
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

// event. export zu budgetpage
const GuestContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #efdad7;
  border-radius: 1rem 1rem 0 0;
  border: none;
  margin: 2rem auto 0 auto;
`;

const StyledDiv = styled.div`
  width: 90%;
  border: none;
  text-align: center;
  padding: 0.5rem;
`;

// const StatusDiv = styled.div`
//   width: 90%;
// `;

// const EditDeleteDiv = styled.div`
//   width: 90%;
//   display: flex;

//   justify-content: space-evenly;
//   align-items: center;
//   background-color: #efdad7;
//   border: none;
//   border-radius: 0 0 1rem 1rem;
//   margin: 0 auto 1.5rem auto;
//   padding: 0.5rem;
// `;
