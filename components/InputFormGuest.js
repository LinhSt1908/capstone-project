import styled from "styled-components";

export default function AddGuest() {
  return (
    <>
      <form>
        <Fieldset>
          <label className="MediumFontStyle" htmlFor="contactData">
            Kontaktdaten
          </label>
          <Input
            className="SmallFontStyle"
            type="text"
            id="firstName"
            name="firstName"
            required
            placeholder="Vorname"
          />
          <Input
            className="SmallFontStyle"
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder="Nachname"
          />
          <Input
            className="SmallFontStyle"
            type="text"
            id="address"
            name="address"
            required
            placeholder="Anschrift"
          />
          <p className="MediumFontStyle">Begleitpersonen</p>
          <StyledDiv className="SmallFontStyle">Weiterer Gast</StyledDiv>
          <Input
            className="SmallFontStyle"
            type="text"
            id="companionName"
            name="companionName"
            placeholder="Name der Begleitperson"
          />
          <StyledDiv className="SmallFontStyle">Kinder</StyledDiv>
          <label className="MediumFontStyle" htmlFor="group">
            Gruppe
          </label>
          <Input
            className="SmallFontStyle"
            type="text"
            id="group"
            name="group"
            placeholder="z.B. Freunde der Braut"
            required
          />
          <label className="MediumFontStyle" htmlFor="notes">
            Anmerkungen
          </label>
          <InputNotes
            className="SmallFontStyle"
            type="text"
            id="notes"
            name="notes"
            placeholder="Habt ihr Allergien, Unverträglichkeiten etc.?"
          />
        </Fieldset>
        <Button type="submit" className="MediumFontStyle">
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
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  background-color: #f9e4d4;
  padding: 0.5rem;
  width: 80%;
  border: none;
  border-radius: 1rem;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5rem 0.5rem 0.5rem #ccb29e;
`;

const InputNotes = styled.input`
  background-color: #f9e4d4;
  padding: 2em;
  width: 80%;
  border: none;
  border-radius: 1em;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5em 0.5em 0.5em #ccb29e;
`;

const Button = styled.button`
  background-color: #f9e4d4;
  border-radius: 1em;
  border-color: #6c4a4a;
  padding: 0.5em;
  width: 30%;
  border: 1px solid;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 5rem;
  box-shadow: 5px 5px 5px #ccb29e;
  cursor: pointer;
`;

const StyledDiv = styled.div`
  background-color: #f9e4d4;
  padding: 0.5em;
  width: 80%;
  border: none;
  border-radius: 1em;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5em 0.5em 0.5em #ccb29e;
  gap: 1rem;
`;
