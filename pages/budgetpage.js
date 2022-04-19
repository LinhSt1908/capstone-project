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
          <Heading className="BigFontStyle">Budget & Ausgaben</Heading>
          <Line></Line>

          <TotalBudget />
          <HeadingExpense className="MediumFontStyle2">
            Neue Ausgabe:
          </HeadingExpense>
          {newExpense && (
            <TotalContainer>
              <BudgetContainer>
                <div>
                  <p className="MediumFontStyle2">{newExpense.description}</p>
                  <p className="SmallFontStyle">{newExpense.category}</p>
                </div>
                <div>
                  {newExpense && (
                    <p className="MediumFontStyle2">{newExpense.amount}</p>
                  )}
                </div>
              </BudgetContainer>
              <ThinLine></ThinLine>
              <EditDeleteDiv>
                <Image src={editIcon2} alt="Edit" width={25} height={25} />
                <Image src={deleteIcon} alt="Delete" width={25} height={25} />
              </EditDeleteDiv>
            </TotalContainer>
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
  margin: 1rem auto 0 auto;
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

const EditDeleteDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  margin-top: 0.7rem;
`;
