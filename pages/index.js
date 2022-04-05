import Head from "next/head";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import { useState } from "react";
import PlusButton from "../components/Buttons/PlusButton";
import CreateToDo from "../components/CreateToDo";
import InputFormHome from "../components/InputFormHome";

export default function Home({ addNewData, formData, addNewToDos, toDos }) {
  const [showMe, setShowMe] = useState(true);
  function toggle() {
    setShowMe(!showMe);
  }

  return (
    <>
      <Head>
        <title>Do I? I Do!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainWrapper>
        <TextWrapperStyle>
          <BigFontStyle className="BigFontStyle">
            {formData === null ? (
              <p>Ihr Name & Sein Name </p>
            ) : (
              <p>
                {formData.brideName} & {formData.groomName}
              </p>
            )}
          </BigFontStyle>
          <Line></Line>
          <MediumFontStyle className="MediumFontStyle2">
            {formData === null ? <p>XX.XX.XXXX</p> : <p>{formData.date}</p>}
            {formData === null ? (
              <p>Ort, Beginn</p>
            ) : (
              <p>
                {formData.place}, {formData.time}
              </p>
            )}
            <PlusButton toggle={toggle} />
          </MediumFontStyle>
          <InputFormHome
            showMe={showMe}
            setShowMe={setShowMe}
            addNewData={addNewData}
          />
          <BigFontStyle2 className="BigFontStyle">
            <p>Eure wichtigsten To-Do´s</p>
          </BigFontStyle2>
          <Line></Line>
          <CreateToDo addNewToDos={addNewToDos} toDos={toDos} />
        </TextWrapperStyle>
      </MainWrapper>
      <NavBar />
    </>
  );
}

const MainWrapper = styled.main`
  margin: 0;
  margin-bottom: 6rem;
  padding: 1rem;
`;

const TextWrapperStyle = styled.div`
  text-align: center;
`;

const BigFontStyle = styled.div`
  margin-top: 3em;
`;

const BigFontStyle2 = styled.div`
  margin-top: 1em;
`;

const Line = styled.p`
  color: #f5b424;
  border-bottom: 2px solid;
  width: 80%;
  margin: auto;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;
`;

const MediumFontStyle = styled.div`
  margin-bottom: 0.5em;
`;
