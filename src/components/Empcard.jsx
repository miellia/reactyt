import React from "react";

const Empcard = (props) => {
  return (
    <div>
      <div className="w-72 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 mx-auto">
        {/* Avatar Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 flex justify-center items-center">
          <img
            src={props.avatar}
            alt="Avatar"
            className="w-20 h-20 rounded-full border-4 border-white shadow-sm"
          />
        </div>
        {/* Content Section */}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 text-center">
            {props.name}
          </h2>
          <p className="text-gray-500 text-center text-sm mt-1">
            ID: {props.id}
          </p>
          <p className="text-gray-600 text-center text-md mt-2 font-medium">
            {props.designation}
          </p>
          <div className="mt-3 text-center">
            <span className="text-sm font-semibold text-gray-500">
              Joined on:
            </span>
            <span className="text-sm font-medium text-gray-800 ml-1">
              {props.joiningDate}
            </span>
          </div>
        </div>
        {/* Action Section */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
          <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-300">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Empcard;
