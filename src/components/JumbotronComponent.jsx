import { Jumbotron } from "react-bootstrap";
import sample from "https://www.youtube.com/watch?v=mObK5XD8udk";

const JumbotronComponent = () => {
  return (
    <>
      <Jumbotron>
        <video className="videoTag" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
        <h1>Movie title</h1>
        <p>Movie comes here</p>
      </Jumbotron>
    </>
  );
};

export default JumbotronComponent;
