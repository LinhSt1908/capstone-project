import styled from "styled-components";
import Image from "next/image";
import logoIcon from "../public/icons/logoIcon.svg";

function Header() {
  return (
    <HeaderWrapperStyle>
      <ImageStyle>
        <Image src={logoIcon} alt="Logo" width={190} height={190} />
      </ImageStyle>
    </HeaderWrapperStyle>
  );
}
export default Header;

const HeaderWrapperStyle = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  width: 100%;
  height: 6rem;
  background-image: linear-gradient(to top, #ff928b 27%, #f5efef 100%);
`;

const ImageStyle = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;
