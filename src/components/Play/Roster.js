// Represents the Roster of the team the player is building
// May also be able to use this for the roster the computer generates
// Will have a title and 5 positions available: PG, SG, SF, PF, and C. 
import React from "react";

import CoinDisplay from "./Coin/CoinDisplay.js";
import classes from "../../styles/Roster.module.css";

const nba = require("nba-api-client");

const Roster = (props) => {
    const main = props.isMainRoster ? "-main" : "";

    const playerData = props.playerData;
    return (
        <div className={classes["roster" + main]} >
            <h3>DREAM TEAM ROSTER</h3>
            <hr/>
            <div>
                <p>
                    PG
                    <img src={playerData.PG.headshotURL} />
                    {playerData.PG.name}
                    <CoinDisplay value={playerData.PG.cost} />
                </p>
                <hr/>
                <p>
                    SG
                    <img src={playerData.SG.headshotURL} />
                    {playerData.SG.name}
                    <CoinDisplay value={playerData.SG.cost} />
                </p>
                <hr/>
                <p>
                    SF
                    <img src={playerData.SF.headshotURL} />
                    {playerData.SF.name}
                    <CoinDisplay value={playerData.SF.cost} />
                </p>
                <hr/>
                <p>
                    PF
                    <img src={playerData.PF.headshotURL} />
                    {playerData.PF.name}
                    <CoinDisplay value={playerData.PF.cost} />
                </p>
                <hr/>
                <p>
                    C
                    <img src={playerData.C.headshotURL} />
                    {playerData.C.name}
                    <CoinDisplay value={playerData.C.cost} />
                </p>
            </div>
        </div>
    );
}

export default Roster;