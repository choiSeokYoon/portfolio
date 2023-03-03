import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './components/header/Header';
import About from './pages/About';
import Home from './pages/Home';
import './App.css'
import Project from './pages/Project';
import Skill from './pages/Skill';
import Footer from './components/footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skill' element={<Skill/>}/>
          <Route path='/project' element={<Project/>}/>
        </Routes>
      </RecoilRoot>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
