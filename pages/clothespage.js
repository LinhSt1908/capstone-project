import { Line } from "../pages/index";
import styled from "styled-components";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Continents from "../components/Continents";

export default function ClothesPage() {
  return (
    <>
      <Header />
      <MainWrapper>
        <TextWrapperStyle>
          <Heading className="BigFontStyle">Hochzeitskleidung weltweit</Heading>
          <Line></Line>
          <Continents />
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
  margin-bottom: 2.5rem;
`;

const Heading = styled.div`
  margin-top: 3em;
`;
