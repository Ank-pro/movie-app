import { useState } from 'react';
import './App.css'
import { FavouriteList } from './components/favourites/FavouriteList';
import { HomePage } from './components/home/HomePage'
import NavBar from './components/navbar/NavBar';
import {Routes,Route} from 'react-router-dom'

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
    <NavBar setSearchValue={setSearchValue}/>
    <Routes>
      <Route path='/' element={<HomePage searchValue={searchValue}/>}/>
      <Route path='/fav' element={<FavouriteList/>}/>
    </Routes>
    </>
  )
}

export default App
