import React from "react";
import { Form, FormControl, Container, Row, Col, FormGroup, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import SongList from "./SongList";
import Song from '../interfaces/song'

function SearchBar() {
    const [query, setQuery] = useState<string>("eminem");
  const [data, setData] = useState<Song[]>([]);

  const fetchData = async () => {
    try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`
        );
        if (response.ok) {
            let data = await response.json();
            const songs:Song[] = data.data
            console.log(songs);
            setData(songs);
          } else {
              console.log("ERROR")
          }
       
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div>
      <Container>
        <Row className="mt-5 d=flex ">
          <Col sm={3}>
            <FormGroup className="search-group">
              <Form className="d-flex">
                <FormControl
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
               
              </Form>
            </FormGroup>
          </Col>
        </Row>

        <Row>
        <Container>
        <Row className="mt-5 d=flex ">
          <Col sm={3}>
              <ListGroup>
          {   data &&
                data.map((song)=>{return <SongList song={song}/>
                })
            }
            </ListGroup>               

          </Col>
        </Row>
      </Container>
        </Row>
      </Container>
    </div>
  );
}

export default SearchBar;