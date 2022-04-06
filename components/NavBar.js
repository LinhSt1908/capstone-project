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
      </IconStyle>
      <IconStyle>
        <Link href="/guestpage" passHref>
          <Image src={guestIcon} alt="Guest" width={40} height={40} />
        </Link>
      </IconStyle>
      <IconStyle>
        <Link href="/budgetpage" passHref>
          <Image src={budgetIcon} alt="Budget" width={35} height={35} />
        </Link>
      </IconStyle>
    </NavWrapperStyle>
  );
}
export default NavBar;

const NavWrapperStyle = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 7vh;
  bottom: 0;
  right: 0;
  background-color: #ff928b;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
`;

const IconStyle = styled.div`
  box-sizing: border-box;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  &:active {
    border-top: 5px solid #6c4a4a;

    display: flex;
    justify-content: center;
  }
`;
