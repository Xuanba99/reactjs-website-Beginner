import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import Img9 from './../images/img-9.jpg';
import Img8 from './../images/img-8.jpg';
import Img6 from './../images/img-6.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out  these  EPIC  Destination!</h1>
            <div className='cards__container'>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={Img9}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services' />
                        <CardItem src={Img8}
                            text='Explore the hidden sail deep inside the Sahara'
                            label='Adventure'
                            path='/services' />
                        <CardItem src={Img6}
                            text='Explore the hidden sail deep inside the Sahara'
                            label='Luxury'
                            path='/services' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
