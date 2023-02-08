import { Jumbotron, Button } from "react-bootstrap";
import sample from "../assets/harry.mov";

const JumbotronComponent = () => {
  return (
    <>
      <Jumbotron className="jumbotron p-0 bg-transparent">
        <video autoPlay loop muted className="w-100">
          <source src={sample} type="video/mp4" />
        </video>
        <div>
          <h1>Harry potter</h1>
          <h1>and the Deathly Hallows: Part 2</h1>
          <div>
            <Button variant="light" className="px-5 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-play-fill mr-2"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
              </svg>
              Play
            </Button>{" "}
            <Button variant="secondary" className="px-5 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-info-circle mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              More info
            </Button>{" "}
          </div>
        </div>
      </Jumbotron>
    </>
  );
};

export default JumbotronComponent;
