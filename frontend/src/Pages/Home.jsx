import React, { useState } from "react";
import AddUser from "../Components/AddUser";
import UserList from "../Components/UserList";

const Home = () => {
  const [showAddUser, setShowAddUser] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleUserAdded = () => {
    setRefresh((prev) => !prev);
    setShowAddUser(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowAddUser(true)}
        className="fixed top-4 right-4 z-20 flex w-32 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add User
      </button>
      <UserList refreshData={refresh} />

      {showAddUser && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md relative">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowAddUser(false)}
                className="absolute top-2 right-2 z-40 flex w-20 justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white"
              >
                Close
              </button>
            </div>
            <AddUser
              onClose={() => setShowAddUser(false)}
              onUserAdded={handleUserAdded}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
