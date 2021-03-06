import React from "react";
import Anime from 'react-anime';
import "../../asset/css/motionMouse.css";
import PropTypes from "prop-types";

function isUndefined(param) {
    if (param === undefined || param === null) {
        return true;
    } else {
        return false;
    }
}

export class AnimateTitle extends React.Component {

    static propTypes = {
        animateDuration: PropTypes.number,
        isLoop: PropTypes.bool,
        animateDelay: PropTypes.number,
        animateClass: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            animateDuration: isUndefined(props.animateDuration) ? 6000 : props.animateDuration,
            isLoop: isUndefined(props.isLoop) ? true : props.isLoop,
            animateDelay: isUndefined(props.animateDelay) ? 300 : props.animateDelay,
            animateClass: isUndefined(props.animateClass) ? "st1" : props.animateClass,
        };
    }

    render() {

        const {animateDuration, isLoop, animateDelay, animateClass} = this.state;

        console.log(animateDuration, isLoop, animateDelay, animateClass)

        return (

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-60 -40 1440 700">
                <Anime easing="easeOutQuad"
                       duration={animateDuration}
                       loop={isLoop}
                       delay={(el, index) => index * animateDelay}
                       strokeDashoffset={(el) => {
                           var pathLength = 0;
                           if (el.getTotalLength) {
                               pathLength = el.getTotalLength();
                               el.setAttribute('stroke-dasharray', pathLength);
                           }
                           return [pathLength, 0];
                       }}>

                    <path className={animateClass} d="M790 341 c0 -183 1 -191 20 -191 12 0 29 16 46 45 14 25 32 45 39 45
                                    19 0 45 -39 45 -67 0 -16 6 -23 20 -23 17 0 20 7 20 39 0 32 -6 44 -35 70
                                    l-35 30 20 33 c26 43 25 48 -5 48 -20 0 -31 -12 -57 -57 l-33 -58 -5 135 c-4
                                    118 -7 135 -22 138 -17 3 -18 -11 -18 -187z"/>
                    <path className={animateClass} d="M2 338 c3 -181 3 -183 25 -186 22 -3 23 0 23 57 l0 61 48 0 47 0 33
                                    -60 c26 -48 38 -60 57 -60 14 0 25 2 25 5 0 2 -15 29 -33 60 l-33 57 32 32
                                    c58 58 55 138 -8 191 -27 23 -38 25 -124 25 l-94 0 2 -182z m199 113 c28 -35
                                    24 -77 -10 -112 -26 -25 -37 -29 -85 -29 l-56 0 0 86 0 86 66 -4 c55 -3 70 -8
                                    85 -27z"/>
                    <path className={animateClass} d="M311 344 c-54 -45 -54 -125 1 -176 25 -23 39 -28 79 -28 40 0 55 5
                                    81 29 30 27 33 35 33 86 0 51 -3 59 -33 86 -44 40 -116 41 -161 3z m12¬0 -27
                                    c45 -34 43 -89 -3 -121 -30 -21 -50 -20 -82 5 -36 28 -36 80 0 108 30 23 61
                                    26 85 8z"/>
                    <path className={animateClass} d="M567 346 c-31 -29 -42 -64 -33 -110 16 -83 131 -117 195 -57 36 34
                                    43 81 12 81 -11 0 -23 -9 -26 -20 -4 -11 -20 -27 -37 -36 -57 -30 -110 15 -94
                                    79 6 24 43 47 74 47 19 0 42 18 42 32 0 4 -24 8 -54 8 -42 0 -58 -5 -79 -24z"/>
                    <path className={animateClass} d="M1010 318 c0 -116 38 -168 122 -168 24 0 49 5 56 12 9 9 12 4 12 -26
                                    0 -28 -7 -45 -29 -67 -16 -16 -37 -29 -46 -29 -20 0 -65 44 -65 65 0 8 -9 15
                                    -20 15 -33 0 -26 -52 11 -89 53 -53 144 -40 178 26 7 13 11 80 11 167 0 139
                                    -1 146 -20 146 -18 0 -20 -7 -20 -61 0 -54 -3 -64 -29 -90 -36 -35 -54 -36
                                    -86 -4 -22 21 -25 33 -25 90 0 63 -1 65 -25 65 -23 0 -25 -3 -25 -52z"/>

                </Anime>
            </svg>

        )
    }
}

export default AnimateTitle;