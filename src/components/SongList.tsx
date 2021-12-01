import React from "react";
import {  Container,  Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Song from '../interfaces/song'


interface SongProps{
    song: Song
}

function SongList({song}: SongProps) {
   

  useEffect(() => {
  }, []);

  return (
    <div>
              {song.title}

    </div>
  );
}

export default SongList;