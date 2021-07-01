import React, { useState, useEffect } from "react";

import classes from "../../styles/TeamRandomizer.module.css";


const nba = require("nba-api-client");

const getLogoLinks = () => {
    const teams = require("../../assets/teams.json");
    const logoLinks = Object.values(teams).map((team) => {
        return nba.getTeamLogoURLs(team.Abbrev)[0];
    });
    return logoLinks;
}

const getLogoLinkIndex = (index) => {
    // Simply increments and mods by 30 (the amount of nba teams)
    return (index + 1) % 30;
}

const TeamRandomizer = (props) => {
    const logoLinks = getLogoLinks();
    const [logoLinkIndex, setLogoLinkIndex] = useState(0);
    let currImg = <img className={classes["team-img"]} src={logoLinks[logoLinkIndex]}/>;

    useEffect(() => {
        // setLogoLinkIndex((logoLinkIndex) => logoLinkIndex + 1);
         const timer = setTimeout(() => {
            setLogoLinkIndex(getLogoLinkIndex(logoLinkIndex));
         }, 150);

        return () => {
            clearTimeout(timer);
        };
    }, [logoLinkIndex]);

    return (
        <React.Fragment>
            {currImg}
        </React.Fragment>
    )
}

export default TeamRandomizer;