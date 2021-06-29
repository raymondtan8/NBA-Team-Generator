import React from "react";


import classes from "../../styles/HeaderButton.module.css"; 

const HeaderButton = (props) => {
    return (
        <button className={classes.button} >
            {props.description}
        </button>
    );
}

export default HeaderButton;