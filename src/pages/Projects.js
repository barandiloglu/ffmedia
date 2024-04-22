import React, {useEffect, useState} from 'react'

import LoadingScreen from './LoadingScreens/LoadingScreenProjects';

export const Projects = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); 
    return () => clearTimeout(timeout);
  }, []);


  return (
    <div>
        <>{loading && <LoadingScreen />}</>
        <div className='flex min-h-screen bg-primary'>
          Projects
        </div>
    </div>
  )
}

export default Projects;
