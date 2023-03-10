import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cubes from "./components/cubes/cubes";
import { FPV } from "./components/FPV/FPV";
import { Ground } from "./components/ground/ground.component";
import { Player } from "./components/player/player.component";
import TextureSelector from "./components/textureSelector/textureSelector";
import Menu from "./components/menu/menu";

const App = () => {
  return (
    <>
      <Canvas>
        <Sky sunPosition={(100, 100, 20)} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
      <TextureSelector />
      <Menu />
    </>
  );
};

export default App;
