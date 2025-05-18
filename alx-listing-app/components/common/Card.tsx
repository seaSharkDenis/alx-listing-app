import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, imageUrl, price }) => (
  <div className="border rounded-lg overflow-hidden shadow-md">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-500">${price}</p>
    </div>
  </div>
);

export default Card;