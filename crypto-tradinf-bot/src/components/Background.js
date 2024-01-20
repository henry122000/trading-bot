import React, { useState, useEffect } from 'react'
import './Background.css';

const Background = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="background"
            style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        >

        </div>
    );
};

export default Background