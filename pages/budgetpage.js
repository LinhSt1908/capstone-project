import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import PlusButton from "../components/Buttons/PlusButton";
import TotalBudget from "../components/TotalBudget";
import Expenses from "../components/Expenses";
import { Line } from "../pages/index";
import { useState } from "react";
import deleteIcon from "../public/icons/deleteIcon.svg";
import editIcon2 from "../public/icons/editIcon2.svg";
import Image from "next/image";

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
          {newExpense && (
            <BudgetContainer>
              <FirstSecondContainer>
                <FirstDiv>
                  <p className="MediumFontStyle2">{newExpense.description}</p>
                  <p className="SmallFontStyle">{newExpense.category}</p>
                </FirstDiv>
                <SecondDiv>
                  {newExpense && (
                    <p className="MediumFontStyle2">{newExpense.amount}</p>
                  )}
                </SecondDiv>
              </FirstSecondContainer>
              <EditDeleteDiv>
                <Image src={editIcon2} alt="Edit" width={25} height={25} />
                <Image src={deleteIcon} alt="Delete" width={25} height={25} />
              </EditDeleteDiv>
            </BudgetContainer>
          )}

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

const BudgetContainer = styled.div`
  width: 95%;
  background-color: #efdad7;
  border-radius: 1rem;
  border: none;
  margin: 1rem auto 0 auto;
  padding: 0.5rem;
`;

const FirstSecondContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const FirstDiv = styled.div`
  width: 100%;
`;

const SecondDiv = styled.div`
  width: 100%;
`;

const EditDeleteDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
`;
