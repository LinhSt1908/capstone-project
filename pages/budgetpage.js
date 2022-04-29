import { useState } from "react";
import { Line } from "../pages/index";
import styled from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Expenses from "../components/Expenses";
import TotalBudget from "../components/TotalBudget";
import { MinusButton } from "../components/ToDoInput";
import PlusButton from "../components/Buttons/PlusButton";
import { EditButton } from "../pages/guestpage";
import { EditDeleteDiv } from "../pages/guestpage";

export default function BudgetPage({ addNewExpense, newExpense }) {
  const [showExpense, setShowExpense] = useState(true);
  function toggle() {
    setShowExpense(!showExpense);
  }
  return (
    <>
      <Header />
      <MainWrapper>
        <TextWrapperStyle>
          <Heading className="BigFontStyle">Budget & Ausgaben</Heading>
          <Line></Line>

          <TotalBudget />
          <HeadingExpense className="MediumFontStyle2">
            Neue Ausgabe:
          </HeadingExpense>

          {newExpense.map((newExpense, index) => (
            <TotalContainer key={index}>
              <BudgetContainer>
                <div>
                  <p className="MediumFontStyle2">{newExpense.description}</p>
                  <p className="SmallFontStyle">{newExpense.category}</p>
                </div>
                <div>
                  <p className="MediumFontStyle2">{newExpense.amount}</p>
                </div>
              </BudgetContainer>
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
                <MinusButton type="button">-</MinusButton>
              </EditDeleteDiv>
            </TotalContainer>
          ))}

          <PlusButton toggle={toggle} />
          <Expenses
            showExpense={showExpense}
            addNewExpense={addNewExpense}
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
  margin-bottom: 2.5rem;
`;

const Heading = styled.div`
  margin-top: 3em;
`;

const HeadingExpense = styled.h1`
  margin-bottom: 0.5 em;
`;

const TotalContainer = styled.div`
  width: 95%;
  background-color: #efdad7;
  border-radius: 1rem;
  border: none;
  margin: 1rem auto 1rem auto;
  padding: 0.5rem;
`;

const BudgetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const ThinLine = styled.p`
  color: #6c4a4a;
  border-bottom: 1px solid;
  width: 80%;
  padding-top: 0.7rem;
  margin: auto;
`;
