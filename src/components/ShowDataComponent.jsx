import React from "react";
import email from "../assets/email.png";
import insta from "../assets/insta.png";
import whatsapp from "../assets/whatsapp.png";
import youtube from "../assets/youtube.png";

const ShowDataComponent = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  return (
    <>
      <div className="w-full h-full flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow-lg py-3 px-6">
        <div className="w-full mb-2">
          <span className="font-semibold text-lg">{data.name}</span>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <span><img src={whatsapp} alt="phone" className="inline pr-2 py-4"/></span><span>{data.phone}</span>
          </div>
          {data.insta.length ? <div>
            <span><img src={insta} alt="instagram" className="inline pr-2 py-4"/></span><span>{data.insta}</span>
          </div> : null}
        </div>
        <div className="w-full flex justify-between">
          <div>
            <span><img src={email} alt="email" className="inline pr-2 py-4"/></span><span>{data.email}</span>
          </div>
          {data.youtube.length ? <div>
            <span><img src={youtube} alt="youtube" className="inline pr-2 py-4"/></span><span>{data.youtube}</span>
          </div> : null}
        </div>
      </div>
    </>
  );
};

export default ShowDataComponent;
