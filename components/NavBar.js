import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import homeIcon from "../public/icons/homeIcon.svg";
import guestIcon from "../public/icons/guestIcon.svg";
import budgetIcon from "../public/icons/budgetIcon.svg";

function NavBar() {
  return (
    <NavWrapperStyle>
      <IconStyle>
        <Link href="/" passHref>
          <Image src={homeIcon} alt="Home" width={40} height={40} />
        </Link>
        <Link href="./guestpage" passHref>
          <Image src={guestIcon} alt="Guest" width={40} height={40} />
        </Link>
        <Link href="./budgetpage" passHref>
          <Image src={budgetIcon} alt="Budget" width={35} height={35} />
        </Link>
      </IconStyle>
    </NavWrapperStyle>
  );
}
export default NavBar;

const NavWrapperStyle = styled.div`
  position: sticky;

  width: 100vw;
  height: 10vh;
  bottom: 0;
  right: 0;
  background-color: #ff928b;
`;

const IconStyle = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
`;
