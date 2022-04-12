import styled from "styled-components";
import { useFieldArray, useForm } from "react-hook-form";
import AddKids from "./AddKids";
import { AddGuestInput } from "./AddGuestInput";
import { Button } from "../components/InputFormHome";
import { Input } from "../components/InputFormHome";

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
          <InputTextArea
            className="SmallFontStyle"
            type="text"
            id="address"
            name="address"
            required
            rows={3}
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
          <InputTextArea
            className="SmallFontStyle"
            type="text"
            id="notes"
            name="notes"
            rows={3}
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
  gap: 0.7rem;
  margin: auto;
  margin-bottom: 5rem;
  padding: 1.5rem;
  box-shadow: 0 0 1rem #6c4a4a;
  width: 95%;
`;

const InputTextArea = styled.textarea`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: #f9e4d4;
  width: 100%;
  height: 78px;
  padding-top: 32px;
  border: none;
  border-radius: 1em;
  box-shadow: inset 0.5em 0.5em 0.5em #ccb29e;
`;

const AddButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0.5rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ceab93;
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
    width: 1.7rem;
    height: 1.7rem;
  }
`;
