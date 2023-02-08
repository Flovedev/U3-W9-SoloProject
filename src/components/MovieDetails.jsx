import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Row, Container, Spinner } from "react-bootstrap";
import SingleComment from "./SingleComment";

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=3e33f678&s=";
const commentsUrl = "https://striveschool-api.herokuapp.com/api/comments/";
let options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RiYjU3YTUwMWZlODAwMTU2MGMyMjEiLCJpYXQiOjE2NzUzNDMyMjYsImV4cCI6MTY3NjU1MjgyNn0.kD8SKBkO7B3HP-huMyKWWJhUSkujtWi4yirP9xz6SSA",
  },
};

const MovieDetails = () => {
  const params = useParams();
  //   console.log("Params:", params);

  const [movie, setMovie] = useState([]);
  const [actualMovie, setActualMovie] = useState([]);
  const [comments, setComments] = useState([]);

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
      let res = await fetch(commentsUrl + params.movieId, options);
      if (res.ok) {
        let data = await res.json();
        setComments(data);
      } else {
        console.log("response not ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie(params.movie);
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(comments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comments]);

  useEffect(() => {
    let findMovie = movie.find((e) => e.imdbID === params.movieId);
    setActualMovie(findMovie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie]);

  return (
    <>
      {actualMovie ? (
        <Container className="py-5">
          <Row className="mt-5">
            <Card className="bg-dark cards-details">
              <Card.Img
                variant="top"
                className="w-100"
                src={actualMovie.Poster}
              />
              <Card.Body className="">
                <Card.Title>{actualMovie.Title}</Card.Title>
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
        <Spinner variant="info" animation="border" />
      )}
    </>
  );
};

export default MovieDetails;
