import React, { useEffect, useState } from 'react';
import './LoadingScreenServices.css';

export const LoadingScreenServices = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 500); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`loading-screen-services ${visible ? '' : 'hidden'}`}>
        
    </div>
  );
};

export default LoadingScreenServices;
