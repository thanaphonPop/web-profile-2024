import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>Learn all music instrument in this world</li>
          <li>Make machine learning that can change world</li>
          <li>Learn a new coding skill</li>
          <li>Have a owe music studio</li>
          <li>Travel around Europe and American</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
