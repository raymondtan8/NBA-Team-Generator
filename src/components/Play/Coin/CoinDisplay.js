import React from "react";

import CoinGIFURL from "../../../assets/coin.gif";

import classes from "../../../styles/CoinDisplay.module.css";

const CoinDisplay = (props) => {
    return (
        <span className={classes.coin}>
            {props.value}
            <img src={CoinGIFURL} />
        </span>
    );
}

export default CoinDisplay;