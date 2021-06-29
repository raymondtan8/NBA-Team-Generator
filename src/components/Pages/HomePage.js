import React from "react";

import { Nav } from "react-bootstrap";
import Card from "../UI/Card.js";
import BasketballImg from "../../assets/basketball.png";
import classes from "../../styles/HomePage.module.css";

const HomePage = (props) => {
    return (
        <Card>
            <h1>
                Welcome to the NBA Team Generator Game!
            </h1>
            <img className={classes["basketball-img"]} src={BasketballImg}></img>
            <p>
                Would Lebron and Durant on a team be able to beat Luka and Steph Curry? 
                How about drafting a superstar vs three solid role players? In this game,
                you will attempt to build your very own superteam, all while working with a 
                limited budget. Will your team have a chance at a perfect season?
            </p>
            <p>
                First time? Take a look at the rules <Nav.Link href="/howtoplay" style={{textDecorationColor: "white"}} ><i style={{color: "white"}}>here</i></Nav.Link>
            </p>
            <p>
                Ready to go? <Nav.Link href="/play" style={{textDecorationColor: "white"}}><i style={{color: "white"}}>Click here to get started!</i></Nav.Link>
            </p>
        </Card>
    );
}

export default HomePage;