import React from "react";
import styled from "styled-components";
const RegBlock = () => {
  const inputReader = (ev) => {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    return console.log(firstName, lastName);
  };

  return (
    <Wrapper>
      <Header>REGISTRATION FORM</Header>
      <SideBySide>
        First Name <StyledInput id="first-name" onChange={inputReader} />
        Last Name <StyledInput id="last-name" onChange={inputReader} />
      </SideBySide>
      <Columnal>
        <SideBySide>
          Email: <StyledInput id="email" onChange={inputReader} />
        </SideBySide>
        <SideBySide>
          Phone Number: <StyledInput id="phone-number" />
        </SideBySide>
      </Columnal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px lightgrey;
  height: 70vh;
  width: 40vw;
  border-radius: 5%;
  &:hover {
    box-shadow: 2px 2px grey;
    border: 1px solid grey;
  }
`;

const Header = styled.h1`
  font-family: sans-serif;
`;

const StyledInput = styled.input`
  border: 1px solid rgb(209, 209, 209);
  height: 1.3rem;
`;

const SideBySide = styled.div`
  display: flex;
  padding: 1px;
  gap: 1rem;
`;
const Columnal = styled.div`
  display: flex;
  flex-direction: column;
`;

export default RegBlock;
