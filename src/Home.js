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
                    title='Dog costume (!Dog not included!)' 
                    price={21.37} 
                    image='https://cdn.unicun.com/wp-content/uploads/2019/02/Ewok-Dog-Costume.jpg'
                    rating={5}
                    />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
            </div>
        </div>
    )
}


export default Home

