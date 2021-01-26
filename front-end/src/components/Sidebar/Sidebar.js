import React from 'react';
import Post from '../Post/Post';
import './Sidebar.css';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="filters">
                <p>Most Recent</p>
                <p>Favourites</p>
            </div>
            <div className="upload-button-container">
                <button className="upload-button">Upload a Memory</button>
            </div>
        </div>
    )
}

export default Sidebar;