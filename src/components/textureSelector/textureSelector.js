import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setTexture } from "../../store/cubeSlice";

import { useKeyboard } from "../../hooks/useKeyboard";

import {
  dirtImg,
  glassImg,
  grassImg,
  cobblestoneImg,
  stoneBricksImg,
  woodImg,
  logImg,
} from "../../images/images";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  wood: woodImg,
  log: logImg,
  glass: glassImg,
  cobblestone: cobblestoneImg,
  stoneBricks: stoneBricksImg,
};

const TextureSelector = () => {
  const [visible, setVisible] = useState(false);

  const activeTexture = useSelector((state) => state.cube.texture);

  const dispatch = useDispatch();

  const { dirt, cobblestone, stoneBricks, glass, grass, log, wood } =
    useKeyboard();

  useEffect(() => {
    const textureOptions = {
      dirt,
      cobblestone,
      stoneBricks,
      glass,
      grass,
      log,
      wood,
    };

    const pressedTexture = Object.entries(textureOptions).find(([k, v]) => v);

    if (pressedTexture) {
      dispatch(setTexture(pressedTexture[0]));
    }
  }, [setTexture, dirt, cobblestone, stoneBricks, glass, grass, log, wood]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 2000);

    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [activeTexture]);

  return (
    visible && (
      <div className="absolute centered texture-selector">
        {Object.entries(images).map(([k, src]) => {
          return (
            <img
              key={k}
              src={src}
              alt={k}
              className={`${k === activeTexture ? "active" : ""}`}
            />
          );
        })}
      </div>
    )
  );
};

export default TextureSelector;
