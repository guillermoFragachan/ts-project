import React from "react";
import {  Container,  Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Song from '../interfaces/song'
import { useNavigate } from "react-router";
import ListGroup from 'react-bootstrap/ListGroup'


interface SongProps{
    song: Song
}

function SongList({song}: SongProps) {
   

const navigate = useNavigate()

  useEffect(() => {
  }, []);

  return (
    <ListGroup.Item onClick={()=>navigate(`/${song.id}`)} >
              {song.title}

    </ListGroup.Item>
  );
}

export default SongList;