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

  return (
    <>
      {watchToDoArray !== undefined ? (
        <StyledList className="SmallFontStyle">
          <ToDoListItem toDos={watchToDoArray} />
        </StyledList>
      ) : (
        <p>Füge ein neues To Do hinzu</p>
      )}
      <form onSubmit={handleSubmit(onToDoSubmit)}>
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
          <StyledButton onClick={() => toDoAppend({ newToDoItem: "" })}>
            +
          </StyledButton>
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
  border-radius: 1em;
  border-color: #6c4a4a;
  padding: 0.5em;
  width: 28%;
  border: 1px solid;
  margin: auto;
  margin-top: 1.5rem;
  box-shadow: 5px 5px 5px #ccb29e;
  cursor: pointer;
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
  cursor: pointer;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  z-index: +1;
  text-align: left;
  box-shadow: 0 0 1em #6c4a4a;
  margin: 3.5rem auto 3rem auto;
  padding: 1.5rem;
  width: 85%;
  list-style-type: none;
  > li:before {
    content: "🪷";
    font-size: 1.5rem;
    margin-right: 1rem;
  }
`;
