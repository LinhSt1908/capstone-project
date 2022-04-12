import styled from "styled-components";
import { useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";
import { ToDoInput } from "./ToDoInput";
import { ToDoListItem } from "./ToDoListItem";
import { StyledButton } from "./Buttons/PlusButton";

export default function InputFieldHome({
  addNewData,
  formData,
  addNewToDos,
  toDos,
  toggle,
}) {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    fields: toDoFields,
    append: toDoAppend,
    remove: toDoRemove,
  } = useFieldArray({ control, name: "toDoArray" });

  const watchToDoArray = watch("toDoArray");

  function onToDoSubmit(data) {
    addNewToDos(data);
    toggle();
  }

  function onSubmit(data) {
    addNewToDos(data);
  }

  const [showInput, setShowInput] = useState(false);
  function toggle() {
    setShowInput(!showInput);
  }

  /* Hier muss ein State her, der showInputs verwaltet und mit dem State false anfängt*/

  return (
    <>
      {watchToDoArray?.length > 0 ? (
        <StyledList className="SmallFontStyle">
          <ToDoListItem toDos={watchToDoArray} />
        </StyledList>
      ) : (
        ""
      )}

      <p className="MediumFontStyle">Hier bearbeiten</p>
      <EditButton>
        {/* onClick={toggle} */}
        <svg
          fill="#FFFFFF"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="17px"
          height="17px"
        >
          <path d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z" />
        </svg>
      </EditButton>
      <Line></Line>
      <form onSubmit={handleSubmit(onToDoSubmit)}>
        {/* StyledButton hat einen onCLick der sagt: showInputs = true*/}
        <StyledButton
          onClick={(showInput = true) => toDoAppend({ newToDoItem: "" })}
        >
          +
        </StyledButton>

        <Fieldset>
          {toDoFields.map((item, index) => (
            <ToDoInput
              register={register}
              watch={watch}
              index={index}
              toDoRemove={toDoRemove}
              key={item.id}
            />
          ))}
        </Fieldset>

        <ButtonContainer
          style={{
            display: showInput ? "block" : "none",
          }}
          showInput={showInput}
          addNewData={addNewData}
          toggle={toggle}
        >
          {/* Button "Speichern" hat einen onCLick der sagt: showInputs = false*/}
          <Button type="submit" className="MediumFontStyle">
            Speichern
          </Button>
        </ButtonContainer>
      </form>
    </>
  );
}

const Fieldset = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
`;

const Line = styled.p`
  color: #6c4a4a;
  border-bottom: 1px solid;
  width: 80%;
  margin: auto;
  margin-bottom: 1.5rem;
`;

const EditButton = styled.button`
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
  box-shadow: 0px 0px 0px 5px #ffd038;
  color: white;
  margin: 0.5rem 0 2rem 0;
  cursor: pointer;
  &:active {
    width: 1.7rem;
    height: 1.7rem;
  }
`;

const Button = styled.button`
  background-color: #f9e4d4;
  border-radius: 1rem;
  border-color: #6c4a4a;
  padding: 0.5rem;
  width: 38%;
  border: 1px solid;
  margin: auto;
  margin-top: 1.5rem;
  box-shadow: 0.3rem 0.3rem 0.3rem #ccb29e;
  cursor: pointer;
  &:active {
    width: 33%;
    padding: 0.2rem;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  z-index: +1;

  box-shadow: 0 0 1em #6c4a4a;
  margin: 3rem auto 2rem auto;
  padding: 1.5rem;
  width: 85%;
  list-style-type: none;
  > li:before {
    content: "🪷";
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;
