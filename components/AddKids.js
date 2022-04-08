import React, { useState } from "react";
import styled from "styled-components";

export default function AddKids() {
  const [count, setCount] = useState(0);
  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <KidsContainer>
      <PlusButton onClick={increment}>+</PlusButton>
      {count}
      <MinusButton onClick={decrement}>-</MinusButton>
    </KidsContainer>
  );
}

const KidsContainer = styled.div`
  display: flex;
  gap: 1rem;
  display: flex;
  justify-content: center;
`;

const PlusButton = styled.button`
  background: rgb(245, 180, 36);
  background: linear-gradient(
    0deg,
    rgba(245, 180, 36, 1) 0%,
    rgba(255, 208, 56, 1) 100%
  );
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 0 0.3rem #ffd038;
  color: white;
  font-size: 1rem;
  &:active {
    width: 2rem;
    height: 2rem;
  }
`;

const MinusButton = styled.button`
  background: #ff928b;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 0 0 0.3rem #ff928b;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:active {
    width: 2rem;
    height: 2rem;
  }
`;
