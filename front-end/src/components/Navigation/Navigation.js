import React, { useState } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal';
import emptyheart from './emptyheart.png';
import Upload from './upload.png';
import './Navigation.css';

const Navigation = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [query, setQuery] = useState('');

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const handleChange = event => {
        if (query.length + event.target.value.length <= 50) {
            setQuery(event.target.value);
        }
    }

    const handleSearch = event => {
        if (event.key === 'Enter') {
            props.onSearch(query);
        }
    }

    return (
        <div className="nav-bar-container">
            <div className="flashback-title" onClick={props.onHome}></div>
            <input
                type="text"
                className="search-bar"
                placeholder="Search"
                onChange={handleChange}
                onKeyPress={handleSearch}
            />
            <img src={Upload} id="upload" height="40%" onClick={openModal} />
            <Modal onFeedChange={props.onFeedChange} showModal={showModal} closeModal={closeModal} userId={props.userId} />
        </div>       
    );
}

export default Navigation;