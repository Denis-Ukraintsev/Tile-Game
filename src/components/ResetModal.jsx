import React, { useState } from "react";
import styled from "styled-components";
import { ResetGame } from "../redux/features/gameSlice";
import { connect } from "react-redux";
import GameTile from "./GameTile";

const ResetModal = ({ ResetGame }) => {
  const i18n = {
    btn1: "reset",
    btn2: "close",
    h1: "Good job, man!",
  };

  const [off, setOff] = useState(false);

  const resetBtn = () => {
    ResetGame();
  };

  return !!!off ? (
    <LoginModalOverlay>
      <Modal>
        <H1>{i18n.h1}</H1>
        <BtnRoot>
          <Btn1
            onClick={() => {
              resetBtn();
            }}
          >
            {i18n.btn1}
          </Btn1>
          <Btn2
            onClick={() => {
              setOff(true);
            }}
          >
            {i18n.btn2}
          </Btn2>
        </BtnRoot>
      </Modal>
    </LoginModalOverlay>
  ) : (
    <GameTile />
  );
};

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 400px;
  height: 350px;
  background-color: #77b6bb72;
  border-radius: 15px;
`;

const LoginModalOverlay = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%; */
`;

const H1 = styled.h1`
  display: flex;
  align-self: center;
  color: #8321a3;
`;

const BtnRoot = styled.div`
  display: flex;
  align-self: center;
  height: 25px;
  padding: 50px;
`;

const Btn1 = styled.button`
  width: 100px;
  border-radius: 7px;
  background-color: #8221a343;
  margin: 0 40px;
  font-size: 17px;
`;
const Btn2 = styled.button`
  width: 100px;
  border-radius: 7px;
  background-color: #8221a343;
  margin: 0 40px;
  font-size: 17px;
`;

const mapStateToProps = () => {};

const mapDispatchToProps = { ResetGame };

export default connect(mapStateToProps, mapDispatchToProps)(ResetModal);
