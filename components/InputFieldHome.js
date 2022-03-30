import styled from "styled-components";

export default function InputFieldHome() {
  return (
    <>
      <form action="/send-data-here" method="post">
        <Fieldset>
          <Input
            className="SmallFontStyle"
            type="text"
            id="first"
            name="first"
            placeholder="Erste Priorität"
          />
          <Input
            className="SmallFontStyle"
            type="text"
            id="second"
            name="second"
            placeholder="Zweite Priorität"
          />
          <Input
            className="SmallFontStyle"
            type="text"
            id="third"
            name="third"
            placeholder="Dritte Priorität"
          />
          <Input
            className="SmallFontStyle"
            type="text"
            id="fourth"
            name="fourth"
          />
          <Input
            className="SmallFontStyle"
            type="text"
            id="fifth"
            name="fifth"
          />
          <Input
            className="SmallFontStyle"
            type="text"
            id="sixth"
            name="sixth"
          />
          <Input
            className="SmallFontStyle"
            type="text"
            id="seventh"
            name="seventh"
          />
          <Input
            className="SmallFontStyle"
            type="text"
            id="eighth"
            name="eighth"
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
  gap: 1rem;
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
  box-shadow: 5px 5px 5px #c6b5b3;
`;
