import {
  faDocker,
  faJava,
  faJs,
  faPhp,
  faPython,
  faReact,
  faNodeJs,
  faVuejs,
  faHtml5,
  faGithub,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./common/Card";

type Props = {};

const Skill = (props: Props) => {
  return (
    <Card title="Skill">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="text-center">
          <FontAwesomeIcon icon={faPhp} className="h-10" />
          <p>PHP</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faPython} className="h-10" />
          <p>Python</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faReact} className="h-10" />
          <p>React</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJava} className="h-10" />
          <p>Java</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJs} className="h-10" />
          <p>JS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faNodeJs} className="h-10" />
          <p>Node.js</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faHtml5} className="h-10" />
          <p>HTML5</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faCss3} className="h-10" />
          <p>CSS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faGithub} className="h-10" />
          <p>Github</p>
        </div>
      </div>
    </Card>
  );
};

export default Skill;
