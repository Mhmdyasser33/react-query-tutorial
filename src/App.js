import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SuperHero from './components/SuperHero/SuperHero';
import RqSuperHero from './components/RQsuperHero/RqSuperHero';
import {QueryClientProvider , QueryClient} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

function App() {
  // take a reference from queryClient
    const queryClient = new QueryClient() ;
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
       <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/superheros' element={<SuperHero/>}/>
                <Route path='/heros' element={<RqSuperHero/>}/>
            </Routes>
        </Router>
        {/* this make devtools panel in initial is closed , and this is position that will appear in it  */}
        <ReactQueryDevtools initialIsOpen={true} position='bottom-right'/>
      </QueryClientProvider>
    </div>
  );
}

export default App;
