import React, { useState, useEffect} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Profile from '../components/Profile';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'https://platzi-store.herokuapp.com/products';

const App = () => {

    const initialState = useInitialState(API);

    return(
        <div className="App">
            <Header />
            <Search />
            {initialState.length > 0 &&
                <Categories title="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                    <Carousel>
                        {initialState.map( item => 
                            <CarouselItem key={item.id} {...item} />   
                        )}
                    </Carousel>
                </Categories>
            }
        </div>
    );
}

export default App;