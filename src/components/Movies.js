import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from './Pagination'
import { Oval } from  'react-loader-spinner'
import Favourites from './Favourites'






function Movies() {

  const [movies,setMovies]=useState([])
  const [page,setPage] = useState(1);
  const [hover,setHover]= useState("");
  const [favourites,setFavourites]= useState([]);
  function PreviousPage(){
      if(page>1){
      setPage(page-1);
      }
  }
  function NextPage(){
      setPage(page+1);
  }

    useEffect(function(){
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=74ec6f93a0917e170ed75b4686ed9c85&page=${page}`).then((res)=>{
            setMovies(res.data.results);
        })
    },[page])
  
  let add=(movie)=>{
      let newArray=[...favourites,movie]
      setFavourites([...newArray]);
      console.log(newArray);
  }
  let remove=(movie)=>{
        
  }

  return <>
  <div className='mb-8'>
 <div className='mt-8 mb-8 font-bold text-2xl text-center'>Trending Movies</div>
 {
     movies.length===0 ?
     <div className='flex justify-center'> 
     <Oval
    height="100"
    width="100"
    color='grey'
    secondaryColor='grey'
    ariaLabel='loading'
  /> 
  </div>:
  
  <div  className='flex flex-wrap justify-center'>
  {
      movies.map((movie)=>(
        <div className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})]  md:h-[30vh] md:w-[250px]
     h-[25vh] w-[150px]
     bg-center bg-cover 
     rounded-xl flex items-end  m-4
     hover:scale-110 ease-out duration-300 relative`} onMouseEnter={()=>setHover(movie.id)} onMouseLeave={(()=>setHover(""))}>{
         hover === movie.id &&<>{ !favourites.find((m)=>m.id==movie.id) ?
            <div className='absolute top-2 right-2 bg-gray-800 p-2 text-xl rounded-xl cursor-pointer' onClick={()=>add(movie)}>😍</div>
            :
            <div className='absolute top-2 right-2 bg-gray-800 p-2 text-xl rounded-xl cursor-pointer' onClick={()=>add(movie)}>❌</div>
         } 
         
        
         
         </>
     }
     
     <div className=' text-white py-2 bg-gray-900 w-full text-center rounded-b-xl font-bold'>{movie.title}</div>     
     </div>
      ))
  }
                
 </div>

 
 }
 </div>
 <Pagination pageProp={page} NextPage={NextPage} PreviousPage={PreviousPage} />
  </>
   
  
}

export default Movies