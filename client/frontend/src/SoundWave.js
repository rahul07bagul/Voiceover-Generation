import React from 'react';

const SoundWave = () => {
  const bars = Array.from({ length: 100 });
  
  return (
    <div className="container">
      <div className="wave">
        {bars.map((_, index) => (
          <div
            key={index}
            className="bar"
            style={{
              animationDelay: `${index * 0.05}s`,
              height: `${Math.random() * 60 + 20}px` // Random height between 20px and 80px
            }}
          />
        ))}
      </div>

      <style>
        {`
          html, body {
            height: 100%;
            margin: 0; /* Remove default margin */
          }

          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 40vh; /* Full viewport height to center vertically */
            width: 100vw; /* Full viewport width to cover horizontally */
            margin: 0; /* Remove padding to avoid scroll */
          }
          
          .wave {
            display: flex;
            align-items: center;
            justify-content: space-between; /* Distribute bars evenly */
            width: 100%; /* Full width to cover horizontally */
            gap: 4px;
          }
          
          .bar {
            width: 4px;
            background-color: #3b82f6;
            border-radius: 4px;
            animation: wave 1s ease-in-out infinite;
          }
          
          @keyframes wave {
            0%, 100% {
              transform: scaleY(1);
            }
            50% {
              transform: scaleY(2);
            }
          }
        `}
      </style>
    </div>
  );
};

export default React.memo(SoundWave);