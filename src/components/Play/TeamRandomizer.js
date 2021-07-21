import React, { useState, useEffect } from "react";

import Roster from "./Roster.js";

import classes from "../../styles/TeamRandomizer.module.css";

// Have to use two NBA APIs because the one I was originally using had problems with promises
const NBA = require("nba"); 
const nba = require("nba-api-client");
const teams = Object.values(require("../../assets/teams.json"));

const getLogoLinks = () => {
    const logoLinks = teams.map((team) => {
        return nba.getTeamLogoURLs(team.Abbrev)[0];
    });
    return logoLinks;
}

const getLogoLinkIndex = (index) => {
    // Simply increments and mods by 30 (the amount of nba teams)
    return (index + 1) % 30;
}

const randomNum = (max) => {
    return Math.floor(Math.random() * max);
}

// Gathers the entire roster of players from team
const gatherPlayers = async (team) => {
    const teams = await NBA.stats.commonTeamRoster({TeamID: team.TeamID, Season: "2019-20"});
    const roster = teams.commonTeamRoster;
    // console.log(roster);
    const wholePlayerData = [];
    for (let i = 0; i < roster.length; i++) {
        const cleanedInfo = await gatherPlayersHelper(roster[i]);
        wholePlayerData.push(cleanedInfo[0]);
    }
    console.log(wholePlayerData);
    // TODO: getBestPlayers(wholePlayerData);
}

const gatherPlayersHelper = async (player) => {
    const data = await NBA.stats.playerInfo({PlayerID: player.playerId});
    return data.playerHeadlineStats;
}

const getBestPlayers = (wholePlayerData) => {
    const bestGuards = [];
    const bestForwards = [];
    const bestCenters = [];
}

/** COMPONENT FUNCTION */ 
const TeamRandomizer = (props) => {
    const logoLinks = getLogoLinks();
    const startingIndex = randomNum(30);
    let playerData = {}; // Will be updated
    const [counter, setCounter] = useState(0);
    const [showRoster, setShowRoster] = useState(false);
    const [logoLinkIndex, setLogoLinkIndex] = useState(startingIndex);
    let currImg = <img className={classes["team-img"]} src={logoLinks[logoLinkIndex]}/>;

    useEffect(() => {
         if (counter !== (33)) {
            setCounter((counter) => counter + 1);
            const timer = setTimeout(() => {
                setLogoLinkIndex(getLogoLinkIndex(logoLinkIndex));
             }, 100);
    
            return () => {
                clearTimeout(timer);
            };
         } else {
            const team = teams[logoLinkIndex];
            gatherPlayers(team);
            // setShowRoster(true);
         }
    }, [logoLinkIndex]);

    return (
        <React.Fragment>
            <div style={{display: "flex"}}>
                {currImg}
                {/* {showRoster && <Roster playerData={playerData}/>} */}
            </div> 
        </React.Fragment>
    )
}

export default TeamRandomizer;