import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();

  // Dummy data, replace with real data fetching logic
  const car = {
    id,
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver',
  };

  return (
    <div>
      <h2>Car Details</h2>
      <p>ID: {car.id}</p>
      <p>Brand: {car.brand}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>Color: {car.color}</p>
    </div>
  );
};

export default CarDetails;