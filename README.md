# React Minecraft Clone

This a clone of **Minecraft** videogame, made with React & Three JS.

_Made with:_

React, Three js, react-three-fiber, redux, custom hooks, caching, sass, nanoid, & etc.

![Screenshot (415)](https://github.com/Sina-Hgs/minecraft-clone-react/assets/103804601/301c78e5-825f-40a9-91ec-31bc2159c7e3)
Example photo, not the prettiest house you can make though! :)

## How to play



Click on the game to **start**.

**Move** the player using WASD keys on your keyboard (similar to most games).

**Rotate** the player by moving your mouse.

Press the Spacebar key to **jump**.

**Choose the block type** you want to build with by using the number keys 1-7 on your keyboard, a pop-up of the block types shows up when you press a number to tell you what you're choosing/what blocks are available.

Available block types: 

- dirt
- grass
- wood plank
- wood log
- glass
- cobblestone
- stone brick

To **put a block down**, click on the desired place with your mouse.

To **delete a block**, hold ALT and click on it to remove it.

Click ESC to **show your mouse cursor** and click the save file/reset the game file.

tip: try not to put a block underneath yourself because it would make you jump unintentionaly.

## About

This **Minecraft clone** uses Three JS and react-three-fiber to make the game environment, user, cubes, & etc. There are currenntly 7 block types available to build with. The app uses redux to add/remove blocks and cache the player's save file in local storage. There's a custom hook which makes it possible for the keyboard keys to interact with the game.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

