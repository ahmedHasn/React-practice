import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const ReactSpringAnimation = () => {

    const [on, toggle] = useState(false);

    const animation = useSpring({
        color: on ? 'blue': 'red'
    });

    const colorAnimation = useSpring({
        from: { color: "blue" },
        to: { color: `rgb(255,0,0)` }
    });

    const multiAnimation = useSpring({
        from: { opacity: 0, color: "red" },
        to: [
            { opacity: 1, color: "#ffaaee" },
            { opacity: 1, color: "red" },
            { opacity: 0.5, color: "#008000" },
            { opacity: 0.8, color: "black" }
        ]
    });

    return(
        <div>
            <animated.h1 style={animation}>Hello world</animated.h1>
            <animated.h1 style={colorAnimation}>Hello world</animated.h1>
            <animated.h1 style={multiAnimation}>Hello world</animated.h1>
            <button onClick={() => toggle(!on)}>Toggle</button>
        </div>
    );
};

export default ReactSpringAnimation;
