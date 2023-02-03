import { Dropdown } from "react-bootstrap";
import JumbotronComponent from "./JumbotronComponent";

const HeadComponent = () => {
  return (
    <>
      <div className="d-flex">
        <h2>Movies</h2>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">Genres</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <JumbotronComponent />
    </>
  );
};

export default HeadComponent;
