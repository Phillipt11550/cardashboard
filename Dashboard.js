import React, { useState } from 'react';
import DataTable from './DataTable';
import SignIn from './SignIn';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = (username) => {
    setUser(username);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user}!</h2>
          <button onClick={handleSignOut}>Sign Out</button>
          <DataTable />
        </>
      ) : (
        <SignIn onSignIn={handleSignIn} />
      )}
    </div>
  );
};

export default Dashboard;