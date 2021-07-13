import React from "react";

import classes from "../../styles/StartGame.module.css";

const StartGame = (props) => {
    return (
        <React.Fragment>
            <h2><i>Will your team go 82-0?...</i></h2>
            <button className={classes.btn} onClick={props.onStartGame}>
                START GAME
            </button>
        </React.Fragment>
        
    );
}

export default StartGame;