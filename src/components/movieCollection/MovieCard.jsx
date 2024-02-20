import React from 'react'
import './MovieCard.css'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    // const type = props
    // console.log(props)
    return (
        <div className='movie_card'>
            <h2 className='movie_type'>{props.heading}</h2>
            <div className="card_cover">
                {
                    props.item.map((item) => {
                        // console.log(item)
                        return (
                            <div className='card_movie' key={item.id}>
                                <Link to={'/home/detail/' + item.id}>
                                    <img src={item.cardImg} alt="" />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>


    )
}

export default MovieCard
