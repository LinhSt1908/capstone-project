import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import asia from "../public/icons/asia.svg";
import africa from "../public/icons/africa.svg";
import europe from "../public/icons/europe.svg";
import america from "../public/icons/america.svg";

export default function Continents() {
  return (
    <>
      <Link href="/africa" passHref>
        <Button className="MediumFontStyle2">Afrika</Button>
      </Link>
      <Image src={africa} alt="Africa" />

      <Link href="/america" passHref>
        <Button className="MediumFontStyle2">Amerika</Button>
      </Link>
      <Image src={america} alt="America" />

      <Link href="/asia" passHref>
        <Button className="MediumFontStyle2">Asien</Button>
      </Link>
      <Image src={asia} alt="Asia" />

      <Link href="/europe" passHref>
        <Button className="MediumFontStyle2">Europa</Button>
      </Link>
      <Image src={europe} alt="Europe" />
    </>
  );
}

const Button = styled.div`
  background-color: #f9e4d4;
  border-radius: 1rem;
  border-color: #6c4a4a;
  padding: 0.3rem;
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
