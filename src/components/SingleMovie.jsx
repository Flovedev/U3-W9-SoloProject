import { Component } from "react";
import { Col } from "react-bootstrap";

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
        <div className="cards-main">
          <img src={this.props.img} alt="" className="w-100" />
          {this.state.selected === true && (
            <div className="bg-dark cards-container" disabled>
              <p className="px-2 pb-0">{this.props.title}</p>
            </div>
          )}
        </div>
      </Col>
    );
  }
}

export default SingleMovie;
