import React from "react";
import Card from "./common/Card";

type Props = {};

const Project = (props: Props) => {
  return (
    <Card title="Project">
      <div>
            <ul className="list-inside list-disc">
              <li>Make CNN model for classification rice</li>
              <li>Artificial Intelligence-driven Interactive Tool for Identifying White 
              Blood Cells Types in Hawk Blood in Animal Parasitology Laboratory</li>
              <li>Make Rasume Web Application with Next.js</li>
            </ul>
            
      </div>
    </Card>
  );
};

export default Project;
