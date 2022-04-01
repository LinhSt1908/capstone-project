import styled from "styled-components";
import Image from "next/image";
import plusIcon from "../public/icons/plusIcon.svg";
// import YellowButton from "./Buttons/YellowButton";

export default function InputFieldHome() {
  return (
    <>
      <form>
        <Fieldset>
          <label className="SmallFontStyle" htmlFor="firstPrio">
            Erste Priorität
          </label>
          <Input
            className="MediumFontStyleKlein"
            type="text"
            id="first"
            name="first"
            placeholder="z.B. Eheringe kaufen"
            maxLength={50}
          />
          <label className="SmallFontStyle" htmlFor="secondPrio">
            Zweite Priorität
          </label>
          <Input
            className="MediumFontStyleKlein"
            type="text"
            id="second"
            name="second"
            placeholder="z.B. Location buchen"
            maxLength={50}
          />
          <label className="SmallFontStyle" htmlFor="thirdPrio">
            Dritte Priorität
          </label>
          <Input
            className="MediumFontStyleKlein"
            type="text"
            id="third"
            name="third"
            placeholder="z.B. Einladungen verschicken"
            maxLength={50}
          />
          <IconStyle>
            <Image src={plusIcon} alt="Plus" width={40} height={40} />
          </IconStyle>
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
  background-color: #f9e4d4;
  padding: 0.5em;
  width: 80%;
  border: none;
  border-radius: 1em;
  text-align: center;
  margin: auto;
  box-shadow: inset 0.5em 0.5em 0.5em #ccb29e;
`;

const IconStyle = styled.p`
  cursor: pointer;
  margin: auto;
  margin-top: 1em;
  width: 10%;
  &:active {
    height: 2em;
    width: 2em;
  }
`;
