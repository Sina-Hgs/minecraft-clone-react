import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const getLocalStroage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

const INITIAL_STATE = {
  texture: "dirt",
  cubes: getLocalStroage("cubes") || [],
};

export const cubeSlice = createSlice({
  name: "cube",
  initialState: INITIAL_STATE,

  reducers: {
    addCube: (state, action) => {
      state.cubes = [
        ...state.cubes,
        { key: nanoid(), pos: action.payload, texture: state.texture },
      ];
    },

    removeCube: (state, action) => {
      state.cubes = state.cubes.filter(
        (cube) =>
          cube.pos[0] != action.payload[0] ||
          cube.pos[1] != action.payload[1] ||
          cube.pos[2] != action.payload[2]
      );
    },

    setTexture: (state, action) => {
      state.texture = action.payload;
    },

    saveWorld: (state) => {
      setLocalStorage("cubes", state.cubes);
    },
    resetWorld: (state) => {
      state.cubes = [];
    },
  },
});

export const { addCube, removeCube, setTexture, saveWorld, resetWorld } =
  cubeSlice.actions;

export default cubeSlice.reducer;
