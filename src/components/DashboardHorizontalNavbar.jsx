import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const DashboardHorizontalNavbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // User is signed out
        localStorage.clear();
      })
      .catch(() => {
        // Some error occurred
      });
  };

  return (
    <>
      <div className="flex justify-between h-fit items-center w-full">
        <div>
          <span className="font-bold text-3xl">Dashboard</span>
        </div>
        <div className="flex items-center">
          {/* Search bar div */}
          <div className="flex h-fit items-center bg-white px-5 py-2 rounded-xl">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search..."
              className="text-sm focus:outline-none"
            />
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          {/* Notification icon */}
          <span className="mx-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </span>

          {/* User image */}
          {user?.photoURL !== undefined ? (
            <div>
              <img
                src={user.photoURL}
                onClick={handleLogout}
                className="w-8 h-8 rounded-full cursor-pointer"
                alt="user"
                title=" Logout "
              />
            </div>
          ) : (
            <div>
              <img
                src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="
                onClick={handleLogout}
                className="w-10 h-10 rounded-full cursor-pointer"
                alt="user"
                title=" Logout "
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardHorizontalNavbar;
