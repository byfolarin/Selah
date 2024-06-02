import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const timerId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');

      setHour(hours);
      setMinute(minutes);
      setSeconds(seconds);
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
