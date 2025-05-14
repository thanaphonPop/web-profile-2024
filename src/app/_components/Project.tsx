import React from "react";
import Card from "./common/Card";

type Props = {};

const Project = (props: Props) => {
  return (
    <Card title="Project">
      <div className="relative border-l-4 border-orange-500">

        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-orange-500"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">2025</time>
            <h2 className="mb-2 text-sm font-semibold">Make Rasume Web Application with Next.js</h2>
          </div>
        </div>
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-orange-500"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">2024-2025</time>
            <h2 className="mb-2 text-sm font-semibold">Make Job applicants Dashboard and Entrepreneur Dashboard for JOBBKK</h2>
          </div>
          
        </div>
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-orange-500"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">2024-2025</time>
            <h2 className="mb-2 text-sm font-semibold">Creating a hotel job search page for JOBBKK</h2>
          </div>
          
        </div>
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-orange-500"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">2024-2025</time>
            <h2 className="mb-2 text-sm font-semibold">Creating a Treading search page for the back-end system for JOBBKK</h2>
          </div>
          
        </div>
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-orange-500"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">2023-2024</time>
            <h2 className="mb-2 text-sm font-semibold">Artificial Intelligence-driven Interactive Tool for Identifying White 
            Blood Cells Types in Hawk Blood in Animal Parasitology Laboratory</h2>
          </div>
          
        </div>
        <div className="mb-5 ml-4">
          <div className="absolute -left-2 mt-1.5 h-3 w-3 rounded-full border border-white bg-orange-500"></div>
          <div className="rounded-lg bg-white p-2 shadow-md">
            <time className="text-sm font-semibold text-gray-500">2023</time>
            <h2 className="mb-2 text-sm font-semibold">Make CNN model for classification rice</h2>
        </div>

        </div>
      </div>
    </Card>
  );
};

export default Project;
