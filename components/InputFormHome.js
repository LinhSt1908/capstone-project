import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function AddFacts({ addNewData, showMe, setShowMe }) {
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
      <form
        style={{
          display: showMe ? "block" : "none",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Fieldset>
          <label className="MediumFontStyle" htmlFor="brideName">
            Name der Braut
          </label>
          <Input
            className="SmallFontStyle"
            type="text"
            id="brideName"
            name="brideName"
            required
            {...register("brideName")}
          />
          <label className="MediumFontStyle" htmlFor="grooName">
            Name des Bräutigams
          </label>
          <Input
            className="SmallFontStyle"
            type="text"
            id="groomName"
            name="groomName"
            required
            {...register("groomName")}
          />
          <label className="MediumFontStyle" htmlFor="place">
            Ort der Hochzeit
          </label>
          <Input
            className="SmallFontStyle"
            type="text"
            id="place"
            name="place"
            required
            {...register("place")}
          />
          <label className="MediumFontStyle" htmlFor="date">
            Datum der Hochzeit
          </label>
          <Input
            className="SmallFontStyle"
            type="date"
            id="date"
            name="date"
            required
            {...register("date")}
          />
          <label className="MediumFontStyle" htmlFor="time">
            Beginn der Zeremonie
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
        <Button type="submit" className="MediumFontStyle" value="Speichern">
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
  margin-bottom: 4em;
  border: none;
  border-radius: 1em;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5em 0.5em 0.5em #ccb29e;
`;

const Button = styled.button`
  background-color: #f9e4d4;
  border-radius: 1em;
  border-color: #6c4a4a;
  padding: 0.5em;
  width: 30%;
  border: 1px solid;
  margin: auto;
  margin-top: 2rem;
  box-shadow: 5px 5px 5px #ccb29e;
`;
