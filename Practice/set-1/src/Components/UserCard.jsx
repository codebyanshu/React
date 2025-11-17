import React from "react";
import { FaYoutube } from "react-icons/fa6";
import Button from "./Button";
import { CiHeart } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const UserCard = (props) => {
  return (
    <div className="  rounded-lg overflow-hidden shadow-2xl ">
      <div className="w-full aspect-video bg-blue-400 relative ">
        <img
          className="h-full rounded-full aspect-square object-cover absolute left-[50%] -translate-x-1/2 translate-y-1/4 border-4 border-blue-400 p-1 bg-white"
          src={props.ImageUrl}
          alt="error loading image"
        />
      </div>

      <div className="flex flex-col items-center pt-[4rem] ">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <p className="my-2">{props.role}</p>
        <div className="flex gap-4">
          <FaYoutube className="p-1 text-5xl text-red-500" />
         <FaSquareInstagram className="text-4xl mt-1 text-pink-500 "/>
         <FaTwitter className="text-4xl mt-2 text-blue-500"/>
          <FaFacebookSquare className="text-4xl mt-1 text-blue-700" />

        </div>
        <div className="flex gap-[2rem] my-2 pb-2">
          <Button text="Subscribe" />
          <Button text="Message" />
        </div>
        <div className="flex items-center gap-[2rem] pb-3 ">
          <div className="flex items-center text-xl">
            <CiHeart />
            <span>{props.likeCount}</span>
          </div>
          <Line />
          <div className="flex items-center text-xl">
            <CiHeart />
            <span>60k</span>
          </div>
          <Line />

          <div className="flex items-center text-xl">
            <CiHeart />
            <span>60k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Line = () => {
  return <div className="w-[1px] bg-black/20 h-[1.5rem]"></div>;
};

export default UserCard;
