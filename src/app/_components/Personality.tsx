import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Mediator (INFP-T)</p>
        <p className="pb-2">
        Mediators are poetic, kind, and altruistic people, always eager to help a good cause.
        </p>
        <div className="flex gap-1">
          <Badge>INTROVERTED</Badge>
          <Badge>INTUITIVE</Badge>
          <Badge>FEELING</Badge>
          <Badge>PROSPECTING</Badge>
          <Badge>TURBULENT</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
