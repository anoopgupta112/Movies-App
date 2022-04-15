import { Component } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';

import moviesData from "../../common/moviesData";
import './Home.css';
import Header from "../../common/header/Header";


//I'm not using Single line Grid list because splide slice is better than that
export default class Home extends Component {

    render() {


        return (
            <div>
                <Header />

                <div className="Upcoming">UpComing movies</div>

                <Splide options={{
                    perPage: 4,
                    arrows: false, pagination: false, drag: 'free', gap: '3rem'
                }}>
                    {moviesData.map(res => {
                        return (
                            <SplideSlide key={res.id}>
                                <div className="Card">
                                    <p>
                                        {res.title}
                                    </p>
                                    <img src={res.poster_url} alt="Not Available" />
                                    <div className="Gradient"></div>

                                </div>
                            </SplideSlide>
                        );
                    })}
                </Splide>
                <div className="flex-container">
                    <div>

                        {moviesData.map(res => {
                            return (

                                <div className="Grid-Card">


                                    <img src={res.poster_url} alt="Not Available" />
                                    <div className="Gradient"></div>
                                    <p>
                                        {res.title}
                                    </p>

                                </div>
                            )
                        })}

                    </div>
                    <div>
                        second part
                    </div>
                </div>


            </div>
        )


    }



}
