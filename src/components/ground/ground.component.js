import { usePlane } from "@react-three/cannon";
import { useDispatch } from "react-redux";
import { addCube } from "../../store/cubeSlice";

import { ground } from "../../images/textures";

export const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  ground.repeat.set(100, 100);

  const dispatch = useDispatch();

  const handleGroundClick = (e) => {
    e.stopPropagation();
    const [x, y, z] = Object.values(e.point).map((val) =>
      val < 0 ? Math.ceil(val) : Math.floor(val)
    );

    dispatch(addCube([x, y, z]));
  };

  return (
    <mesh ref={ref} onClick={(e) => handleGroundClick(e)}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={ground} />
    </mesh>
  );
};
