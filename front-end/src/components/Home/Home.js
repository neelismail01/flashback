import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import Search from '../Search/Search';
import Feed from '../Feed/Feed';
import './Home.css';

const Home = (props) => {
    const [imgLinks, setImgLinks] = useState();
    const [feedCards, setFeedCards] = useState();

    

    return (
        <div className="home">
            <Search />
            <div className="welcome-feed">
                <Feed />
            </div>
            <Post />
        </div>
    );
}

export default Home;