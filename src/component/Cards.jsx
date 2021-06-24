import React from 'react'
import { Card } from 'react-bootstrap';
//import App from '../App.css'

function Cards(props) {
 const {movie}=props

 const URL_IMAGE_PREFIX = "https://image.tmdb.org/t/p/w300/";
console.log(movie.poster_path)
  return (
    // http://localhost:3000/holder.js/100px180
    <Card style={{ width: '14rem', height: '40rem' }}>
      <Card.Img src={`${URL_IMAGE_PREFIX}${movie.poster_path}`} variant="top" />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          Date de sortie: {movie.release_date}
        </Card.Text>
        <Card.Text>
          {movie.overview}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}


export default Cards