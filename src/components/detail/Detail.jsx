import React, { useEffect, useState } from 'react'
import './Detail.css'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from '../../firebase';
import play_black from '../../assets/images/play-icon-black.png'
import play_white from '../../assets/images/play-icon-white.png'
import watchList_icon from '../../assets/images/watchlist-icon.svg'
import grp_icon from '../../assets/images/group-icon.png'

const db = getFirestore(app)

const Detail = () => {
    const [movie, setMovie] = useState({})

    const { id } = useParams()

    const fetchData = async () => {
        try {
            // const docRef = doc(db, 'your_collection_name', id); // Correct the collection name here
            const docRef = doc(db, 'movies', id)
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                // console.log("Document data:", docSnap.data());
                setMovie(docSnap.data())
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error getting document:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);
    // console.log(id)

    console.log(movie)

    return (
        <div className='detail_page'>
            <img src={movie.backgroundImg} alt="" className='bg_img' />
            <div className="detail">
                <div className="mavie_container">
                    <img src={movie.titleImg} alt="" className="title_img" />
                    <div className="btns">
                        <button className="play"><img src={play_black} alt="" className='play_img' />Play</button>
                        <button className="trailer"><img src={play_white} alt="" className='play_img' />Trailer</button>
                        <button className="plus"><img src={watchList_icon} alt="" /></button>
                        <button className="users"><img src={grp_icon} alt="" /></button>
                    </div>
                    <p className='sub_title'>{movie.subTitle}</p>
                    <div className="movie_description">{movie.description}</div>
                </div>
            </div>
        </div>
    )
}

export default Detail
