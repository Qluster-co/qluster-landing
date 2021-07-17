import React from "react"
import { Fade } from "react-awesome-reveal"

export const OverviewContent = () => (
    <div className="content">
        <Fade direction="left" triggerOnce>
            <div>
                <p>Introducing the future of</p>
                <img src="./assets/images/qluster-q.svg" alt="Qluster" />
            </div>
            <h3>Social Trading.</h3>
            <p>
                Qluster's social platform makes it easy for you to find social trading ideas from the convenience of any
                device. Launch into a hivemind of market intelligence and explore the markets with groups of like-minded
                traders from around the world.
            </p>
            <p className="focus">Join verified qlusters and subscribe to unlock exclusive member benefits</p>
            <h4>or form your own.</h4>
        </Fade>
    </div>
)
