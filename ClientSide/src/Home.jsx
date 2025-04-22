import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
import ImageSlider from "./ImageSlider";
import Shop from "./Shop";
import TrendingNow from "./TrendingNow";
import WikkiBooks from "./WikkiBooks.jpeg";

function Home() {
    return (
        <div>
            <div className="container">
                <div className="left">
                    <div className="header">
                        <div className="tit">
                            <img src={WikkiBooks} alt="image"/>
                            </div>
                    </div>
                </div>
                <div className="right">
                    <div className="navigation">
                    <span><Link to="/">Home</Link></span>
                        <span><Link to="/Shop">Explore</Link></span>
                        <span><Link to="/TrendingNow">Trending</Link></span>
                        <span>
                            <Link to="/SignUp" className=""><button className="btn">Sign Up</button></Link>
                        </span>
                        <span>
                            <Link to="/SignIn"><button className="btn">Sign In</button></Link>
                        </span>
                    </div>
                </div>
            </div>
            <ImageSlider /><br />
            <Shop />
            <TrendingNow />
        </div>
    );
}

export default Home;
