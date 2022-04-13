import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mixOrder } from "../redux/features/gameSlice";
import { connect } from "react-redux";
import ResetModal from "./ResetModal";
import GameTile from "./GameTile";

const GameBoard = ({ isFlipped }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(mixOrder());
  }, [dispatch]);

  return isFlipped === 16 ? <ResetModal /> : <GameTile />;
};

const mapStateToProps = ({ game }) => ({
  isFlipped: game.isFlipped,
});

export default connect(mapStateToProps)(GameBoard);
