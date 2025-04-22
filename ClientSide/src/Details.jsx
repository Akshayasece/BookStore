import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Details.css'; 
import DetailsBkImg from './DetailsBkImg.jpeg';

function Details() {
    const { id } = useParams(); 
    const [book, setBook] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch(`http://localhost:3500/getbook/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);
                setBook(data);
            })
            .catch(error => {
                console.error('Error fetching book details:', error);
            });
    }, [id]);

    const handleBack = () => {
        navigate("/"); 
    };

    const handleBuyNow = () => {
        navigate(`/PaymentPage/:${id}`); 
    };

    return (
        <div className="details-box">
            {book ? (
              <div className="det">
                    <h2><b>Title:</b> {book.book_title}</h2>
                    <h3>Author_Name: {book.authorname}</h3>
                    <p><b>Description:</b> {book.book_description}</p>
                    <p><b>Category:</b> {book.category}</p>
                    <p><b>Prize:</b> {book.prize}</p>
                    <p><b>Book_Pdf:</b>{" "}<a href={book.book_pdf_url} target="_blank" rel="noreferrer">
                 {book.book_pdf_url} </a>  </p>
                    <button className="but" onClick={handleBuyNow}>Buy Now</button> 
                    <br /> <br />
                    <button className="but" onClick={handleBack}>Go Back</button>
              </div>       
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Details;
