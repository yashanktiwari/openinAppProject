import React from "react";
import { addIcon } from "../utils/icons";

const AddProfileComponent = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center bg-white border border-gray-300 rounded-xl shadow-lg cursor-pointer">

        <div className="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full">
          <span className="text-gray-700">
            {addIcon}
          </span>
        </div>

        <div className="mt-1">
          <span className="text-gray-600">
            Add Profile
          </span>
        </div>
      </div>
    </>
  );
};

export default AddProfileComponent;
