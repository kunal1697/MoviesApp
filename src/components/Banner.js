import React,{useState,useEffect} from 'react'
import BannerImg from '../banner.jpg';
import axios from 'axios';


function Banner() {
    const [banner,setBanner]=useState({})


    useEffect(function(){
        axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=74ec6f93a0917e170ed75b4686ed9c85").then((res)=>{
            setBanner(res.data.results[0]);
        })
    },[])
  return (<>
    <div className={`bg-[url(https://image.tmdb.org/t/p/w500/${banner.backdrop_path})] h-[40vh] md:h-[60vh] bg-center bg-cover flex items-end `}>
        <div className='text-xl md:text-3xl text-white p-6 bg-gray-900 bg-opacity-50 w-full flex justify-center'>{banner.title}</div>
    </div>
    </>);
  
}

export default Banner