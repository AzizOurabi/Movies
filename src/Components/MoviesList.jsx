import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovies from './CardMovies'
import PaginationComponent from './Pagination'

const MoviesList = ({movies , getPage , pageCount}) => {
  return (
    <Row className='mt-3'>
    {
        movies.length >= 1 ? (movies.map((mov) => {
            return <CardMovies key={mov.id} mov={mov}/>
            })) : <h2 className='text-center p-5'>No movies ..</h2>
    } 
    {movies.length >= 1 ? (<PaginationComponent getPage={getPage} pageCount={pageCount} />) : null}
    </Row>

    
  )
}

export default MoviesList
