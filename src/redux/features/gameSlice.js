import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const matchTiles = createAsyncThunk(
  "game/matchTiles",
  ({ firstTileId, secondTileId }, { dispatch, getState }) => {
    const { firstTile, tiles } = getState().game;
    const secondTile = tiles.find((tile) => tile.id === secondTileId);

    if (firstTile.color === secondTile.color) {
      dispatch(disableTiles({ firstId: firstTileId, secondId: secondTileId }));
    } else {
      dispatch(setIsBlockBoard(true));
      setTimeout(() => {
        dispatch(closeTiles({ firstId: firstTileId, secondId: secondTileId }));
        dispatch(setIsBlockBoard(false));
      }, 1000);
    }
  }
);
export const flipTile = createAsyncThunk(
  "game/flipTile",
  (id, { dispatch, getState }) => {
    dispatch(openTile(id));
    const { firstTile } = getState().game;
    if (!firstTile) {
      dispatch(setFirstTile(id));
    } else {
      dispatch(matchTiles({ firstTileId: firstTile.id, secondTileId: id }));
    }
  }
);

export const ResetGame = createAsyncThunk(
  "game/ResetGame",
  (_, { dispatch }) => {
    dispatch(resetGameBoard());
    dispatch(mixOrder());
  }
);

const initialState = {
  tiles: [
    {
      id: 0,
      color: "red",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 1,
      color: "red",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 2,
      color: "green",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 3,
      color: "green",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 4,
      color: "yellow",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 5,
      color: "yellow",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 6,
      color: "blue",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 7,
      color: "blue",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 8,
      color: "white",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 9,
      color: "white",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 10,
      color: "purple",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 11,
      color: "purple",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 12,
      color: "silver",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 13,
      color: "silver",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 14,
      color: "gold",
      isClosed: true,
      isActive: true,
      order: 0,
    },
    {
      id: 15,
      color: "gold",
      isClosed: true,
      isActive: true,
      order: 0,
    },
  ],
  isFlipped: 0,
  firstTile: null,
  isBlockBoard: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    openTile: (state, action) => {
      state.tiles = state.tiles.map((tile) => {
        if (tile.id === action.payload) {
          return { ...tile, isClosed: false };
        }
        return tile;
      });
    },
    setFirstTile: (state, action) => {
      state.firstTile = state.tiles.find((tile) => tile.id === action.payload);
    },
    closeTiles: (state, action) => {
      state.tiles = state.tiles.map((tile) => {
        if (
          tile.id === action.payload.firstId ||
          tile.id === action.payload.secondId
        ) {
          return { ...tile, isClosed: true };
        }
        return tile;
      });
      state.firstTile = null;
    },
    disableTiles: (state, action) => {
      state.tiles = state.tiles.map((tile) => {
        if (
          tile.id === action.payload.firstId ||
          tile.id === action.payload.secondId
        ) {
          return { ...tile, isActive: false };
        }
        return tile;
      });
      state.firstTile = null;
      state.isFlipped += 2;
    },
    setIsBlockBoard: (state, action) => {
      state.isBlockBoard = action.payload;
    },
    mixOrder: (state) => {
      state.tiles = state.tiles.map((tile) => {
        return { ...tile, order: Math.floor(Math.random() * 16) };
      });
    },
    resetGameBoard: (state, action) => {
      state.tiles = state.tiles.map((tile) => {
        return {
          ...tile,
          isClosed: true,
          isActive: true,
        };
      });
      state.isFlipped = 0;
    },
  },
});

export const {
  openTile,
  closeTiles,
  disableTiles,
  setFirstTile,
  setIsBlockBoard,
  mixOrder,
  resetGameBoard,
} = gameSlice.actions;

export default gameSlice.reducer;
