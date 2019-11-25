import React from 'react';

const DisplayTme = ({timeLeft}) => {

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComponents.push(
                <span>
                    {timeLeft[interval]} {interval}{" "}
                </span>
        )
    })

    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    )
}

export default DisplayTme;
