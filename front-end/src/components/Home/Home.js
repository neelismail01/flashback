import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../Navigation/Navigation';
import Feed from '../Feed/Feed';
import './Home.css';

const Home = (props) => {
    const [imgUrls, setImgUrls] = useState([]);
    const [query, setQuery] = useState('');
    const [endPoint, setEndPoint] = useState('home')

    const handleHome = () => {
        console.log('home');
        setEndPoint('home');
    }

    const handleSearch = search => {
        console.log('search');
        setEndPoint('search');
        setQuery(search);
    }

    const handleFavourite = () => {
        console.log('favourites');
        setEndPoint('favourites');
    }

    useEffect(() => {
        console.log(endPoint);
        console.log(query);
        console.log()
        axios.get(`http://localhost:5000/${endPoint}/${props.userId}`, { params: {query: query} })
        .then(response => {
            setImgUrls(response.data);
        })
        .catch(err => console.log(err));
    }, [endPoint, query])

    return (
        <div className="home-page">
            <Navigation
                userId={props.userId}
                onHome={handleHome}
                onFavourite={handleFavourite}
                onSearch={handleSearch}
                onSignout={props.onSignOut}
            />
            <div className="feed">
                {
                    imgUrls.length === 0
                    ?
                    <p>Upload your first memory!</p>
                    :
                    imgUrls.map((imgUrl, index) => {
                        return <Feed imgUrl={imgUrl} key={index} />
                    })
                }
            </div>
        </div>
    );
}

export default Home;