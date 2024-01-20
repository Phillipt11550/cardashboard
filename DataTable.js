import React from 'react';

const DataTable = () => {
  // Dummy data, replace with your actual data fetching logic
  const data = [
    { id: 1, name: 'Item 1', price: 10.99 },
    { id: 2, name: 'Item 2', price: 19.99 },
    { id: 3, name: 'Item 3', price: 14.99 },
    // Add more data as needed
  ];

  return (
    <div>
      <h3>Data Table</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;