import React, { useState } from 'react';

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState('');

  const handleSignIn = () => {
    if (username.trim() !== '') {
      onSignIn(username);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;