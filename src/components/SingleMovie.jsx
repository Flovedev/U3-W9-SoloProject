import { Component } from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class SingleMovie extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col
        className="cards-all"
        onMouseEnter={() => {
          this.setState({
            selected: true,
          });
        }}
        onMouseLeave={() => {
          this.setState({
            selected: false,
          });
        }}
      >
        <div className="cards-main">
          <img src={this.props.img} alt="" className="w-100" />
          {this.state.selected === true && (
            <>
              <div className="cards-container" disabled>
                <Link to={"/details/" + this.props.movie + "/" + this.props.id}>
                  <Button variant="warning">Details</Button>
                </Link>
                <p className="px-2 pb-0 bg-dark">{this.props.title}</p>
              </div>
            </>
          )}
        </div>
      </Col>
    );
  }
}

export default SingleMovie;
