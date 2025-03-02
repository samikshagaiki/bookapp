import React from 'react';
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'

const Header = () =>{
    return(
        <div className="holder">
            <div className="header">
                <Navbar />
                <div className='header-content flex flex-c text-center text-white'>
                    <h2 className='header-title text-capitalize'>find your book of choice</h2><br/>
                    <p className='header-text fs-18 fw-3'>A paradise for book lovers! Discover stories that inspire, captivate, and stay with you forever.</p>
                    <SearchForm/>
                </div>
            </div>
        </div>
    )
}

export default Header;