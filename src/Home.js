import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <img 
                className='home__image'
                src='https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/f4b165f5-678a-48bb-a049-11e7ddc2168d._UR3000,600_SX1500_FMwebp_.jpg'
                alt='banner'
            />
            <div className='home__row'>
                <Product
                    id='1'
                    title='Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric'
                    price={29.99}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg'
                />
                <Product
                    id='2'
                    title='Microsoft 365 Family | Office 365 apps | up to 6 users | 1 year subscription | Multiple PCs/Macs, Tablets and Phones'
                    price={57}
                    rating={3}
                    image='https://images-na.ssl-images-amazon.com/images/I/713BCwgjQtL._AC_SL1500_.jpg'
                />
            </div>

            <div className='home__row'>
                <Product
                    id='3'
                    title='Fire TV Stick 4K Ultra HD with Alexa Voice Remote | streaming media player'
                    price={49.99}
                    rating={3}
                    image='https://images-na.ssl-images-amazon.com/images/I/81gxcUrBIuL._AC_SL1500_.jpg'
                />
                <Product
                    id='4'
                    title='Super Mario 3D All-Stars (Nintendo Switch)'
                    price={39.99}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/81tkL0RYLQL._AC_SL1500_.jpg'
                />
                <Product
                    id='5'
                    title='The Family Upstairs: The #1 bestseller and gripping Richard Judy Book Club'
                    price={4.99}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/91TJnyi282L.jpg'
                />
            </div>

            <div className='home__row'>
                <Product
                    id='6'
                    title='Blaupunkt BLA-40/138Q-GB-11B4-FEGPF-UK 40 Inch HD Ready Smart LED TV with Freeview Play,3 x HDMI, USB Record [Energy Class A+]'
                    price={255.98}
                    rating={2}
                    image='https://images-na.ssl-images-amazon.com/images/I/71StnINEfrL._AC_SL1500_.jpg'
                />
            </div>
            

        </div>
    )
}

export default Home
