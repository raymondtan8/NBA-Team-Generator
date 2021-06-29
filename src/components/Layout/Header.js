import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import HeaderButton from "./HeaderButton.js";
import headerImg from "../../assets/headerimg.jpeg";

import classes from "../../styles/Header.module.css";

const Header = (props) => {

    return (
        <React.Fragment>
        <header className={classes.header}>
            <h1>NBA Team Generator</h1>
            <Navbar className={classes.buttons}>
                <Nav>
                    <Nav.Link href="/">
                        <HeaderButton description="HOME" />
                    </Nav.Link>
                    <Nav.Link href="/howtoplay">
                        <HeaderButton description="HOW TO PLAY" />
                    </Nav.Link>
                    <Nav.Link href="/play">
                        <HeaderButton description="PLAY NOW" />
                    </Nav.Link>
                    <Link target="_blank" to="//github.com/raymondtan8/NBA-Team-Generator">
                      <HeaderButton description="SOURCE CODE"/>
                    </Link>
                </Nav>
            </Navbar>
        </header>
        <div className={classes["main-image"]}>
            <img src={headerImg} alt="A photo of multiple popular basketball players." />
        </div>
        </React.Fragment>
    );
}

export default Header;