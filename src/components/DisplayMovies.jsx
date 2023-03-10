import SingleMovie from "./SingleMovie";
import { Carousel, Container, Row } from "react-bootstrap";
import { useEffect } from "react";

const DisplayMovies = ({ row, data, movie }) => {
  const fetchAPI = async () => {
    try {
      const res = await fetch(process.env.REACT_APP_BE_URL + "/medias");
      if (res.ok) {
        const data = await res.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="displayers mx-4 mb-4">
      <h3 className="mb-4">{row}</h3>
      <Carousel interval={1000000}>
        <Carousel.Item>
          <Container fluid>
            <Row xs={1} sm={2} md={3} lg={5}>
              {data.slice(0, 5).map((res) => {
                return (
                  <SingleMovie
                    title={res.Title}
                    img={res.Poster}
                    id={res.imdbID}
                    movie={movie}
                    key={res.imdbID}
                  />
                );
              })}
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid>
            <Row xs={1} sm={2} md={3} lg={5}>
              {data.slice(5, 10).map((res) => {
                return (
                  <SingleMovie
                    title={res.Title}
                    img={res.Poster}
                    id={res.imdbID}
                    movie={movie}
                    key={res.imdbID}
                  />
                );
              })}
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default DisplayMovies;
