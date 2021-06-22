import React from "react"
import "./SignupSuccess.css"

export const SignupSuccess = () => {
    return (

        <div id="wrapper">
            <div id="content">
                <div id="main">
                    <a href="https://qluster.co">
                        <img id="qluster" src="./assets/images/qluster.svg" alt="Qluster"/>
                    </a>
                    <h1>Thank you</h1>
                    <h2>Your sign up was a success!</h2>
                    <p>We're preparing for lift off so you can explore the markets with us soon</p>
                    <p>Join our Facebook Group to receive the latest updates on early releases and share insights with a
                        friendly
                        community of traders</p>
                </div>
                <div id="links">
                    <img id="facebook" src="./assets/images/facebook.svg" alt="Facebook"/>
                    <a href="https://www.facebook.com/groups/156981244915722">Join our group</a>
                </div>
            </div>
            <img id="background" src="./assets/images/signup-sucess-background.svg" alt="Background"/>
        </div>

    )
}
