import React, {useEffect } from 'react'
import './Background.css';

const Background = () => {
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const backgroundPosition = `center ${scrollPosition * 0.5}px`;
          document.body.style.backgroundPosition = backgroundPosition;
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="background"
        >

        </div>
    );
};

export default Background