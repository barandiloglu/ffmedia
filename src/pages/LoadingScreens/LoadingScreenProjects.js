import React, { useEffect, useState } from 'react';
import './LoadingScreenProjects.css';

export const LoadingScreenServices = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 500); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`loading-screen ${visible ? '' : 'hidden'}`}>
        
    </div>
  );
};

export default LoadingScreenServices;
