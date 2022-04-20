import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { Line } from "../pages/index";
import Image from "next/image";
import ethiopia from "../public/icons/ethiopia.png";

export default function Africa() {
  return (
    <>
      <Header />
      <MainWrapper>
        <TextWrapperStyle>
          <Heading className="BigFontStyle">Afrika</Heading>
          <Line></Line>
          <Button className="MediumFontStyle2">Äthiopien</Button>
          <Ethiopia>
            <Image src={ethiopia} alt="Ethiopia" width={380} height={500} />
          </Ethiopia>
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

const Button = styled.div`
  background-color: #f9e4d4;
  border-radius: 1rem;
  border-color: #6c4a4a;
  padding: 0.5rem;
  width: 50%;
  border: 1px solid;
  margin: 1rem auto 1rem auto;
  box-shadow: 0.3rem 0.3rem 0.3rem #ccb29e;
  cursor: pointer;
  &:active {
    width: 45%;
    padding: 0.2rem;
  }
`;

const Ethiopia = styled.div`
  margin-top: 2rem;
`;
