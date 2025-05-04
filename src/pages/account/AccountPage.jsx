import React, { useState } from 'react';
import AccountSidebar from '../../components/accountpage/AccountSideBar';
import AccountDashboard from '../../components/accountpage/AccountDashboard';
import EditProfileForm from '../../components/accountpage/EditProfileForm';
import MyOrders from '../../components/accountpage/MyOrders';
import MyWishlist from '../../components/accountpage/MyWishlist'; 
import MyReviews from '../../components/accountpage/MyReviews';
import AccountSectionTemplate from '../../components/accountpage/AccountSectionTemplate';

const AccountPage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [selectedTab, setSelectedTab] = useState('dashboard');

  return (
    <div className="flex p-6 bg-gray-50 min-h-screen gap-6">
      <AccountSidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="flex-1">
        {selectedTab === 'dashboard' && (
          <AccountDashboard user={user} onEditClick={() => setSelectedTab('editProfile')} />
        )}
        {selectedTab === 'editProfile' && <EditProfileForm user={user} />}
        {selectedTab === 'orders' && <MyOrders />}
        {selectedTab === 'wishlist' && <MyWishlist />} 
        {selectedTab === 'reviews' && <MyReviews />}
      </div>
    </div>
  );
};

export default AccountPage;
