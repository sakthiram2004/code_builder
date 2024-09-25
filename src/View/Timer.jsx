// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Timer = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const navigate = useNavigate();

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentTime(new Date()); // Update the current time every second
//     }, 1000);
  
//     // Navigate when a certain condition is met (for example, 10:00 PM)
//     const targetHour = 2; 
//     const targetMinute = 0;
//     const targetSecond  = 0;
//     if (currentTime.getHours() === targetHour && currentTime.getMinutes() === targetMinute && currentTime.getSeconds() === targetSecond) {
//       navigate('/questions'); // Navigate to another page when the condition is met
//     }

//     return () => clearInterval(intervalId);
//      // Clear the interval on component unmount
//   }
//   , [currentTime, navigate]
// );

//   return (
    
//     <div>
//       <h1>
//         Real-Time Clock: {currentTime.toLocaleTimeString()} {/* Display real-time time */}
//       </h1>
//     </div>
//   );
// };

// export default Timer;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft()); // Initial time left
  const navigate = useNavigate();

  // Function to calculate remaining time in seconds
  function calculateTimeLeft() {
    const targetTime = new Date().getTime() + 5 * 60 * 1000; // Countdown for 5 minutes
    const currentTime = new Date().getTime();
    return Math.max(targetTime - currentTime, 0); // Ensure non-negative time left
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const remainingTime = calculateTimeLeft();
      setTimeLeft(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(intervalId); // Clear interval when time reaches 0
        navigate('/another-page'); // Navigate to another page
      }
    }, 1000);

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [navigate]);

  // Helper function to format time in MM:SS
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Time Left: {formatTime(timeLeft)}</h1>
    </div>
  );
};

export default Timer;