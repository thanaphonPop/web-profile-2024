import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-blue-100 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/Profile.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Thanaphon Maneerat</h1>
        <p className="text-base">Student from Computer Engineering and Artificial Intelligence</p>
      </div>

      <div className="p-6 mx-1 xl:mx-6 bg-blue-300 rounded-md">
        <p>
          <b>Age:</b> 22
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Songkhla
        </p>
        <p>
          <b>Email:</b>
        </p>
        <p className="truncate ...">thanaphon.ma@mail.wu.ac.th</p>
        <p>
          <b>Phon number:</b> 099-301-7117
        </p>
      </div>
    </div>
  );
};

export default Profile;
