import styled from "styled-components";
import Image from "next/image";
import africaIcon1 from "../public/icons/africaIcon1.svg";
import americaIcon2 from "../public/icons/americaIcon2.svg";
import asiaIcon6 from "../public/icons/asiaIcon6.svg";
import europeIcon1 from "../public/icons/europeIcon1.svg";
import Link from "next/link";

export default function Continents() {
  return (
    <>
      <Link href="/africa" passHref>
        <Button className="MediumFontStyle2">Afrika</Button>
      </Link>
      <Image src={africaIcon1} alt="Africa" />

      <Link href="/america" passHref>
        <Button className="MediumFontStyle2">Amerika</Button>
      </Link>
      <Image src={americaIcon2} alt="America" />

      <Link href="/asia" passHref>
        <Button className="MediumFontStyle2">Asien</Button>
      </Link>
      <Image src={asiaIcon6} alt="Asia" />

      <Link href="/europe" passHref>
        <Button className="MediumFontStyle2">Europa</Button>
      </Link>
      <Image src={europeIcon1} alt="Europe" />
    </>
  );
}

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
