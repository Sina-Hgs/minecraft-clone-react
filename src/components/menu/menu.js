import { useDispatch } from "react-redux";

import { saveWorld, resetWorld } from "../../store/cubeSlice";

const Menu = () => {
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveWorld());
  };

  const handleReset = () => {
    dispatch(resetWorld());
  };

  return (
    <div className="menu absolute">
      <button onClick={handleSave}>Save World</button>
      <button onClick={handleReset}>Reset World</button>
    </div>
  );
};

export default Menu;
