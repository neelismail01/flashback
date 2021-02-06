import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Navigation.css';
import './search-icon.jpeg';

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
        setQuery(event.target.value);
    }

    return (
        <div className="nav-bar-container">
            <div className="nav-bar">
                <div className="search-upload">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search"
                        onChange={handleChange}
                    />
                    <input
                        type="button"
                        value="Upload Memory"
                        className="upload"
                        onClick={openModal}
                    />
                    <Modal showModal={showModal} closeModal={closeModal} userId={props.userId} />
                </div>
                <p onClick={() => props.onRouteChange('signout')}>Sign Out</p>
            </div>
        </div>
    );
}

export default Navigation;