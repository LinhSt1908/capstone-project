import { useState } from "react";
import { Line } from "../pages/index";
import styled from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import InputFormGuest from "../components/InputFormGuest";
import PlusButton from "../components/Buttons/PlusButton";
import { useFieldArray, useForm } from "react-hook-form";

import { ThinLine } from "../pages/budgetpage";
import { MinusButton } from "../components/ToDoInput";

export default function GuestPage({ addNewGuest, newGuest }) {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showGuest, setShowGuest] = useState(true);
  function toggle() {
    setShowGuest(!showGuest);
  }

  return (
    <>
      <Header />
      <MainWrapper>
        <TextWrapperStyle>
          <Heading className="BigFontStyle">Familie &amp; Freunde</Heading>
          <Line></Line>

          {newGuest.map((guest, index) => (
            <ShowGuestContainer key={index}>
              <p className="MediumFontStyle2">{guest.name}</p>
              <p className="MediumFontStyle2">
                {guest?.addGuestArray[0].newAddGuestItem}
              </p>
              <p className="SmallFontStyle">{guest.group}</p>
              <ThinLine></ThinLine>
              <EditDeleteDiv>
                <EditButton type="button">
                  <svg
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="17px"
                    height="17px"
                  >
                    <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z" />
                  </svg>
                </EditButton>
                <MinusButton
                  type="button"
                  onClick={() => guestEntryRemove(index)}
                >
                  -
                </MinusButton>
              </EditDeleteDiv>
            </ShowGuestContainer>
          ))}

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

const ShowGuestContainer = styled.div`
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

export const EditButton = styled.button`
  background: rgb(245, 180, 36);
  background: linear-gradient(
    0deg,
    rgba(245, 180, 36, 1) 0%,
    rgba(255, 208, 56, 1) 100%
  );
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 0px 0px 5px #ffd038;
  color: white;
  cursor: pointer;
  &:active {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

export const EditDeleteDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  margin: 0.7rem auto 0 auto;
`;
