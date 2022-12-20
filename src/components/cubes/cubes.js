import { useSelector } from "react-redux";

import Cube from "../cube/cube";

const Cubes = () => {
  const cubes = useSelector((state) => state.cube.cubes);

  console.log(cubes);
  return cubes.map(({ key, pos, texture }) => (
    <Cube key={key} position={pos} texture={texture} />
  ));
};

export default Cubes;
