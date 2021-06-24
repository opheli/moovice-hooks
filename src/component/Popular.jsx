import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import Cards from './Cards'

function Popular() {
  const [movies, setMovies] = useState([])


  useEffect(async () => {
    try {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8e16ff25f44004fe2ab5dedc9e0453e')
      const movieResult = await result.json()
      setMovies(movieResult.results)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <Container>
      <h1>Popular</h1>
      <Row>
        {movies.map((movie, index) => {
          return <Cards key={index} movie={movie} />
        })}
      </Row>
    </Container>
  )
}

export default Popular