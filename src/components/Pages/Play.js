import React, {useState} from "react";

import Card from "../UI/Card.js";
import StartGame from "../Play/StartGame.js";
import Gameplay from "../Play/Gameplay.js";

const Play = (props) => {
    const [gameIsStarted, setGameIsStarted] = useState(false);

    const startGameHandler = () => {
        setGameIsStarted(true);
    }

    return (
        <Card>
            {!gameIsStarted && <StartGame onStartGame={startGameHandler} />}
            {gameIsStarted && <Gameplay />}
        </Card>
    );
}

export default Play;