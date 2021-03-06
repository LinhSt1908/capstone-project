import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Input } from "../components/InputFormHome";

export default function Expenses({ addNewExpense, showExpense, toggle }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    addNewExpense(data);
    reset();
    toggle();
  }
  return (
    <>
      <form
        // autoComplete="off"
        style={{
          display: showExpense ? "block" : "none",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Fieldset>
          <label className="MediumFontStyle" htmlFor="Amount">
            <InputAmount
              className="SmallFontStyle"
              type="text"
              id="amount"
              name="amount"
              placeholder="0,00€"
              {...register("amount")}
            />
            <Line></Line>
          </label>
          <label className="MediumFontStyle" htmlFor="Description">
            Beschreibung
            <Input
              className="SmallFontStyle"
              type="text"
              id="description"
              name="description"
              {...register("description")}
            />
          </label>
          <label className="MediumFontStyle" htmlFor="Category">
            Kategorie
            <Input
              className="SmallFontStyle"
              type="text"
              id="category"
              name="category"
              placeholder="z.B. Floristik, Bekleidung etc."
              {...register("category")}
            />
          </label>
          <label className="MediumFontStyle" htmlFor="Notes">
            Notizen
            <InputNotes
              className="SmallFontStyle"
              type="text"
              id="notes"
              name="notes"
              rows={3}
            />
          </label>
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

const InputAmount = styled.input`
  height: 2.5rem;
  width: 100%;
  text-align: center;
  margin: auto;
  border: none;
`;

const Line = styled.p`
  color: #6c4a4a;
  border-bottom: 1px solid;
  width: 80%;
  margin: auto;
  margin-bottom: 1.5rem;
`;

const InputNotes = styled.textarea`
  background-color: #f9e4d4;
  width: 100%;
  border: none;
  border-radius: 1em;
  text-align: center;
  align-content: center;
  box-shadow: inset 0.5em 0.5em 0.5em #ccb29e;
`;

const Button = styled.button`
  background-color: #f9e4d4;
  border-radius: 1rem;
  border-color: #6c4a4a;
  padding: 0.5rem;
  width: 50%;
  border: 1px solid;
  margin: auto;
  margin-top: 0.5rem;
  box-shadow: 0.3rem 0.3rem 0.3rem #ccb29e;
  cursor: pointer;
  &:active {
    width: 45%;
    padding: 0.2rem;
  }
`;
