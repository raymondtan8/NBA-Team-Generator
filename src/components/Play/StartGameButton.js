import React from "react";

import classes from "../../styles/StartGameButton.module.css";

const StartGameButton = (props) => {
    return (
        <React.Fragment>
            <h2><i>Will your team go 82-0?...</i></h2>
            <button className={classes.btn} onClick={props.onStartGame}>
                START GAME
            </button>
        </React.Fragment>
        
    );
}

export default StartGameButton;