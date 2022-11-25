import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Characters from './components/Characters';
import Pagination from './components/Pagination';

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  // llamando los personajes con fectch retornando promesa
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))

  };
  // traer nuevos personajes en new url  por cada pagina
  const onPrevious = () => {
    fetchCharacters(info.prev)
  }


  const onNext = () => {

    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  // nav bar rick and morti crear grid para vard y paginacion next and prevous
  return (
    <>
      <Navbar brand="Rick And Morty App" />
      <div className='container mt-5'>
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext} />
        <Characters characters={characters} />
        <Pagination />
      </div>
    </>
  );
}

export default App;
