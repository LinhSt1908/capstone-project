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
            id="contactData"
            name="contactData"
            required
          />
        </Fieldset>
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
  margin-bottom: 6em;
`;

const Input = styled.input`
  background-color: #f9e4d4;
  padding: 0.5em;
  width: 80%;
  margin-bottom: 5em;
  border: none;
  border-radius: 1em;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5em 0.5em 0.5em #ccb29e;
`;
