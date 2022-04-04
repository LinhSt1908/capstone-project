import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import Image from "next/image";
import plusIcon from "../public/icons/plusIcon.svg";
import InputFormGuest from "../components/InputFormGuest";

export default function GuestPage() {
  return (
    <>
      <Header />
      <MainWrapper>
        <TextWrapperStyle>
          <BigFontStyle className="BigFontStyle">
            Freunde & Familie
          </BigFontStyle>
          <Line>________________________________________</Line>
          <Button type="button" className="MediumFontStyle" value="add guest">
            + Gast hinzufügen
          </Button>
          <p>
            <Image src={plusIcon} alt="Plus" width={40} height={40} />
          </p>

          <InputFormGuest />
        </TextWrapperStyle>
      </MainWrapper>

      <NavBar />
    </>
  );
}

const MainWrapper = styled.main`
  margin: 0;
  padding: 1rem;
`;

const TextWrapperStyle = styled.div`
  text-align: center;
`;

const BigFontStyle = styled.div`
  margin-top: 3em;
`;

const Line = styled.p`
  color: #f5b424;
  font-weight: 900;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  background-color: #f9e4d4;
  border-radius: 1em;
  border-color: #6c4a4a;
  padding: 0.5em;
  width: 30%;
  border: 1px solid;
  margin: auto;
  margin-top: 1rem;
  box-shadow: 5px 5px 5px #ccb29e;
`;
