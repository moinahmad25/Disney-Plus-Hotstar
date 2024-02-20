import React, {useEffect, useState} from 'react'
import './Home.css'
import home_bg from '../../assets/images/home-background.png'
import SliderComponent from '../Slider/SliderComponent'
import Viewer from '../viewer/Viewer'
import { useDispatch, useSelector } from 'react-redux'
import { app } from '../../firebase'
import { getFirestore,collection, getDocs } from "firebase/firestore";
import {getMovieDetail} from '../../features/movieSlice/movieSlice'
import { selectRecommend, selectNewDisney, selectOriginal, selectTrending } from '../../features/movieSlice/movieSlice'
import { selectUserName } from '../../features/userSlice/userSlice'
import MovieCard from '../movieCollection/MovieCard'




const db = getFirestore(app);

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)

  const [recommend, setRecommend] = useState([]);
  const [newDisney, setNewDisney] = useState([]);
  const [original, setOriginal] = useState([]);
  const [trending, setTrending] = useState([])
  
  useEffect(() => {
    async function queryFirestore(){
      const querySnapshot = await getDocs(collection(db, "movies"));
      querySnapshot.forEach((doc) => {
        const movieData = {id: doc.id, ...doc.data()};
        switch(doc.data().type){
          case "recommend":
            setRecommend(prev => [...prev, movieData])
            break;
          case "new":
            setNewDisney(prev => [...prev, movieData])
            break;
          case "original":
            setOriginal(prev => [...prev, movieData])
            break;
          case "trending":
            setTrending(prev => [...prev, movieData])
            break;
        }
      });
    }
    queryFirestore()
  },[])

  // console.log(recommend)
  // console.log(newDisney)
  // console.log(original)
  // console.log(trending)

  return (
    <div className='home_page'>
      <div className="main_bg">
        <SliderComponent />
        <Viewer />
        <MovieCard item={recommend} heading='recommend for you'/>
        <MovieCard item={newDisney} heading='new to disney+'/>
        <MovieCard item={original} heading='original'/>
        <MovieCard item={trending} heading='trending'/>
      </div>
    </div>
  )
}

export default Home
