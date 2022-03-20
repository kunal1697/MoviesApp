import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagination from './components/Pagination'
import Favourites from './components/Favourites';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element= {<><Banner/>
      <Movies/>
   
      </>} />
      <Route path="/MoviesApp" element= {<><Banner/>
      <Movies/>
   
      </>} />
      <Route path="/favourites" element={<Favourites/>}></Route>
    </Routes>
    {/* <h1>Hello world</h1>     */}
    
     {/* <Banner></Banner>
     <Movies></Movies>
     <Pagination></Pagination> */}

    {/* <h2>tranding</h2>
    <h2>pagination</h2> */} 

    </BrowserRouter>
        
  );
}

export default App;
