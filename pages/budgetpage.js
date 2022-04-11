import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import PlusButton from "../components/Buttons/PlusButton";
import TotalBudget from "../components/TotalBudget";
import Expenses from "../components/Expenses";
import { Line } from "../pages/index";

export default function BudgetPage() {
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

const BigLineStyle = styled.div`
  margin-top: 3em;
`;

const MediumLineStyle = styled.div`
  margin-bottom: 0.5em;
`;
