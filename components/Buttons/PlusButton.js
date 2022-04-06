import styled from "styled-components";

export default function PlusButton({ toggle }) {
  return (
    <>
      <StyledButton onClick={toggle}>+</StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background: rgb(245, 180, 36);
  background: linear-gradient(
    0deg,
    rgba(245, 180, 36, 1) 0%,
    rgba(255, 208, 56, 1) 100%
  );
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 0px 0px 5px #ffd038;
  color: white;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;
