import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import InputFormGuest from "../components/InputFormGuest";
import PlusButton from "../components/Buttons/PlusButton";

export default function GuestPage() {
  return (
    <>
      <Header />
      <MainWrapper>
        <TextWrapperStyle>
          <BigFontStyle className="BigFontStyle">
            Freunde & Familie
          </BigFontStyle>
          <Line></Line>
          <PlusButton />
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
  border-bottom: 2px solid;
  width: 25rem;
  margin: auto;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
`;
