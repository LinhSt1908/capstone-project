import styled from "styled-components";

export const ToDoInput = ({ register, index, toDoRemove }) => {
  return (
    <>
      <label
        className="MediumFontStyle"
        htmlFor={`toDoArray.${index}.newToDoItem`}
      >
        To Do {`${index + 1}`}
      </label>
      <InputContainer>
        <Input
          className="SmallFontStyle"
          type="text"
          maxLength={50}
          {...register(`toDoArray.${index}.newToDoItem`)}
        />
        <MinusButton type="button" onClick={() => toDoRemove(index)}>
          -
        </MinusButton>
      </InputContainer>
    </>
  );
};

const Input = styled.input`
  background-color: #f9e4d4;
  padding: 0.5em;
  width: 80%;
  border: none;
  border-radius: 1em;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5em 0.5em 0.5em #ccb29e;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MinusButton = styled.button`
  background: #ff928b;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 0px 0px 5px #ff928b;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;
