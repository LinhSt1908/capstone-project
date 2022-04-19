import styled from "styled-components";
import { MinusButton } from "../components/ToDoInput";

export const AddGuestInput = ({ register, index, addGuestRemove }) => {
  return (
    <>
      <Fieldset>
        <label
          className="MediumFontStyle"
          htmlFor={`addGuestArray.${index}.newAddGuestItem`}
        ></label>
        <InputContainer>
          <Input
            className="SmallFontStyle"
            type="text"
            id="companion"
            name="companion"
            {...register(`addGuestArray.${index}.newAddGuestItem`)}
          />
          <MinusButton type="button" onClick={() => addGuestRemove(index)}>
            -
          </MinusButton>
        </InputContainer>
      </Fieldset>
    </>
  );
};

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  border: none;
`;

const Input = styled.input`
  background-color: #f9e4d4;
  height: 2.5rem;
  width: 75%;
  border: none;
  border-radius: 1rem;
  text-align: center;
  margin-left: 0;
  display: flex;
  box-shadow: inset 0.5rem 0.5rem 0.5rem #ccb29e;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
