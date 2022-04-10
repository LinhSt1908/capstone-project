import styled from "styled-components";

export default function TotalBudget() {
  return (
    <>
      <form>
        <Fieldset>
          <FlexContainer>
            <label className="MediumFontStyle" htmlFor="totalBudget">
              Gesamtbudget
            </label>
            <Input
              className="SmallFontStyle"
              type="text"
              id="totalBudget"
              name="totalBudget"
            />
          </FlexContainer>
          <FlexContainerB>
            <label className="MediumFontStyle" htmlFor="spent">
              Ausgegeben
            </label>
            <Input
              className="SmallFontStyle"
              type="text"
              id="spent"
              name="spent"
            />
          </FlexContainerB>
          <FlexContainerB>
            <label className="MediumFontStyle" htmlFor="remain">
              Verbleibend
            </label>
            <Input
              className="SmallFontStyle"
              type="text"
              id="remain"
              name="remain"
            />
          </FlexContainerB>
          <Button type="submit" className="MediumFontStyle">
            Speichern
          </Button>
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
  margin-top: 3rem;
  padding: 1.3rem;
  box-shadow: 0 0 1rem #6c4a4a;
  width: 95%;
`;

const Input = styled.input`
  background-color: #f9e4d4;
  height: 2.5rem;
  width: 55%;
  border: none;
  border-radius: 1rem;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5rem 0.5rem 0.5rem #ccb29e;
`;

const Button = styled.button`
  background-color: #f9e4d4;
  border-radius: 1rem;
  border-color: #6c4a4a;
  padding: 0.5rem;
  width: 50%;
  border: 1px solid;
  margin: auto;
  margin-top: 1rem;
  box-shadow: 0.3rem 0.3rem 0.3rem #ccb29e;
  cursor: pointer;
  &:active {
    width: 45%;
    padding: 0.2rem;
  }
`;

const FlexContainer = styled.div`
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
