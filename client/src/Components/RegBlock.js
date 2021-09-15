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
      <Header>Signup Form</Header>
      <form>
        <SideBySide>
          <Label>First Name</Label>{" "}
          <StyledInput id="first-name" onChange={inputReader} />
          <Label>Last Name</Label>{" "}
          <StyledInput id="last-name" onChange={inputReader} />
        </SideBySide>
        <Columnal>
          <Label>Email:</Label>{" "}
          <StyledInput id="email" onChange={inputReader} />
          <Label>Phone Number:</Label> <StyledInput id="phone-number" />
        </Columnal>
        <SideBySide>
          <Label>Username</Label> <StyledInput id="username" />
          <Label>Date of Birth:</Label>
          <ShortInput id="dd" placeholder="dd" />/
          <ShortInput id="mm" placeholder="mm" />/
          <ShortInput id="yy" placeholder="yy" />
        </SideBySide>
        <Columnal>
          <Label>Password</Label> <StyledInput id="pass" />
        </Columnal>
        <Columnal>
          <Label>Confirm Password</Label> <StyledInput id="confirm-pass" />
        </Columnal>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
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
  height: 1.5rem;
  min-width: max-content;
`;

const ShortInput = styled.input`
  border: 1px solid rgb(209, 209, 209);
  height: 1.5rem;
  max-width: 1.5rem;
`;

const SideBySide = styled.div`
  display: flex;
  padding: 1px;
  gap: 1rem;
  justify-content: space-evenly;
  justify-content: center;
  align-items: center;
`;
const Columnal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
const Label = styled.p``;

export default RegBlock;
