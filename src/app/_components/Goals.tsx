import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>Have a very good skill for coding</li>
          <li>Have a owe music studio</li>
          <li>Travel around Europe and American</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
