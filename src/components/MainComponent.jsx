import { Component } from "react";
import DisplayMovies from "./DisplayMovies";
import { Spinner, Alert } from "react-bootstrap";
import JumbotronComponent from "./JumbotronComponent";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=3e33f678&s=";

class MainComponent extends Component {
  state = {
    harry: [],
    star: [],
    lord: [],
    isLoading: true,
    isError: false,
  };

  fetchAPI = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_BE_URL + "/medias");
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        let harryResult = data.filter((e) => e.Title.includes("Harry"));
        let starResult = data.filter((e) => e.Title.includes("Star"));
        let lordResult = data.filter((e) => e.Title.includes("Lord"));
        this.setState({
          harry: harryResult,
          star: starResult,
          lord: lordResult,
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetchMovies = async (endpoint) => {
  //   try {
  //     let res = await fetch(url + endpoint);

  //     if (res.ok) {
  //       let data = await res.json();
  //       // console.log(data.Search);
  //       endpoint === "harry+potter" &&
  //         this.setState({
  //           harry: data.Search,
  //           isLoading: false,
  //         });
  //       endpoint === "star+wars" &&
  //         this.setState({
  //           star: data.Search,
  //           isLoading: false,
  //         });
  //       endpoint === "lord+of+the+rings" &&
  //         this.setState({
  //           lord: data.Search,
  //           isLoading: false,
  //         });
  //     } else {
  //       this.setState({
  //         isLoading: false,
  //         isError: true,
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidMount() {
    // this.fetchMovies("harry+potter");
    // this.fetchMovies("star+wars");
    // this.fetchMovies("lord+of+the+rings");
    this.fetchAPI();
  }
  render() {
    return (
      <>
        <JumbotronComponent />

        {this.state.isLoading && ( // isLoading is true or false
          <Spinner animation="border" variant="success" />
        )}
        {this.state.isError && <Alert variant="danger">We got an error!</Alert>}

        <DisplayMovies
          row={"Harry Potter Movies"}
          data={this.state.harry}
          movie={"harry+potter"}
        />
        <DisplayMovies
          row={"Star Wars Movies"}
          data={this.state.star}
          movie={"star+wars"}
        />
        <DisplayMovies
          row={"Lord of the Rings Movies"}
          data={this.state.lord}
          movie={"lord+of+the+rings"}
        />
      </>
    );
  }
}

export default MainComponent;
