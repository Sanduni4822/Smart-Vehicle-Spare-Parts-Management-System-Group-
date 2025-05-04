// src/components/accountpage/AccountBreadcrumb.jsx
import React from 'react';

const tabLabels = {
  dashboard: 'My Account',
  orders: 'My Orders',
  wishlist: 'My Wishlist',
  reviews: 'My Reviews',
  editProfile: 'My Profile',
};

const AccountBreadcrumb = ({ selectedTab }) => {
  const label = tabLabels[selectedTab] || 'My Account';

  return (
    <h3 className="text-sm text-gray-500 mb-10">
      Home &gt; <span className="text-gray-800 font-medium">My Account</span>
      {selectedTab !== 'dashboard' && (
        <>
          {' '}
          &gt; <span className="text-gray-800 font-medium">{label}</span>
        </>
      )}
    </h3>
  );
};

export default AccountBreadcrumb;
