import SingleMovie from "./SingleMovie";
import { Carousel, Container, Row } from "react-bootstrap";

const DisplayMovies = ({ row, data }) => {
  return (
    <>
      <h3>{row}</h3>
      <Carousel interval={100000}>
        <Carousel.Item>
          <Container fluid>
            <Row xs={1} md={5}>
              {data.slice(0, 5).map((res) => {
                return (
                  <SingleMovie
                    title={res.Title}
                    img={res.Poster}
                    id={res.imdbID}
                    key={res.imdbID}
                  />
                );
              })}
            </Row>
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex">
            {data.slice(5, 10).map((res) => {
              return (
                <SingleMovie
                  title={res.Title}
                  img={res.Poster}
                  id={res.imdbID}
                  key={res.imdbID}
                />
              );
            })}
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default DisplayMovies;
