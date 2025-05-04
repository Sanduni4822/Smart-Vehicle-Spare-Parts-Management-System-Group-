import React from 'react';
import { FaEnvelope, FaUser } from 'react-icons/fa';

const AccountDashboard = ({ user, onEditClick }) => {
  return (
    <div className="bg-white rounded shadow p-6">
      <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-t">
        <h2 className="text-lg font-medium">Account Information</h2>
        <button
          className="text-sm text-gray-500 hover:text-red-600"
          onClick={onEditClick}
        >
          Edit
        </button>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center gap-3">
          <FaUser className="text-xl text-gray-600" />
          <span>{user?.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-xl text-gray-600" />
          <span>{user?.email}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountDashboard;
