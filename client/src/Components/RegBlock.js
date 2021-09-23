import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
const RegBlock = () => {
  let passFlag = false;

  let user = {
    first: null,
    last: null,
    email: null,
    phone: null,
    uName: null,
    birthday: null,
    password: null,
  };

  const inputReader = () => {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let emailAddress = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phoneNum").value;
    let dob = document.getElementById("dd").value;
    let userName = document.getElementById("username").value;

    if (firstName.length > 0) {
      user.first = firstName;
    }
    if (firstName.length === 0) {
      user.first = null;
    }

    if (lastName.length > 0) {
      user.last = lastName;
    }
    if (lastName.length === 0) {
      user.last = null;
    }

    if (emailAddress.length > 0) {
      user.email = emailAddress;
    }
    if (emailAddress.length === 0) {
      user.email = null;
    }

    if (dob.length > 0) {
      user.birthday = dob;
    }
    if (dob.length === 0) {
      user.birthday = null;
    }

    if (userName.length > 0) {
      user.uName = userName;
    }
    if (userName.length === 0) {
      user.uName = null;
    }

    if (phoneNumber.length > 0) {
      user.phone = phoneNumber;
    }
    if (phoneNumber.length === 0) {
      user.phone = null;
    }

    return console.log(user);
  };

  const passwordCheck = () => {
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("confirm-pass").value;
    if (
      password.length > 0 &&
      confirmPassword.length > 0 &&
      confirmPassword === password
    ) {
      user.password = password;
      passFlag = false;
      console.log(user, passFlag);
    }
    if (
      confirmPassword.length >= password.length &&
      confirmPassword !== password
    ) {
      passFlag = true;
      console.log(passFlag);
    }
    if (confirmPassword.length < password.length) {
      passFlag = false;
      console.log(passFlag);
    }
  };

  return (
    <Wrapper>
      <Header>Signup Form</Header>
      <form>
        <SideBySide>
          <Label>First Name</Label>{" "}
          <StyledInput
            id="first-name"
            onChange={inputReader}
            minLength="2"
            required
          />
          <Label>Last Name</Label>{" "}
          <StyledInput id="last-name" onChange={inputReader} required />
        </SideBySide>
        <Columnal>
          <Label>Email:</Label>{" "}
          <StyledInput
            id="email"
            onChange={inputReader}
            type="email"
            required
          />
          <Label>Phone Number:</Label>{" "}
          <StyledInput id="phoneNum" onChange={inputReader} />
        </Columnal>
        <SideBySide>
          <Label>Username</Label>{" "}
          <StyledInput id="username" onChange={inputReader} required />
          <Label>Date of Birth:</Label>
          <ShortInput id="dd" type="date" onChange={inputReader} required />
        </SideBySide>
        <Columnal>
          <Label>Password</Label>{" "}
          <StyledInput
            id="pass"
            type="password"
            onChange={passwordCheck}
            required
          />
        </Columnal>
        <Columnal>
          <Label>Confirm Password</Label>{" "}
          <StyledInput
            id="confirm-pass"
            type="password"
            onChange={passwordCheck}
            required
          />
          {/* {(passFlag = false ? null : <Warning>Passwords must match</Warning>)} */}
        </Columnal>
        <ButtonWrap>
          <Button color="primary">Clear</Button>
          <SubButton>Submit</SubButton>
        </ButtonWrap>
      </form>
      <TOSdiv>
        <input type="checkbox" id="tos" />
        <Label>
          I have read and agree to the <a href="#">terms of service</a>
        </Label>
      </TOSdiv>
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
  height: 80vh;
  width: 40vw;
  border-radius: 5%;
  &:hover {
    box-shadow: 2px 2px grey;
    border: 1px solid grey;
  }
  @media (max-width: 1279px) {
    min-height: 100vh;
    width: 100vw;
  }
`;

const TOSdiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  border-radius: 4%;
  align-items: center;
  background-color: lightgrey;
  width: fit-content;
  height: 4rem;
  @media (max-width: 1279px) {
    width: 40vw;
    height: 3rem;
  }
`;

const Header = styled.h1`
  font-family: sans-serif;
`;

const StyledInput = styled.input`
  border: 1px solid rgb(209, 209, 209);
  height: 1.5rem;
  min-width: max-content;
  @media (max-width: 1279px) {
    max-width: 100vw;
  }
`;

const ShortInput = styled.input`
  border: 1px solid rgb(209, 209, 209);
  height: 1.5rem;
  max-width: fit-content;
`;

const SideBySide = styled.div`
  display: flex;
  padding: 1px;
  gap: 1rem;
  justify-content: space-evenly;
  justify-content: center;
  align-items: center;
  @media (max-width: 1279px) {
    max-width: 100vw;
    /* flex-directon: column; */
  }
`;
const Columnal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  @media (max-width: 1279px) {
    max-width: 100vw;
  }
`;
const Label = styled.p`
  @media (max-width: 1279px) {
    font-size: 10px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
`;

const Warning = styled.div`
  font-family: sans-serif;
  font-size: 0.8rem;
  color: red;
`;
const SubButton = styled.button``;

const ClearButton = styled.button``;

export default RegBlock;
