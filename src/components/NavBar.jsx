import "./NavBar.css"
import { Link } from "react-router-dom";
import { Modal } from "../modal/Modal";
import React, { useState, useEffect } from "react";

export const NavBar = () => {

    const [show, setShow] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    const resetChat = () => {
        window.location.href= "/chat"
    }

    return (

        <nav >
            <h1 className="title"> OpenAi Fun</h1>
            {(toggleMenu || screenWidth > 1020) &&
                (
                    <ul className="list">

                        <li className="items"><Link to="/" onClick={toggleNav}>Dalle Demo</Link></li>
                        <li className="items"><Link to="/chat" onClick={() => {
                            toggleNav();
                            resetChat();
                        }}> Chat Demo</Link></li>
                        <li className="items">
                            <button className="open-btn" onClick={() => setShow(true)}>Contact Me</button>
                            <Modal onClose={() => setShow(false)} show={show} /></li>
                    </ul>
                )}
            <button onClick={toggleNav} className="nav-btn"><i className="fa-sharp fa-solid fa-bars"></i></button>

        </nav>
    )
}