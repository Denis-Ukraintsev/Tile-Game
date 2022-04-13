import React from "react";
import GameBoard from "./components/GameBoard";
import styled from "styled-components";

const App = () => {
  return (
    <Root>
      <GameBoard />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 400px;
`;

export default App;
