import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import PlusButton from "../components/Buttons/PlusButton";
import TotalBudget from "../components/TotalBudget";
import Expenses from "../components/Expenses";

export default function BudgetPage() {
  return (
    <>
      <Header />
      <MainWrapper>
        <TextWrapperStyle>
          <BigFontStyle className="BigFontStyle">
            Budget & Ausgaben
          </BigFontStyle>
          <Line></Line>
          <TotalBudget />
          <MediumFontStyle className="MediumFontStyle2">
            Neue Ausgabe:
          </MediumFontStyle>
          <PlusButton />
          <Expenses />
          {/* toggle={toggle}  */}
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

const MediumFontStyle = styled.div`
  margin-bottom: 0.5em;
`;
