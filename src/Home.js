import React from "react";
import './Home.css'
import Product from "./Product";

function Home() {
    return(
        <div className="home">
            <div className="home__container">                
                <img className="home__image" alt="" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
                <div className="home__row">
                    <Product 
                    id='43252234'
                    title='Tactical Shovel'
                    price={35.95}
                    image='https://i.redd.it/wphtq6d40yq41.jpg'
                    rating={5}
                    />
                    <Product 
                    id='3245223'
                    title='Pope costume for dogs (Dog not included!)'
                    price={21.37}
                    image='https://images.fun.com/products/15022/2-1-51251/holy-hound-dog-costume.jpg'
                    rating={5}
                    />
                </div>
                <div className="home__row">                    
                    <Product 
                    id='9028348'
                    title='Costume for dogs (Dog not included!)' 
                    price={4.20} 
                    image='https://cdn.unicun.com/wp-content/uploads/2019/02/Ewok-Dog-Costume.jpg'
                    rating={4}
                    />
                    <Product 
                    id='12357654'
                    title='Shoes for ducks'
                    price={45.60}
                    image='https://m.media-amazon.com/images/I/51UqOKJVBVS._AC_SY350_.jpg'
                    rating={5}
                    />
                    <Product 
                    id='4189211'
                    title='Paper (folded)'
                    price={3.12}
                    image='https://miro.medium.com/max/1240/1*f451P1W9iwz41lghryKnsw.jpeg'
                    rating={2}
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id='91238749'
                    title='Book on parenting'
                    price={12.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/51UrluAwiqL._SX356_BO1,204,203,200_.jpg'
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}


export default Home

