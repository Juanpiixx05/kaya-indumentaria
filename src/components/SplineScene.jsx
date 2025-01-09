import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  const [scene, setScene] = useState('https://prod.spline.design/RTPTljxm9phGIGQ3/scene.splinecode');

  useEffect(() => {
    const handleThemeChange = () => {
      const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
      setScene(
        isDarkMode 
        ? 'https://prod.spline.design/RTPTljxm9phGIGQ3/scene.splinecode' 
        : 'https://prod.spline.design/NLRGRXxNtpBqLqjp/scene.splinecode'
      );
    };

    // Initial theme check
    handleThemeChange();

    // Listen for theme changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['data-theme'] 
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Spline 
      scene={scene}
      style={{
        width: '100%', 
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    />
  );
}
