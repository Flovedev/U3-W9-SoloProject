import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Container, Spinner, Alert } from "react-bootstrap";
import SingleComment from "./SingleComment";

// const url = "http://www.omdbapi.com/?i=tt3896198&apikey=3e33f678&s=";
// const commentsUrl = "https://striveschool-api.herokuapp.com/api/comments/";
// let options = {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYjU3YTUwMWZlODAwMTU2MGMyMjEiLCJpYXQiOjE2NzUzNDMyMjYsImV4cCI6MTY3NjU1MjgyNn0.kD8SKBkO7B3HP-huMyKWWJhUSkujtWi4yirP9xz6SSA",
//   },
// };

const MovieDetails = () => {
  const params = useParams();
  //   console.log("Params:", params);

  const [movie, setMovie] = useState([]);
  // const [actualMovie, setActualMovie] = useState([]);
  const [comments, setComments] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchMovie = async () => {
    try {
      let res = await fetch(
        process.env.REACT_APP_BE_URL + "/medias/" + params.movieId
      );
      if (res.ok) {
        let data = await res.json();
        setMovie(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      let res = await fetch(
        process.env.REACT_APP_BE_URL + "/medias/" + params.movieId + "/reviews"
      );
      if (res.ok) {
        let data = await res.json();
        // console.log(data);
        setComments(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   let findMovie = movie.find((e) => e.imdbID === params.movieId);
  //   setActualMovie(findMovie);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [movie]);

  return (
    <>
      {movie ? (
        <Container className="py-5 details-container">
          <Row className="mt-5">
            <Card className="bg-dark cards-details">
              <Card.Img variant="top" className="w-100" src={movie.Poster} />
              <Card.Body className="">
                <Card.Title>{movie.Title}</Card.Title>
              </Card.Body>
            </Card>
            <div className="ml-4">
              {comments.map((e) => {
                return (
                  <SingleComment
                    key={e._id}
                    comment={e.comment}
                    rate={e.rate}
                  />
                );
              })}
            </div>
          </Row>
        </Container>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          id="problems-handle"
        >
          {isLoading && ( // isLoading is true or false
            <Spinner animation="border" variant="success" />
          )}
          {isError && <Alert variant="danger">We got an error!</Alert>}
        </div>
      )}
    </>
  );
};

export default MovieDetails;
