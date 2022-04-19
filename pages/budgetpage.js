import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import PlusButton from "../components/Buttons/PlusButton";
import TotalBudget from "../components/TotalBudget";
import Expenses from "../components/Expenses";
import { Line } from "../pages/index";
import { useState } from "react";

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
          <BigLineStyle className="BigFontStyle">
            Budget & Ausgaben
          </BigLineStyle>
          <Line></Line>

          <TotalBudget />
          <MediumLineStyle className="MediumFontStyle2">
            Neue Ausgabe:
          </MediumLineStyle>
          <GuestContainer>
            <FirstContainer>
              {newExpense ? (
                <p className="MediumFontStyle">{newExpense.description}</p>
              ) : (
                <p>{""}</p>
              )}
              {newExpense ? (
                <p className="SmallFontStyle">{newExpense.category}</p>
              ) : (
                <p>{""}</p>
              )}
            </FirstContainer>
            <SecondContainer>
              {newExpense ? (
                <p className="MediumFontStyle">{newExpense.amount}</p>
              ) : (
                <p>{""}</p>
              )}
            </SecondContainer>
          </GuestContainer>

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

const BigLineStyle = styled.div`
  margin-top: 3em;
`;

const MediumLineStyle = styled.div`
  margin-bottom: 0.5 em;
`;

const GuestContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #efdad7;
  border-radius: 1rem;
  border: none;
  margin: 2rem auto 1.5rem auto;
`;

const FirstContainer = styled.div`
  width: 90%;
  border: none;
  text-align: center;
  padding: 0.5rem;
`;

const SecondContainer = styled.div`
  width: 90%;
`;
