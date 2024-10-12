import React, { useEffect, useState } from 'react'

export default function Loader() {
    const [dots, setDots] = useState('');
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDots(prevDots => prevDots.length >= 3 ? '' : prevDots + '.');
      }, 500);
      
      return () => clearInterval(interval);
    }, []);
  
    return <span>Loading{dots}</span>;
}