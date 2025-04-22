import React from "react";
import { Link } from "react-router-dom";
import './Shop.css';
function Shop(){    
    return(
        <div>
            <div id="shop">
                <h2 className="h2" style={{color:"blue"}}>2024 Latest Releases</h2><hr />
                <div id="flex">
                <div className="blk">
                    <div>
                        <img className="img"src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420473962i/24307928.jpg" 
                        alt="img" style={{ width: '280px', height: '270px' }} />
                    </div>
                    <div>
                        <div className="title"><h3>2024</h3></div>
                        <div><h3> - H.Berkeley Rourke</h3></div>                        
                        <div><form ><Link to="/details/65eeb25f7b7a5b0112687220"><button>Explore Now</button></Link></form></div>
                    </div>
                </div>
                <div className="blk">
                    <div>
                        <img className="img"src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1306079371i/293101.jpg" 
                        alt="img"   style={{ width: '280px', height: '270px' }}/>
                    </div>
                    <div>
                        <div className="title"><h3>The Amityville Horror</h3></div>
                        <div><h3> - Jay Anson</h3></div>                        
                        <div><form ><Link to="/details/65eefb9ce73db4da5d85265f"><button>Explore Now</button></Link></form></div>
                    </div>
                </div>
                <div className="blk">
                    <div>
                        <img className="img"src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1691225056i/174146852.jpg" 
                        alt="img"  style={{ width: '280px', height: '270px' }} />
                    </div>
                    <div>
                        <div className="title"><h3>A Dark and Drowning Tide</h3></div>
                        <div><h3> - Allison Saft</h3></div>                        
                        <div><form ><Link to="/details/65ef20332c5e50d107cce1f6"><button>Explore Now</button></Link></form></div>
                    </div>
                </div>
                <div className="blk">
                    <div>
                        <img className="img"src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1683309660i/149052712.jpg" 
                        alt="img"  style={{ width: '280px', height: '270px' }} />   
                    </div>
                    <div>
                        <div className="title"><h3>The Nutfield Saga Books 1-3</h3></div>
                        <div><h3> - Robin Patchen</h3></div>                        
                        <div><form ><Link to="/details/65f04b842c32556feb0754e5"><button>Explore Now</button></Link></form></div>
                    </div>
                </div>
                <div className="blk">
                    <div>
                        <img className="img"src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1656359249i/61361726.jpg" 
                        alt="img"  style={{ width: '280px', height: '270px' }} />   
                    </div>
                    <div>
                        <div className="title"><h3>Emerson Pass Historicals</h3></div>
                        <div><h3> - Tess Thompson</h3></div>                        
                        <div><form ><Link to="/details/65f166cee5cef9dcb3260610"><button>Explore Now</button></Link></form></div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}   
export default Shop;
