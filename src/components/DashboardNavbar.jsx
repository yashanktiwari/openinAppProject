import React from "react";
import { dashboardIcon, scheduleIcon, settingsIcon, transactionIcon, usersIcon } from "../utils/icons";

const DashboardNavbar = () => {

  return (
    <>
      <div className="flex flex-col justify-between bg-gradient-to-b from-[#4285F4] to-[#3C83F9] h-[90vh] py-8 pr-20 pl-12 rounded-2xl">
        <div>
          <div className="my-8">
            <span className="text-white font-bold text-4xl">Board.</span>
          </div>
          <div>
            <ul>
              <li className="text-white text-md py-2 font-bold flex cursor-pointer">
                <span>
                  {dashboardIcon}
                </span>
                <span className="mx-2">Dashboard</span>
              </li>
              <li className="text-white text-md py-2 font-light flex cursor-pointer">
                <span>
                  {transactionIcon}
                </span>
                <span className="mx-2">Transactions</span>
              </li>
              <li className="text-white text-md py-2 font-light flex cursor-pointer">
                <span>
                  {scheduleIcon}
                </span>
                <span className="mx-2">Schedules</span>
              </li>
              <li className="text-white text-md py-2 font-light flex cursor-pointer">
                <span>
                  {usersIcon}
                </span>
                <span className="mx-2">Users</span>
              </li>
              <li className="text-white text-md py-2 font-light flex cursor-pointer">
                <span>
                  {settingsIcon}
                </span>
                <span className="mx-2">Settings</span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul>
            <li className="text-white font-light p-1">Help</li>
            <li className="text-white font-light p-1">Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;