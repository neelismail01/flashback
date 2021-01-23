import React from 'react';
import './Feed.css';

const Feed = (props) => {

  const imgUrl = `http://localhost:5000/uploads/${props.imgPath}`;
  console.log(imgUrl);

  return (
      <div className="feed-container">
        <img src={imgUrl} alt={props.imgPath} />
      </div>
  );
}

export default Feed;