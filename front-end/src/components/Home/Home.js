import React from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import Search from '../Search/Search';
import Feed from '../Feed/Feed';
import './Home.css';

const Home = (props) => {
    const handleFeed = (event) => {
        console.log(props.userId);
        axios.get(`http://localhost:5000/feed?id=${props.userId}`, {

        })
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="home">
            <Search />
            <div className="welcome-feed">
                <Feed onClick={handleFeed} />
                <input type="button" value="Get Feed" onClick={handleFeed} />
            </div>
            <Post />
        </div>
    );
}

export default Home;