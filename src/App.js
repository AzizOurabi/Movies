import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import axios from 'axios'
import { Container } from 'react-bootstrap';
import MoviesList from './Components/MoviesList';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import MovieDetails from './Components/MovieDetails';



const App = () => {
  const [movies,setMovies] = useState([])
  const [pageCount, setpageCount] = useState(0)

  // get all movies by axios
  const getAllMovies = async () =>{
    const result = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en")
    setMovies(result.data.results)
    setpageCount(result.data.total_pages)
  }
  //get current page
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=en&page=${page}`)
    setMovies(res.data.results)
    setpageCount(res.data.total_pages)
  }
  useEffect(() => {
    getAllMovies()
  },[])
  // Search by api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=en`)
      setMovies(res.data.results)
      setpageCount(res.data.total_pages)
    }
  }

  return (
    <div>
      <Container>
      <NavBar search={search}/>
      <BrowserRouter>
        <Routes>
        <Route path='/' element=<MoviesList movies={movies} getPage={getPage} pageCount={pageCount}/>/>
        <Route path='/movie/:id' element=<MovieDetails/>/>
          
          
        </Routes>
      </BrowserRouter>
      </Container>
    </div>
  )
}

export default App
