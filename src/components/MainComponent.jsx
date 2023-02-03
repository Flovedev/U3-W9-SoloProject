import { Component } from "react";
import DisplayMovies from "./DisplayMovies";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=3e33f678&s=";

class MainComponent extends Component {
  state = {
    harry: [],
    star: [],
    lord: [],
  };

  fetchMovies = async (endpoint) => {
    try {
      let res = await fetch(url + endpoint);

      if (res.ok) {
        let data = await res.json();
        console.log(data.Search);
        endpoint === "harry+potter" &&
          this.setState({
            harry: data.Search,
          });
        endpoint === "star+wars" &&
          this.setState({
            star: data.Search,
          });
        endpoint === "lord+of+the+rings" &&
          this.setState({
            lord: data.Search,
          });
      } else {
        console.log("response not ok");
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
