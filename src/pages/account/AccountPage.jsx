import React from 'react';

const AccountPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold text-green-600">Welcome, {user?.email || 'Guest'}</h1>
        <p className="text-gray-600 mt-2">You are now logged in.</p>
      </div>
    </div>
  );
};

export default AccountPage;
