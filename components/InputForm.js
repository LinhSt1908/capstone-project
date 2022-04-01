import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function AddButton({ addNewData }) {
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
            className="MediumFontStyleKlein"
            type="text"
            id="brideName"
            name="brideName"
            required
            {...register("brideName")}
          />
          <label className="SmallFontStyle" htmlFor="grooName">
            Name des Bräutigams
          </label>
          <Input
            className="MediumFontStyleKlein"
            type="text"
            id="groomName"
            name="groomName"
            required
            {...register("groomName")}
          />
          <label className="SmallFontStyle" htmlFor="place">
            Ort der Hochzeit
          </label>
          <Input
            className="MediumFontStyleKlein"
            type="text"
            id="place"
            name="place"
            required
            {...register("place")}
          />
          <label className="SmallFontStyle" htmlFor="date">
            Datum der Hochzeit
          </label>
          <Input
            className="MediumFontStyleKlein"
            type="date"
            id="date"
            name="date"
            required
            {...register("date")}
          />
          <label className="SmallFontStyle" htmlFor="time">
            Beginn der Zeremonie
          </label>
          <Input
            className="MediumFontStyleKlein"
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
  background-color: #f9e4d4;
  padding: 0.5em;
  width: 80%;
  margin-bottom: 1em;
  border: none;
  border-radius: 1em;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5em 0.5em 0.5em #ccb29e;

  textarea:focus {
    outline: none
    border: 1px solid red;
    box-shadow: 0 0 10px #719ECE;
  }
`;

const Button = styled.button`
  background-color: #f9e4d4;
  border-radius: 1em;
  border-color: #6c4a4a;
  padding: 0.5em;
  width: 40%;
  border: 1px solid;
  margin: auto;
  margin-top: 2rem;
  box-shadow: 5px 5px 5px #ccb29e;
  &:active {
    padding: 0.3em;
    width: 35%;
  }
`;
