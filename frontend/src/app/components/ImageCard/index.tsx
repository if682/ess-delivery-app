import React from 'react';
import './index.css';

interface ImageCardProps {
    width: string;
    alt: string;
    src: string;
    height: string;
    location: string;
    description: string;
    price: string;
}

function ImageCard({ width, alt, src, height, location, price, description }: ImageCardProps) {
    return (
        <div className="image-card">
            <img src={src} alt={alt} style={{ width: width, height: height }} />
            <div className="header">
                <span className="location">{location}</span>
                <span className="price">{price}</span>
            </div>
            <div className="description">
                <span className="location">{description}</span>
            </div>
        </div>
    );
}

export default ImageCard;