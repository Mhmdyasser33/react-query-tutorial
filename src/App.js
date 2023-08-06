import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SuperHero from './components/SuperHero/SuperHero';
import RqSuperHero from './components/RQsuperHero/RqSuperHero';

function App() {
  return (
    <div className="App">
       <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/superheros' element={<SuperHero/>}/>
                <Route path='/heros' element={<RqSuperHero/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
