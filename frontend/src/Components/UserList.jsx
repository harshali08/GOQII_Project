import React from "react";

const UserList = () => {
  return (
    <div className="flex justify-center mt-20">
    
      <div
        className="flex flex-col w-full sm:w-3/5  "
       
      >
      <h1 className="text-2xl text-center font-semibold m-2">All Users</h1>
        <div className="-m-1.5 overflow-x-auto"  style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}>
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y  divide-gray-800 ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-bold  text-black uppercase  "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-bold  text-black uppercase   "
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-sm font-bold  text-black uppercase  "
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-end text-sm font-bold  text-black uppercase  "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      John Brown
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      45
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      New York No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="bg-blue-600 px-2 py-1 text-white inline-flex items-center mx-1 gap-x-2 text-xsm font-semibold rounded-md border "
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="bg-red-600 px-2 py-1 text-white inline-flex items-center mx-1 gap-x-2 text-xsm font-semibold rounded-md border "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Jim Green
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      27
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      London No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="bg-blue-600 px-2 py-1 text-white inline-flex items-center mx-1 gap-x-2 text-xsm font-semibold rounded-md border "
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="bg-red-600 px-2 py-1 text-white inline-flex items-center mx-1 gap-x-2 text-xsm font-semibold rounded-md border "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Joe Black
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      31
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      Sidney No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="bg-blue-600 px-2 py-1 text-white inline-flex items-center mx-1 gap-x-2 text-xsm font-semibold rounded-md border "
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="bg-red-600 px-2 py-1 text-white inline-flex items-center mx-1 gap-x-2 text-xsm font-semibold rounded-md border "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Edward King
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      16
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      LA No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="bg-blue-600 px-2 py-1 text-white inline-flex items-center mx-1 gap-x-2 text-xsm font-semibold rounded-md border "
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="bg-red-600 px-2 py-1 text-white inline-flex items-center mx-1 gap-x-2 text-xsm font-semibold rounded-md border "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-100 ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      Jim Red
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      45
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                      Melbourne No. 1 Lake Park
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        type="button"
                        className="bg-blue-600 px-2 py-1 text-white inline-flex items-center mx-1 gap-x-2 text-xsm font-semibold rounded-md border "
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="bg-red-600 px-2 py-1 text-white inline-flex items-center mx-1 gap-x-2 text-xsm font-semibold rounded-md border "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
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
