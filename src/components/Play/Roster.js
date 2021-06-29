// Represents the Roster of the team the player is building
// May also be able to use this for the roster the computer generates
// Will have a title and 5 positions available: PG, SG, SF, PF, and C. 
import React from "react";

import classes from "../../styles/Roster.module.css";

const Roster = (props) => {
    return (
        <div className={classes.roster}>
            <h3>DREAM TEAM ROSTER</h3>
            <hr/>
            <div>
                <p>
                    PG

                </p>
                <hr/>
                <p>
                    SG

                </p>
                <hr/>
                <p>
                    SF

                </p>
                <hr/>
                <p>
                    PF

                </p>
                <hr/>
                <p>
                    C
                    
                </p>
            </div>
        </div>
    );
}

export default Roster;