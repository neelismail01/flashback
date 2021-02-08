import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import axios from 'axios';
import './Navigation.css';

const Navigation = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const handleChange = event => {
        if (query.length + event.target.value.length <= 50) {
            setQuery(event.target.value);
        } else {
            setError('Please limit your search to 50 characters');
        }
    }

    const handleSearch = event => {
        if (event.key === 'Enter') {
            axios.get(`http://localhost:5000/search/${props.userId}?search=${query}`, { params: {query: query} })
            .then(response => {
                console.log(response.data);
                props.onSearch(response.data)
                props.onRouteChange('search')
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div className="nav-bar-container">
            <div className="nav-bar">
                <div className="search-upload">
                    <h2 className="flashback" onClick={() => props.onRouteChange('home')}>Flashback</h2>
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search"
                        onChange={handleChange}
                        onKeyPress={handleSearch}
                    />
                    <input
                        type="button"
                        value="Upload Memory"
                        className="upload"
                        onClick={openModal}
                    />
                    <input
                        type="button"
                        value="Favourites"
                        className="upload"
                        onClick={() => props.onRouteChange('favourites')}
                    />
                    <Modal showModal={showModal} closeModal={closeModal} userId={props.userId} />
                </div>
                <p onClick={() => props.onRouteChange('signout')}>Sign Out</p>
            </div>
        </div>
    );
}

export default Navigation;