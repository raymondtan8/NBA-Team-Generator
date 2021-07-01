// Represents the Gameplay of the Play page
// Basically everything except for the start game button

import React from "react";

import Roster from "./Roster.js";
import TeamRandomizer from "./TeamRandomizer.js";

const GamePlay = (props) => {
    return (
        <div>
            <h2><i>Best of Luck!</i></h2>
            <TeamRandomizer />
            <Roster />
        </div>
    );
}

export default GamePlay;