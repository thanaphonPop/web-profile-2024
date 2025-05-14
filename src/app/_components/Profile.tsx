import Image from "next/image";
import React from "react";
import Card from "./common/Card";

type Props = {};

const Profile = (props: Props) => {
  return (
    <Card title="Profile">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <Image
            src="/Profile.jpg"
            width={200}
            height={200}
            alt="profile picture"
            className="rounded-full border-4 border-white w-40 h-40 object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="space-y-4 text-center lg:text-left">
          <div>
            <h1 className="text-2xl font-bold">Thanaphon Maneerat</h1>
            <p className="text-base">
              Student from Computer Engineering and Artificial Intelligence
            </p>
          </div>

          <div className="space-y-1 text-sm">
            <p><b>Age:</b> 23</p>
            <p><b>Status:</b> Single</p>
            <p><b>Location:</b> Songkhla</p>
            <p><b>Email:</b> <span>thanaphon.maneerat@gmail.com</span></p>
            <p><b>Phone number:</b> 099-301-7117</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Profile;