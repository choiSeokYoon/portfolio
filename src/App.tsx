import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import About from './pages/About';
import Home from './pages/Home';
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
