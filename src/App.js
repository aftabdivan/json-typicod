import './App.css';
import HomePage from './components/Home/HomePage';
import NevigationBar from './components/Navcomp/NevigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AlbumsPhots from './components/AlbumsPhotos/AlbumsPhots';

function App() {
  return (
    <div className="App">
      <NevigationBar />
      <br /><br />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/albums' element={<AlbumsPhots />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
