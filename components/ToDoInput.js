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
  padding: 0.5rem;
  width: 80%;
  border: none;
  border-radius: 1rem;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5rem 0.5rem 0.5rem #ccb29e;
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
  box-shadow: 0 0 0 0.3rem #ff928b;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:active {
    width: 2rem;
    height: 2rem;
  }
`;
