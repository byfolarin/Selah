import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [seconds, setSeconds] = useState('00');

useEffect(() => {
    const timerId = setInterval(() => {
      const date = new Date();
      setHour(date.getHours());
      setMinute(date.getMinutes());
      setSeconds(date.getSeconds());

    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1 onClick={() => { /* Handle click if needed */ }} className='setH1'>
        {hour}: {minute}: {seconds}
      </h1>
    </div>
  );
};

export default Timer;
