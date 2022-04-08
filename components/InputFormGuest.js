import styled from "styled-components";
import { useFieldArray, useForm } from "react-hook-form";
import AddKids from "./AddKids";
import { AddGuestInput } from "./AddGuestInput";
import { AddGuestListItem } from "./AddGuestListItem";

export default function AddGuest({ showGuest, setShowGuest }) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const {
    fields: addGuestFields,
    append: addGuestAppend,
    remove: addGuestRemove,
  } = useFieldArray({ control, name: "addGuestArray" });
  const watchAddGuestArray = watch("addGuestArray");

  function onSubmit(data) {
    addNewData(data);
  }

  return (
    <>
      {/* {watchToDoArray?.length > 0 ? (
        <StyledList className="SmallFontStyle">
          <AddGuestListItem toDos={watchToDoArray} />
        </StyledList>
      ) : (
        ""
      )} */}
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
          <InputAddress
            className="SmallFontStyle"
            type="text"
            id="address"
            name="address"
            required
            placeholder="Anschrift"
          />
          <p className="MediumFontStyle">Begleitpersonen</p>
          <AddButton>
            <PlusButton onClick={() => addGuestAppend({ newAddGuestItem: "" })}>
              +
            </PlusButton>
          </AddButton>
          {addGuestFields.map((item, index) => (
            <AddGuestInput
              register={register}
              watch={watch}
              index={index}
              addGuestRemove={addGuestRemove}
              key={item.id}
            />
          ))}
          <FlexContainer>
            <StyledDiv className="SmallFontStyle">Kinder</StyledDiv>
            <AddKids />
          </FlexContainer>
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
            rows={3}
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
  gap: 0.5rem;
  margin: auto;
  margin-bottom: 5rem;
  padding: 2rem;
  box-shadow: 0 0 1rem #6c4a4a;
  width: 95%;
`;

const Input = styled.input`
  background-color: #f9e4d4;
  height: 2.5rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5rem 0.5rem 0.5rem #ccb29e;
`;

const InputAddress = styled.input`
  background-color: #f9e4d4;
  height: 5rem;
  width: 100%;
  border: none;
  border-radius: 1em;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5em 0.5em 0.5em #ccb29e;
`;

const InputNotes = styled.textarea`
  background-color: #f9e4d4;
  width: 100%;
  border: none;
  border-radius: 1em;
  text-align: center;
  align-content: center;
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

const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0.5rem;
`;

const StyledDiv = styled.div`
  text-align: center;
  background-color: lightgrey;
  height: 2.5rem;
  width: 55%;
  border: none;
  border-radius: 1em;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
