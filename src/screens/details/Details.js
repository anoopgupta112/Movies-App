import React from 'react'
import Header from '../../common/header/Header'
import './Details.css'
import { useLocation } from 'react-router-dom'

import Home from '../home/Home';
import moviesData from "../../common/moviesData";
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';


export default function Details(props) {

    return (

        <>
            <Header></Header>

            <Typography variant="p" className='Back-Button'>
                <Link to='/'>&lt; Back to Home</Link>

            </Typography>

            <div className='root'>

                <div>

                    <div className="Detail-Card">

                        <img src={moviesData[2].poster_url} alt="Not Available" />


                    </div>
                </div>
                <div>
                    <p>
                        <Typography variant='h3'>{moviesData[2].title}</Typography></p>
                    <p>
                        <Typography variant='p'><strong>Genres : </strong> {moviesData[2].genres}</Typography>
                    </p>         <Typography variant='p'><strong>Duration : </strong> {moviesData[2].duration}</Typography>
                    <p>   <Typography variant='p' component='p'><strong>Release Date : </strong> {moviesData[2].release_date}</Typography>
                    </p>
                    <p>   <Typography variant='p' style={{ marginTop: '16px' }}><strong>Release Date : </strong> {moviesData[2].critics_rating}</Typography>
                    </p>
                    <p>   <Typography variant='p'><strong>Plot : </strong><a href={moviesData[2].wiki_url}>(Wiki_Url)</a> {moviesData[2].storyline}</Typography>
                    </p>
                    <p>   <Typography variant='p'><strong>Trailer : </strong>  <iframe
                        width="853"
                        height="480"
                        src={moviesData[2].trailer_url}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    /></Typography>
                    </p>
                </div>
                <div>
                    <Splide options={{
                        perPage: 1,
                        arrows: false
                    }}>
                        {moviesData[2].artists.map(res => {
                            return (
                                <SplideSlide key={res.id}>

                                    <div className="Artist-Card">
                                        <p>   <Typography variant='p'><strong>Rate this movie </strong></Typography>
                                        </p>

                                        <img src={res.profile_url} alt="Not Available" className='Artist-img' />


                                    </div>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </div>
            </div>

        </>
    )
}
