import styled from "styled-components";
import { useFieldArray, useForm } from "react-hook-form";
import { ToDoInput } from "./ToDoInput";
import { ToDoListItem } from "./ToDoListItem";

export default function InputFieldHome({ addNewToDos, toDos }) {
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
    console.log(data);
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
      <form onSubmit={handleSubmit(onToDoSubmit)}>
        {/* StyledButton hat einen onCLick der sagt: showInputs = true*/}
        <StyledButton onClick={() => toDoAppend({ newToDoItem: "" })}>
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
        <ButtonContainer>
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

const Button = styled.button`
  background-color: #f9e4d4;
  border-radius: 1rem;
  border-color: #6c4a4a;
  padding: 0.5rem;
  width: 38%;
  border: 1px solid;
  margin: auto;
  margin-top: 1.5rem;
  box-shadow: 5px 5px 5px #ccb29e;
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

const StyledButton = styled.button`
  background: rgb(245, 180, 36);
  background: linear-gradient(
    0deg,
    rgba(245, 180, 36, 1) 0%,
    rgba(255, 208, 56, 1) 100%
  );
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 0px 0px 5px #ffd038;
  color: white;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
  &:active {
    width: 2.5rem;
    height: 2.5rem;
  }
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
