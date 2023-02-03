import { Component } from "react";
import DisplayMovies from "./DisplayMovies";
import { Spinner, Alert } from "react-bootstrap";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=3e33f678&s=";

class MainComponent extends Component {
  state = {
    harry: [],
    star: [],
    lord: [],
    isLoading: true,
    isError: false,
  };

  fetchMovies = async (endpoint) => {
    try {
      let res = await fetch(url + endpoint);

      if (res.ok) {
        let data = await res.json();
        // console.log(data.Search);
        endpoint === "harry+potter" &&
          this.setState({
            harry: data.Search,
            isLoading: false,
          });
        endpoint === "star+wars" &&
          this.setState({
            star: data.Search,
            isLoading: false,
          });
        endpoint === "lord+of+the+rings" &&
          this.setState({
            lord: data.Search,
            isLoading: false,
          });
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchMovies("harry+potter");
    this.fetchMovies("star+wars");
    this.fetchMovies("lord+of+the+rings");
  }
  render() {
    return (
      <>
        {this.state.isLoading && ( // isLoading is true or false
          <Spinner animation="border" variant="success" />
        )}
        {this.state.isError && <Alert variant="danger">We got an error!</Alert>}

        <DisplayMovies row={"Harry Potter Movies"} data={this.state.harry} />
        <DisplayMovies row={"Star Wars Movies"} data={this.state.star} />
        <DisplayMovies
          row={"Lord of the Rings Movies"}
          data={this.state.lord}
        />
      </>
    );
  }
}

export default MainComponent;
