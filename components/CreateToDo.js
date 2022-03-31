import styled from "styled-components";

export default function InputFieldHome() {
  return (
    <>
      <form>
        <Fieldset>
          <label className="SmallFontStyle" htmlFor="firstPrio">
            Erste Priorität
          </label>
          <Input
            className="SmallFontStyle"
            type="text"
            id="first"
            name="first"
          />
          <label className="SmallFontStyle" htmlFor="secondPrio">
            Zweite Priorität
          </label>
          <Input
            className="SmallFontStyle"
            type="text"
            id="second"
            name="second"
          />
          <label className="SmallFontStyle" htmlFor="thirdPrio">
            Dritte Priorität
          </label>
          <Input
            className="SmallFontStyle"
            type="text"
            id="third"
            name="third"
          />
        </Fieldset>
      </form>
    </>
  );
}

const Fieldset = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
  margin-bottom: 6em;
`;

const Input = styled.input`
  background-color: #efdad7;
  padding: 0.7em;
  width: 80%;
  border: none;
  border-radius: 1em;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5em 0.5em 1em #cb8e86;
`;
