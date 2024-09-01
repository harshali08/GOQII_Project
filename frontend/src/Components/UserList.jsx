import React, { useEffect, useState } from "react";
import axios from "axios";

const UserList = ({ refreshData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [refreshData]);

  const fetchData = () => {
    axios
      .get("http://localhost:8081/")
      .then((resp) => setData(resp.data))
      .catch((err) => console.log(err));
  };

  const formatDOB = (dob) => {
    const date = new Date(dob);
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col w-full sm:w-3/5">
        <h1 className="text-2xl text-center font-semibold m-2">All Users</h1>
        <div
          className="-m-1.5 overflow-x-auto"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-800">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-bold text-black uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-bold text-black uppercase"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-bold text-black uppercase"
                    >
                      Date Of Birth
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-sm font-bold text-black uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((user, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {user.Name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {user.Email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {formatDOB(user.DOB)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                        <button
                          type="button"
                          className="bg-blue-600 px-2 py-1 text-white inline-flex items-center mx-1 gap-x-2 text-xsm font-semibold rounded-md border"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="bg-red-600 px-2 py-1 text-white inline-flex items-center mx-1 gap-x-2 text-xsm font-semibold rounded-md border"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
