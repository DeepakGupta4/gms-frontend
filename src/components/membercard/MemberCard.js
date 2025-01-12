import React from "react";
import CircleIcon from '@mui/icons-material/Circle';

const MemberCard = () => {
  return (
    <div className="bg-white rounded-lg p-3 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white cursor-pointer">
      <div className="w-28 h-28 flex justify-center relative items-center border-2 p-1 mx-auto rounded-full">
        <img
          className="w-full h-full rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaayGxGsQJPuqoumnN5eSJNfvcg82sIyiEag&s"
          alt="Profile Pic"
        />
        <CircleIcon
          className="absolute top-0 left-0"
          sx={{ color: "greenyellow" }}
        />
      </div>

      <div className="mx-auto mt-5 text-center text-xl font-semibold font-mono">
        {"Deepak Gupta"}
      </div>
      <div className="mx-auto text-center mt-2 text-xl font-mono">
        {"+91 " + "9369560031"}
      </div>
      <div className="mx-auto text-center mt-2 text-xl font-mono">
        Next Bill Date : {"31-01-2025"}
      </div>
    </div>
  );
};

export default MemberCard;
