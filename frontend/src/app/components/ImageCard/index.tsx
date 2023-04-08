import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

interface ImageCardProps {
    width: string;
    id: string;
    alt: string;
    src: string;
    height: string;
    location: string;
    name: string;
    description: string;
    price: string;
}

function ImageCard({ width, alt, src, height, location, price, description, id, name }: ImageCardProps) {
    return (
        <Link to={"/booking/" + id}>
            <div className="image-card">
                <img src={src} alt={alt} style={{ width: width, height: height }} />
                <div className="header">
                    <span className="location">{name + ", " + location}</span>
                    <span className="price">{"R$" + price}</span>
                </div>
                <div className="description">
                    <span className="location">{description}</span>
                </div>
            </div>
        </Link>
    );
}

export default ImageCard;

export interface Props {
    src: string;
    id: string;
    name: string;
    alt: string;
    width: string;
    height: string;
    location: string;
    price: string;
    description: string;
}

