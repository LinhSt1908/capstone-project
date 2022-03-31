import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function InputForm({ addNewData }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    addNewData(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset>
          <label className="SmallFontStyle" htmlFor="brideName">
            Name der Braut
          </label>
          <Input
            className="SmallFontStyle"
            type="text"
            id="brideName"
            name="brideName"
            {...register("brideName")}
          />
          <label className="SmallFontStyle" htmlFor="grooName">
            Name des Bräutigams
          </label>
          <Input
            className="SmallFontStyle"
            type="text"
            id="groomName"
            name="groomName"
            {...register("groomName")}
          />
          <label className="SmallFontStyle" htmlFor="date">
            Datum
          </label>
          <Input
            className="SmallFontStyle"
            type="date"
            id="date"
            name="date"
            {...register("date")}
          />
          <label className="SmallFontStyle" htmlFor="place">
            Ort der Hochzeit
          </label>
          <Input
            className="SmallFontStyle"
            type="text"
            id="place"
            name="place"
            {...register("place")}
          />
          <label className="SmallFontStyle" htmlFor="time">
            Zeit
          </label>
          <Input
            className="SmallFontStyle"
            type="time"
            id="time"
            name="time"
            required
            {...register("time")}
          />
        </Fieldset>
        <Button type="submit" className="SmallFontStyle" value="Speichern">
          Speichern
        </Button>
      </form>
    </>
  );
}

const Fieldset = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Input = styled.input`
  background-color: #efdad7;
  padding: 0.7em;
  width: 80%;
  margin-bottom: 1em;
  border: none;
  border-radius: 1em;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5em 0.5em 1em #cb8e86;
`;

const Button = styled.button`
  background-color: #efdad7;
  border-radius: 1em;
  border-color: #6c4a4a;
  padding: 0.5em;
  width: 40%;
  border: 1px solid;
  margin: auto;
  margin-top: 2rem;
  box-shadow: 5px 5px 5px #cb8e86;
  cursor: pointer;
`;
