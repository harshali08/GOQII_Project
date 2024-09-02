// import React from 'react'

// const Read = () => {
//   return (
//     <div>
//       <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
//     <div className="px-4 py-5 sm:px-6">
//         <h3 className="text-lg leading-6 font-medium text-gray-900">
//             User Data
//         </h3>
//         <p className="mt-1 max-w-2xl text-sm text-gray-500">
//             Details and informations about user.
//         </p>
//     </div>
//     <div className="border-t border-gray-200">
//         <dl>
//             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">
//                     Full name
//                 </dt>
//                 <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     Mickael Poulaz
//                 </dd>
//             </div>
//             <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">
//                     Best techno
//                 </dt>
//                 <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     React JS
//                 </dd>
//             </div>
//             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">
//                     Email address
//                 </dt>
//                 <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     m.poul@example.com
//                 </dd>
//             </div>
//             <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">
//                     Salary
//                 </dt>
//                 <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     $10,000
//                 </dd>
//             </div>
//             <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                 <dt className="text-sm font-medium text-gray-500">
//                     About
//                 </dt>
//                 <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
//                     To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
//                 </dd>
//             </div>
//         </dl>
//     </div>
// </div>
//     </div>
//   )
// }

// export default Read

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Read = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const [user, setUser] = useState(null); // State to store user data

  useEffect(() => {
    // Fetch user data when component mounts
    axios.get(`http://localhost:8081/view/${id}`)
      .then((resp) => {
        setUser(resp.data[0]); // Assuming the API returns an array with a single user object
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Show a loading state while fetching data
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex justify-center items-center mt-5 sm:mt-24'>
      <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg"  style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}>
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-black">
            User Data
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-black">
            Details and information about the user.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-md font-medium text-black">User ID:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.ID}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-md font-medium text-black">Full name:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.Name}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-md font-medium text-black">Email address:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.Email}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-md font-medium text-black">Password:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.Password}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-md font-medium text-black">Date of Birth:</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {new Date(user.DOB).toLocaleDateString()}
              </dd>
            </div>
           
           
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Read;

