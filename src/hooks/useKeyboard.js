import { useCallback, useEffect, useState } from "react";

const actionsByKey = (key) => {
  const keyActionsMap = {
    KeyW: "moveForward",
    KeyS: "moveBackward",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    Space: "jump",
    Digit1: "dirt",
    Digit2: "grass",
    Digit3: "wood",
    Digit4: "log",
    Digit5: "glass",
    Digit6: "cobblestone",
    Digit7: "stoneBricks",
  };

  return keyActionsMap[key];
};

// THE HOOK

export const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    wood: false,
    log: false,
    glass: false,
    cobblestone: false,
    stoneBricks: false,
  });

  //   HANDLE KEY DOWN

  const handleKeyDown = useCallback((e) => {
    const action = actionsByKey(e.code);

    if (action) {
      setActions((prev) => {
        return { ...prev, [action]: true };
      });
    }
  }, []);

  //   HANDLE KEY UP

  const handleKeyUp = useCallback((e) => {
    const action = actionsByKey(e.code);

    if (action) {
      setActions((prev) => {
        return { ...prev, [action]: false };
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyDown);
    };
  }, [handleKeyDown, handleKeyUp]);

  return actions;
};
