import React from 'react';
import { Link } from 'react-router-dom';

const CarList = () => {
  const cars = [
    { id: 1, brand: 'Toyota', model: 'Camry' },
    { id: 2, brand: 'Honda', model: 'Civic' },
    { id: 3, brand: 'Ford', model: 'Mustang' },
  ];

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <Link to={`/cars/${car.id}`}>{`${car.brand} ${car.model}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;