import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleMovie extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col
        className=""
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
        <img src={this.props.img} alt="" />
        {this.state.selected === true && (
          <div className="bg-dark cards-container" disabled>
            <p>{this.props.title}</p>
            <p>{this.props.id}</p>
          </div>
        )}
      </Col>
    );
  }
}

export default SingleMovie;
