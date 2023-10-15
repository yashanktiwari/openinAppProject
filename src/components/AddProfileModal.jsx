import React, { useRef, useState } from "react";

const AddProfileModal = ({ setFlag, flag }) => {
  const [basicflag, setBasicFlag] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [insta, setInsta] = useState("");
  const [youtube, setYoutube] = useState("");

  const handleModalSubmit = (e) => {
    e.preventDefault();
    console.log(name.length);

    if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      phone.length > 10
    ) {
      setBasicFlag(true);
      setError("Please fill all the required fields correctly");
    } else {
      const isEmailValid =
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
      if (isEmailValid) {
        const data = {
          name: name,
          email: email,
          phone: phone,
          insta: insta,
          youtube: youtube,
        };
        localStorage.setItem("data", JSON.stringify(data));
        setFlag(false);
      } else {
        setBasicFlag(true);
        setError("Please fill correct email");
      }
    }
  };

  return (
    <>
      <div className="absolute bg-white-700 bg-opacity-30">
        <form className="bg-white p-6 rounded-xl">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg ">Add new Profile</span>
            <span
              className="hover:bg-gray-200 cursor-pointer rounded-full p-1"
              onClick={() => {
                setFlag(false);
              }}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/737373/multiply.png"
                alt="multiply"
              />
            </span>
          </div>

          <div className="flex flex-col justify-between w-[22vw] mt-5">
            <div className="w-full mx-auto flex justify-around">
              <span
                className="pl-5 text-md cursor-pointer"
                onClick={() => {
                  setBasicFlag(true);
                }}
              >
                Basic
              </span>
              <span
                className="pr-5 text-md cursor-pointer"
                onClick={() => {
                  setBasicFlag(false);
                }}
              >
                Contact
              </span>
            </div>
            <div className="flex w-full ">
              <hr
                className={
                  basicflag
                    ? "h-1 bg-blue-400 w-full mx-1"
                    : "h-1 bg-gray-400 w-full mx-1"
                }
              />
              <hr
                className={
                  !basicflag
                    ? "h-1 bg-blue-400 w-full mx-1"
                    : "h-1 bg-gray-400 w-full mx-1"
                }
              />
            </div>
          </div>
          {basicflag ? (
            <>
              <div className="flex flex-col my-4">
                <label htmlFor="name" className="text-md">
                  Enter Name*
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Eg. John Doe"
                  className="border border-gray-200 p-2 rounded-lg my-2"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
                <label htmlFor="email" className="text-md">
                  Enter Email*
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Eg. John@XYZ.com"
                  className="border border-gray-200 p-2 rounded-lg my-2"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                <label htmlFor="phone" className="text-md">
                  Enter Phone*
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Eg. 9123456789"
                  className="border border-gray-200 p-2 rounded-lg my-2"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  value={phone}
                />
                <span className="text-red-500 mt-2">{error}</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col my-4">
                <label htmlFor="name" className="text-md">
                  Instagram Link{" "}
                  <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Eg. ..instagram.com/username"
                  className="border border-gray-200 p-2 rounded-lg my-2"
                  onChange={(e) => {
                    setInsta(e.target.value);
                  }}
                  value={insta}
                />
                <label htmlFor="email" className="text-md">
                  Youtube Link <span className="text-gray-400">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Eg. ..youtube/username"
                  className="border border-gray-200 p-2 rounded-lg my-2"
                  onChange={(e) => {
                    setYoutube(e.target.value);
                  }}
                  value={youtube}
                />
              </div>
            </>
          )}

          {basicflag ? (
            <>
              <div className="w-full flex justify-end">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setBasicFlag(false);
                  }}
                  className="bg-blue-500 text-white py-1 px-4 rounded-lg"
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="w-full flex justify-end">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setBasicFlag(true);
                  }}
                  className="text-black py-1 px-4 rounded-lg mx-2 border border-gray-400"
                >
                  Back
                </button>
                <button
                  onClick={handleModalSubmit}
                  className="bg-blue-500 text-white py-1 px-4 rounded-lg"
                >
                  Done
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default AddProfileModal;
