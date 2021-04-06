import React, { useState, ueEffect, useEffect } from 'react';

import '../assets/styles/App.scss';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';

const SCI_FI_API = 'https://yts.mx/api/v2/list_movies.json?genre=sci-fi';
const ANIMATION_API = 'https://yts.mx/api/v2/list_movies.json?genre=animation';
const DRAMA_API = 'https://yts.mx/api/v2/list_movies.json?genre=drama';

const App = () => {

    const fiction = useInitialState(SCI_FI_API);
    const animation = useInitialState(ANIMATION_API);
    const drama = useInitialState(DRAMA_API);

    return (
        <>
            <Header />
            <Search />
            
            {fiction.data.movies.length > 0 && 
            
                <Categories title="Ciencia Ficción">
                    <Carousel>
                        {fiction.data.movies.map(item => 

                            <CarouselItem key={item.id} title={item.title} image={item.medium_cover_image} year={item.year} duration={item.runtime} rating={item.rating} />
                        )}
                    </Carousel>
                </Categories> 
            }

            <Categories title="Animación">
                <Carousel>
                    {animation.data.movies.map(item => 

                        <CarouselItem key={item.id} title={item.title} image={item.medium_cover_image} year={item.year} duration={item.runtime} rating={item.rating} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Drama">
                <Carousel>
                    {drama.data.movies.map(item => 

                        <CarouselItem key={item.id} title={item.title} image={item.medium_cover_image} year={item.year} duration={item.runtime} rating={item.rating} />
                    )}
                </Carousel>
            </Categories>
            <Footer />
        </>
    );
}

export default App;