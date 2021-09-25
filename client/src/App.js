import React from "react";
import RegBlock from "./Components/RegBlock";
import styled from "styled-components";
import GlobalStyles from "./Components/GlobalStyles";

function App() {
  return (
    <>
    <GlobalStyles/>
      <Wrapper className="App">
        <RegBlock />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96vh;
  width: 99.3vw;
`;

export default App;
