import React from "react"
import "./Landing.css"

export const Landing = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <div id="intro" className="fold">
                    <div id="menu">
                        <a href="#intro">
                            <img id="qluster" src="./assets/images/qluster.svg" alt="Qluster" />
                        </a>
                        <a>
                            <img id="burger" src="./assets/images/menu.svg" alt="Menu" />
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
                    <div className="content">
                        <div>
                            <p>Introducing the future of</p>
                            <img src="./assets/images/qluster-q.svg" alt="Qluster" />
                        </div>
                        <h3>Social Trading.</h3>
                        <p>Qluster's social platform makes it easy for you to find social trading ideas from the
                            convenience of
                            any
                            device. Launch into a hivemind of market intelligence and explore the markets with groups of
                            like-minded
                            traders from around the world.</p>
                        <p className="focus">Join verified qlusters and subscribe to unlock exclusive member
                            benefits</p>
                        <h4>or form your own.</h4>
                    </div>
                    <div className="action">
                        <h2>Sign up now for early access</h2>
                        <a href="#signup">
                            <img src="./assets/images/down-round.svg" alt="down" />
                        </a>
                    </div>
                </div>
                <div id="signup" className="fold">
                    <div>
                        <h2>Save your early access pass to trading made social</h2>
                        <img src="./assets/images/right.svg" alt="look right" />
                        <p>Receive the confirmation email to get started now</p>
                    </div>
                    <div>
                        <img src="./assets/images/qluster-white.svg" alt="qluster" />
                        <form name="contact" method="post" action="./signup-success.html" data-netlify="true">
                            <input name="email" placeholder="Enter your email address" />
                            <button>Sign Up</button>
                        </form>
                    </div>
                </div>
                <div id="research" className="fold">
                    <div>
                        <img src="./assets/images/qluster.svg" alt="qluster" />
                        <p>We do the heavy lifting for you.</p>
                        <p> Access detailed fundamental & technical intelligence with on-chain data analytics in our
                            fortnightly
                            report.</p>
                        <p>Explore the markets with Qluster: Research</p>
                    </div>
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
        </div>
    )
}
