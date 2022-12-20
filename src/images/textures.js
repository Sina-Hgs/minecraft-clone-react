import { NearestFilter, RepeatWrapping, TextureLoader } from "three";

import dirtImg from "./dirt.jpg";
import cobblestoneImg from "./cobblestone.png";
import glassImg from "./glass.png";
import grassImg from "./grass.jpg";
import logImg from "./log.jpg";
import stoneBricksImg from "./stone_bricks.png";
import woodImg from "./wood.png";

export const dirt = new TextureLoader().load(dirtImg);

export const cobblestone = new TextureLoader().load(cobblestoneImg);

export const stoneBricks = new TextureLoader().load(stoneBricksImg);

export const glass = new TextureLoader().load(glassImg);

export const grass = new TextureLoader().load(grassImg);

export const log = new TextureLoader().load(logImg);

export const wood = new TextureLoader().load(woodImg);

// ground

export const ground = new TextureLoader().load(grassImg);

// making the texture images look right

dirt.magFilter = NearestFilter;
cobblestone.magFilter = NearestFilter;
stoneBricks.magFilter = NearestFilter;
glass.magFilter = NearestFilter;
grass.magFilter = NearestFilter;
log.magFilter = NearestFilter;
wood.magFilter = NearestFilter;
ground.magFilter = NearestFilter;
ground.wrapS = RepeatWrapping;
ground.wrapT = RepeatWrapping;
