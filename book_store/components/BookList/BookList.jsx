import React from 'react';
import { useGlobalContext } from '../../context';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.png";
import Book from "../BookList/Book"; 
import {Link,useNavigate} from 'react-router-dom';
import "./BookList.css";

const BookList = () => {
    const { books, loading, resultTitle } = useGlobalContext();
    const navigate = useNavigate();
    // Corrected arrow function syntax
    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            id: singleBook.id.replace("/works/", ""), // Removed unnecessary space
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
        };
    });

    console.log(booksWithCovers);

    if (loading) return <Loading />;

    return (
        <section className='booklist'>
            <div className='container'>  {/* Fixed className */}
                <div className='section-title'>
                    <h2>{resultTitle}</h2>
                    <button className="go-back-btn" onClick={() => navigate("/")}>
                       Go Back to Home
                   </button>
                </div>
                <div className='booklist-content grid'>
                    {
                        booksWithCovers.slice(0, 30).map((item, index) => (
                            <Book key={index} {...item} />  
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default BookList;
