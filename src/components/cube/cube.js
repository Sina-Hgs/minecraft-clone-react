import { useBox } from "@react-three/cannon";
import { useDispatch } from "react-redux";
import { addCube, removeCube } from "../../store/cubeSlice";

import * as textures from "../../images/textures";
import { useState } from "react";
import { act } from "react-dom/test-utils";

const Cube = ({ position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const activeTexture = textures[texture];

  const dispatch = useDispatch();

  const handleCubeClick = (e) => {
    e.stopPropagation();

    const clickedFace = Math.floor(e.faceIndex / 2);
    const { x, y, z } = ref.current.position;

    // removing cubes
    if (e.altKey) {
      return dispatch(removeCube([x, y, z]));
    }

    // adding cubess
    switch (clickedFace) {
      case 0:
        dispatch(addCube([x + 1, y, z]));
        break;
      case 1:
        dispatch(addCube([x - 1, y, z]));
        break;
      case 2:
        dispatch(addCube([x, y + 1, z]));
        break;
      case 3:
        dispatch(addCube([x, y - 1, z]));
        break;
      case 4:
        dispatch(addCube([x, y, z + 1]));
        break;
      case 5:
        dispatch(addCube([x, y, z - 1]));
        break;
      default:
        return null;
    }
  };

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref}
      onClick={(e) => {
        handleCubeClick(e);
      }}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial
        color={isHovered ? "gray" : "white"}
        transparent={true}
        opacity={texture === "glass" ? 0.6 : 1}
        map={activeTexture}
        attach="material"
      />
    </mesh>
  );
};

export default Cube;
