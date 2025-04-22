import React from "react";
import './TrendingNow.css';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TrendingNow.css';
function TrendingNow(){
    const navigate = useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    const handleBuyNow = () => {
        navigate("/PaymentPage");
    };
    
    return(
    <div>
            <div>
                <h2 className="h2" style={{color:"blue"}}>Trending Now</h2><hr />
                <div className="slider-container">
                <Slider {...settings}>
               
                <div className="blk">
                    <div>
                        <img className="img"src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1347414775i/909049.jpg" 
                        alt="img"  />
                    </div>
                    <div>
                        <div className="title"><h3>Children's Literature Remembered</h3></div>
                        <div><h3> - Linda M. Pavonatti</h3></div>                        
                        <div><form ><button onClick={handleBuyNow}>Buy Now</button></form></div>
                    </div>
                </div>
                <div className="blk">
                    <div>
                        <img className="img"src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1682047594i/122914935.jpg" 
                        alt="img"  />
                    </div>
                    <div>
                        <div className="title"><h3>Get Smart About Elon Musk</h3></div>
                        <div><h3> - Ben Kimpton </h3></div>                        
                        <div><form ><button onClick={handleBuyNow}>Buy Now</button></form></div>
                    </div>
                </div>
                <div className="blk">
                    <div>
                        <img className="img"src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1584298223i/52402806.jpg" 
                        alt="img"  />
                    </div>
                    <div>
                        <div className="title"><h3>Engineering the Future</h3></div>
                        <div><h3> - Ron Immink</h3></div>                        
                        <div><form ><button onClick={handleBuyNow}>Buy Now</button></form></div>
                    </div>
                </div>
                <div className="blk">
                    <div>
                        <img className="img"src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1704711217i/205028691.jpg" 
                        alt="img"  />
                    </div>
                    <div>
                        <div className="title"><h3 >Trending Recipes</h3></div>
                        <div><h3> - Finds Royal</h3></div>                        
                        <div><form ><button onClick={handleBuyNow}>Buy Now</button></form></div>
                    </div>
                </div>
                <div className="blk">
                    <div>
                        <img className="img"src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1709938488i/209649042.jpg" 
                        alt="img"  />
                    </div>
                    <div>
                        <div className="title"><h3>Social Media Trends 2024</h3></div>
                        <div><h3> - Daniel Elger de Castro Luis</h3></div>                        
                        <div><form ><button onClick={handleBuyNow}>Buy Now</button></form></div>
                    </div>
                </div>
                <div className="blk">
                    <div>
                        <img className="img"src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1704930696i/205173415.jpg" 
                        alt="img"  />
                    </div>
                    <div>
                        <div className="title"><h3>HR TRENDS 2024</h3></div>
                        <div><h3> - Marina Bahlow</h3></div>                        
                        <div><form ><button onClick={handleBuyNow}>Buy Now</button></form></div>
                    </div>
                </div>
                <div className="blk">
                    <div>
                        <img className="img"src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1699614362i/201943482.jpg" 
                        alt="img"  />
                    </div>
                    <div>
                        <div className="title"><h3>Social Media Marketing 2024</h3></div>
                        <div><h3> - Robert Hill</h3></div>                        
                        <div><form ><button onClick={handleBuyNow}>Buy Now</button></form></div>
                    </div>
                </div>
                </Slider>
                </div>
            </div>
        </div>
    )

}
export default TrendingNow;