import React from 'react';
import AccountSidebar from '../../components/accountpage/AccountSideBar';

const AccountPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="flex p-6 bg-gray-50 min-h-screen">
      <AccountSidebar />
      {/* Add your right-side content here */}
    </div>
  );
};

export default AccountPage;
