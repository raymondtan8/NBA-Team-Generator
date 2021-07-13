// Represents the Gameplay of the Play page
// Basically everything except for the start game button

import React from "react";

import Roster from "./Roster.js";
import TeamRandomizer from "./TeamRandomizer.js";

const nba = require("nba-api-client");

const GamePlay = (props) => {
    
    let dummyPlayerData = { // An object of objects, where each object represents a player in a single position. A player object can be blank.
        // Players attributes should have:
        // Position
        // Name
        // Headshot
        // Coins to use (1 - 5)
        PG: {
            name: "Stephen Curry",
            headshotURL: nba.getPlayerHeadshotURL({
                "PlayerID":201939,
                "TeamID":1610612744
             }),
            cost: 5
        },
        SG: {
            name: "James Harden",
            headshotURL: nba.getPlayerHeadshotURL({
                "PlayerID":201935,
                "TeamID":1610612745
             }),
            cost: 2
        },
        SF: {
            name: "Lebron James",
            headshotURL: nba.getPlayerHeadshotURL({
                "PlayerID":2544,
                "TeamID":1610612747
             }),
            cost: 3
        },
        PF: {
            name: "Brook Lopez",
            headshotURL: nba.getPlayerHeadshotURL({
                "PlayerID":201572,
                "TeamID":1610612749
             }),
            cost: 2
        },
        C: {
            name: "Nikola Jokic",
            headshotURL: nba.getPlayerHeadshotURL({
                "PlayerID":203999,
                "TeamID":1610612743
             }),
            cost: 4
        }
    }
    
    return (
        <div>
            <h2><i>Best of Luck!</i></h2>
            <TeamRandomizer />
            <Roster isMainRoster={true} playerData={dummyPlayerData} />
        </div>
    );
}

export default GamePlay;