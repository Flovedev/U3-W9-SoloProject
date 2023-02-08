import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Container, Spinner } from "react-bootstrap";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=3e33f678&s=";
const commentsUrl = "";

const MovieDetails = () => {
  const params = useParams();
  console.log("Params:", params);

  const [movie, setMovie] = useState([]);
  const [actualMovie, setActualMovie] = useState([]);

  const fetchMovie = async (endpoint) => {
    try {
      let res = await fetch(url + endpoint);
      if (res.ok) {
        let data = await res.json();
        // console.log(data.Search);
        setMovie(data.Search);
      } else {
        console.log("response not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      let res = await fetch(commentsUrl);
      if (res.ok) {
        let data = await res.json();
      } else {
        console.log("response not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie(params.movie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let findMovie = movie.find((e) => e.imdbID === params.movieId);
    setActualMovie(findMovie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie]);

  return (
    <>
      {actualMovie ? (
        <Container className="pt-5">
          <Row className="mt-5">
            <Card className="bg-dark cards-details">
              <Card.Img variant="top" src={actualMovie.Poster} />
              <Card.Body className="">
                <Card.Title>{actualMovie.Title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      ) : (
        <Spinner variant="info" animation="border" />
      )}
    </>
  );
};

export default MovieDetails;
