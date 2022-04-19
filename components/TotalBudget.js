import styled from "styled-components";
import { Button } from "../components/InputFormHome";

export default function TotalBudget() {
  return (
    <>
      <form>
        <Fieldset>
          <FlexContainerA>
            <div className="MediumFontStyle">Gesamtbudget</div>
            <DivBudget
            // className="SmallFontStyle"
            // type="text"
            // id="totalBudget"
            // name="totalBudget"
            />
          </FlexContainerA>
          <FlexContainerB>
            <div className="MediumFontStyle">Ausgegeben</div>
            <DivBudget
            // className="SmallFontStyle"
            // type="text"
            // id="spent"
            // name="spent"
            />
          </FlexContainerB>
          <FlexContainerB>
            <div className="MediumFontStyle">Verbleibend</div>
            <DivBudget
            // className="SmallFontStyle"
            // type="text"
            // id="remain"
            // name="remain"
            />
          </FlexContainerB>
        </Fieldset>
      </form>
    </>
  );
}

const Fieldset = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin: auto;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 1.3rem;
  box-shadow: 0 0 1rem #6c4a4a;
  width: 95%;
`;

const DivBudget = styled.div`
  background-color: #f9e4d4;
  height: 2.5rem;
  width: 55%;
  border: none;
  border-radius: 1rem;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5rem 0.5rem 0.5rem #ccb29e;
`;

// const Input = styled.input`
//   background-color: #f9e4d4;
//   height: 2.5rem;
//   width: 55%;
//   border: none;
//   border-radius: 1rem;
//   text-align: center;
//   margin: auto;
//   box-shadow: inset 0.5rem 0.5rem 0.5rem #ccb29e;
// `;

const FlexContainerA = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const FlexContainerB = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
`;
