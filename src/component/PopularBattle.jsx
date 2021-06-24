import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Cards from './Cards'


function PopularBattle() {
  const [movies, setMovies] = useState([])


  useEffect(async () => {
    try {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-FR&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free')
      const movieResult = await result.json()
      setMovies(movieResult.results)
    } catch (error) {
      console.error(error)
    }
  }, [])


  return (
    <Container>
      <h1>PopularBattle</h1>
      <Row>
        {movies.map((movie, index) => {
          return <Cards key={index} movie={movie} />
        })}
      </Row>
    </Container>
  )
}

export default PopularBattle