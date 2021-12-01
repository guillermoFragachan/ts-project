import React from "react";
import {  Container, Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useState, useEffect } from "react";
import SongDetailInterface from '../interfaces/songDetail'
import {useParams}  from "react-router-dom";

function SongDetail() {

    const params = useParams()

  const [data, setData] = useState<SongDetailInterface>();

  const fetchData = async () => {
    try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/track/${params.id}`
        );
        if (response.ok) {
            let data = await response.json();
            // const songs:Song[] = data.data
            console.log(data);
            setData(data);
          } else {
              console.log("ERROR")
          }
       
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
      console.log(params.id)
    fetchData();
  }, []);

  return (
    <div>
      <Container>
   

        <Row>
        <Container>
        <Row className="mt-5 d=flex ">
          <Col sm={3}>
          {
              data &&
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={data.album.cover} />
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.artist.name}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Duration: {data.duration}</ListGroupItem>
                <ListGroupItem>Album: {data.album.title}</ListGroupItem>
                <ListGroupItem>Link:  
                    <a href={data.link}>{data.link}</a></ListGroupItem>
              </ListGroup>
              
            </Card>
          }           

          </Col>
        </Row>
      </Container>
        </Row>
      </Container>
    </div>
  );
}

export default SongDetail;