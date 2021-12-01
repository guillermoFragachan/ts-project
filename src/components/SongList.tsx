import React from "react";
import {  Container,  Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Song from '../interfaces/song'
import { useNavigate } from "react-router";



interface SongProps{
    song: Song
}

function SongList({song}: SongProps) {
   

const navigate = useNavigate()

  useEffect(() => {
  }, []);

  return (
    <div onClick={()=>navigate(`/${song.id}`)} >
              {song.title}

    </div>
  );
}

export default SongList;