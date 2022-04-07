import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function AddGuest({ showGuest, setShowGuest }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    addNewData(data);
  }

  return (
    <>
      <form
        style={{
          display: showGuest ? "block" : "none",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
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
          <StyledDiv className="SmallFontStyle">
            Weiterer Gast
            <GuestDiv>
              <PlusButton>+</PlusButton>
            </GuestDiv>
          </StyledDiv>
          <Input
            className="SmallFontStyle"
            type="text"
            id="companionName"
            name="companionName"
            placeholder="Name der Begleitperson"
          />
          <StyledDiv className="SmallFontStyle">
            Kinder<MinusButton>-</MinusButton>
            <PlusButton>+</PlusButton>
          </StyledDiv>
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
            placeholder="Allergien
            oder Unverträglichkeiten?"
          />
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
  text-align: center;
  gap: 0.5rem;
  margin: auto;
  margin-bottom: 5rem;
  padding: 1.5rem;
  box-shadow: 0 0 1rem #6c4a4a;
  width: 85%;
`;

const Input = styled.input`
  background-color: #f9e4d4;
  padding: 0.5rem;
  width: 90%;
  border: none;
  border-radius: 1rem;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5rem 0.5rem 0.5rem #ccb29e;
`;

const InputNotes = styled.input`
  background-color: #f9e4d4;
  padding: 2em;
  width: 90%;
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
  width: 47%;
  border: 1px solid;
  margin: auto;
  margin-top: 2rem;
  box-shadow: 5px 5px 5px #ccb29e;
  cursor: pointer;
  &:active {
    width: 42%;
    padding: 0.2rem;
  }
`;

const StyledDiv = styled.div`
  background-color: #f9e4d4;
  padding: 0.5em;
  width: 90%;
  border: none;
  border-radius: 1em;
  margin: auto;
  box-shadow: inset 0.5em 0.5em 0.5em #ccb29e;
  gap: 1rem;
`;

const GuestDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const PlusButton = styled.button`
  background: rgb(245, 180, 36);
  background: linear-gradient(
    0deg,
    rgba(245, 180, 36, 1) 0%,
    rgba(255, 208, 56, 1) 100%
  );
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 0 0.3rem #ffd038;
  color: white;
  font-size: 1rem;
  &:active {
    width: 2rem;
    height: 2rem;
  }
`;

const MinusButton = styled.button`
  background: rgb(245, 180, 36);
  background: linear-gradient(
    0deg,
    rgba(245, 180, 36, 1) 0%,
    rgba(255, 208, 56, 1) 100%
  );
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 0 0.3rem #ffd038;
  color: white;
  font-size: 1rem;
  &:active {
    width: 2rem;
    height: 2rem;
  }
`;
