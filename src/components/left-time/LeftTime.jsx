import React, {useState, useEffect} from 'react';
import DisplayTme from '../display-time/DisplayTme';

const calculateTimeLeft = () => {
    const difference = +new Date('2020-01-01') - +new Date();
    let timeLeft = {};
    if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
    return timeLeft;
}

const LeftTime = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setIndex(index + 1);
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        // eslint-disable-next-line
    });

    return (
        <div>
            <DisplayTme key={index} timeLeft={timeLeft}/>
        </div>
    )
}

export default LeftTime;
