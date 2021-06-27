import React from "react"
import "./Landing.css"
import { OverviewContent } from "./landing/OverviewContent"
import { SignupDescription } from "./landing/SignupDescription"
import { ResearchDescription } from "./landing/ResearchDescription"

export const Landing = () => {
    /*const toggleNavLinks = () => {
        const x = document.getElementById("navLinks")
        if (x)
            if (x.style.bottom === "0vh") {
                x.style.bottom = "100vh"
            } else {
                x.style.bottom = "0vh"
            }
    }*/

    const enableNavLinks = () => {
        const links = document.getElementById("navLinks")
        if (links) {
            links.style.bottom = "50vh"
            links.style.opacity = "1"
        }

        const overlay = document.getElementById("navOverlay")
        if (overlay) {
            overlay.style.bottom = "0vh"
            overlay.style.opacity = "0.5"
        }

        const closeNav = document.getElementById("closeNav")
        if (closeNav) {
            closeNav.style.bottom = "40vh"
            closeNav.style.opacity = "1"
        }

        document.body.style.overflow = "hidden"
    }

    const disableNavLinks = () => {
        const links = document.getElementById("navLinks")
        if (links) {
            links.style.bottom = "100vh"
            links.style.opacity = "0"
        }

        const overlay = document.getElementById("navOverlay")
        if (overlay) {
            overlay.style.bottom = "100vh"
            overlay.style.opacity = "0"
        }

        const closeNav = document.getElementById("closeNav")
        if (closeNav) {
            closeNav.style.bottom = "100vh"
            closeNav.style.opacity = "0"
        }

        document.body.style.overflow = "unset"
    }

    return (
        <div className="wrapper">
            <div className="content">
                <div id="intro" className="fold">
                    <div id="menu">
                        <a href="#intro">
                            <img id="qluster" src="./assets/images/qluster.svg" alt="Qluster" />
                        </a>
                        <div id="navOverlay" onClick={disableNavLinks} />
                        <div id="navLinks">
                            <a href="#research">Research</a>
                            <a href="#signup">Early Access</a>
                            <a href="https://discord.gg/QbZsjdMsV5">Discord</a>
                            <a href="https://www.facebook.com/groups/156981244915722">Explore</a>
                        </div>
                        <div id="closeNav" onClick={disableNavLinks}>
                            <span id="closeNavX">X</span>
                        </div>
                        <a>
                            <img id="burger" src="./assets/images/menu.svg" alt="Menu" onClick={enableNavLinks} />
                        </a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#intro"><img src="./assets/images/qluster.svg" alt="Qluster" /></a></li>
                            <li><a href="#research">Research</a></li>
                            <li><a href="#signup">Early Access</a></li>
                            <li className="spacer" />
                            <a href="https://discord.gg/QbZsjdMsV5" id="discord">
                                <img src="./assets/images/discord.svg" alt="Discord" />
                            </a>
                            <li><a href="https://www.facebook.com/groups/156981244915722"
                                className="gradient">Explore</a></li>
                        </ul>
                    </nav>
                    <div className="content">
                        <h1>Don't explore the markets alone...</h1>
                        <h3>TRADING MADE SOCIAL</h3>
                        <a className="button" href="#signup">Sign Up</a>
                    </div>
                    <a id="down" className="button" href="#overview">
                        <img src="./assets/images/down.svg" alt="down" />
                    </a>
                </div>
                <div id="overview" className="fold">
                    <OverviewContent />
                    <div className="action">
                        <h2>Sign up now for early access</h2>
                        <a href="#signup">
                            <img src="./assets/images/down-round.svg" alt="down" />
                        </a>
                    </div>
                </div>
                <div id="signup" className="fold">
                    <SignupDescription />
                    <div>
                        <img src="./assets/images/qluster-white.svg" alt="qluster" />
                        <form name="contact" method="post" action="./signup-success.html" data-netlify="true">
                            <input name="email" placeholder="Enter your email address" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                </div>
                <div id="research" className="fold">
                    <ResearchDescription />
                    <img src="./assets/images/rocket.svg" alt="Rocket" />
                    <div>
                        <h2>Research</h2>
                        <p>As an early access member you'll receive:</p>
                        <ul>
                            <li>Edition 1 complementary</li>
                            <li>30% off your first 3 months</li>
                        </ul>
                        <a className="button" href="http://research.qluster.co">Yes, I'm in</a>
                    </div>
                </div>
            </div>
            <div id="top-blob" />
            <img id="rocket" src="./assets/images/rocket.svg" alt="Rocket" />
            <div id="rocks">
                <img src="./assets/images/rocks/purple-rock-1.svg" alt="Rock" />
                <img src="./assets/images/rocks/purple-rock-2.svg" alt="Rock" />
                <img src="./assets/images/rocks/purple-rock-3.svg" alt="Rock" />
                <img src="./assets/images/rocks/white-rock-1.svg" alt="Rock" />
                <img src="./assets/images/rocks/white-rock-2.svg" alt="Rock" />
                <img src="./assets/images/rocks/white-rock-3.svg" alt="Rock" />
                <img src="./assets/images/rocks/white-rock-4.svg" alt="Rock" />
            </div>
            <img id="lower-blob" src="./assets/images/lower-blob.svg" alt="background image" />
            <div id="lower-mobile-blob" />
        </div>
    )
}
