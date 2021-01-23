import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import Search from '../Search/Search';
import Feed from '../Feed/Feed';
import './Home.css';

const Home =  (props) => {
    const [imgLinks, setImgLinks] = useState([]);

    const apiUrl = `http://localhost:5000/feed/id=${props.userId}`;
    const fetchData = async () => {
        const response = await axios.get(apiUrl);
        setImgLinks(response.data);
    }

    useEffect(() => {
        axios.get(apiUrl)
        .then(response => {
            setImgLinks(response.data);
        })
        fetchData();
    }, [imgLinks.length])

    return (
        <div className="home">
            <Search />
            <div className="welcome-feed">
                {
                    imgLinks.length === 0
                    ?
                    <p>Loading...</p>
                    :
                    imgLinks.map((imgLink, index) => {
                        return <Feed imgPath={imgLink.img_path} key={index} />
                    })
                }
            </div>
            <Post />
        </div>
    );
}

export default Home;