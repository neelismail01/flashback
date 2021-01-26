import React from 'react';
import './Feed.css';

const Feed = (props) => {

  console.log(props)

  const imgUrl = `http://localhost:5000/uploads/${props.postData.img_path}`;
  const who = `${props.postData.who}`;
  const where = `${props.postData.location}`;
  const when = `${props.postData.time_of_memory}`;
  const what = `${props.postData.what}`;

  console.log(imgUrl)
  console.log(who)
  console.log(where);
  console.log(when)
  console.log(what)

  /*
        <div className="details">
          {who && <p className="fact">{who}</p>}
          {where && <p className="fact">{where}</p>}
          {when && <p className="fact">{when}</p>}
          {what && <p className="fact">{what}</p>}
        </div>
  */


  return (
      <div className="feed-container">
        <img src={imgUrl} alt={props.imgPath} />
      </div>
  );
}

export default Feed;