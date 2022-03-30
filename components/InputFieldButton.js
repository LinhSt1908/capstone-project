import styled from "styled-components";

export default function AddButton() {
  return (
    <>
      <form action="/send-data-here" method="post">
        <Fieldset>
          <Input
            className="SmallFontStyle"
            type="text"
            id="firstInput"
            name="firstInput"
            placeholder="Name der Braut"
          />
          <Input
            className="SmallFontStyle"
            type="text"
            id="secondInput"
            name="secondInput"
            placeholder="Name des Bräutigams"
          />
          <Input
            className="SmallFontStyle"
            type="date"
            id="thirdInput"
            name="thirdInput"
          />
          <Input
            className="SmallFontStyle"
            type="text"
            id="fourthInput"
            name="fourthInput"
            placeholder="Ort der Hochzeit"
          />
          <Input
            className="SmallFontStyle"
            type="time"
            id="fifthInput"
            name="fifthInput"
            placeholder="00:00 Uhr"
          />
        </Fieldset>
        <Button className="SmallFontStyle" type="submit">
          Speichern
        </Button>
      </form>
    </>
  );
}

const Fieldset = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  background-color: #efdad7;
  padding: 0.7em;
  width: 80%;
  margin-bottom: 1em;
  border: none;
  border-radius: 1em;
  text-align: center;
  margin: auto;
  box-shadow: 5px 5px 5px #c6b5b3;
`;

const Button = styled.button`
  background-color: #efdad7;
  border-radius: 1em;
  border-color: #6c4a4a;
  padding: 0.5em;
  width: 40%;
  display: flex;
  justify-content: center;
  border: 1px solid;
  align-items: center;
  margin: auto;
  margin-top: 1rem;
  box-shadow: 5px 5px 5px #c6b5b3;
`;
