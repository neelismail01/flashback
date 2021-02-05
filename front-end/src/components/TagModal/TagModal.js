import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './TagModal.css';

const TagModal = (props) => {
    const [loaded, setLoaded] = useState(false);
    const [who, setWho] = useState(null);
    const [where, setWhere] = useState(null);
    const [when, setWhen] = useState(null);
    const [what, setWhat] = useState(null);
    const [favourite, setFavourite] = useState(null);

    const handleLove = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:5000/favourite/${props.imgUrl.substring(30)}`, {favourite: !favourite})
        .then(res => {
            setFavourite(!favourite)
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/details/${props.imgUrl.substring(30)}`)
        .then(response => {
            setWho(response.data.who);
            setWhere(response.data.location);
            setWhen(response.data.time_of_memory);
            setWhat(response.data.what);
            setFavourite(response.data.favourite);
            setLoaded(true);
            console.log(`${who}, ${what}, ${where}, ${when}, ${favourite}`);
        })
        .catch(err => console.log(err));
    })

    return (
        <div className="tagmodal-container">
            {
                loaded
                ?
                <div>
                    <div className="details">
                        {who && <p className="fact">{who}</p>}
                        {where && <p className="fact">{where}</p>}
                        {when && <p className="fact">{when}</p>}
                        {what && <p className="fact">{what}</p>}
                    </div>
                    <div className="tagmodal-btns">
                        {
                            favourite
                            ?
                            <p className="favourite-btn" onClick={handleLove}>Favourited!</p>
                            :
                            <p className="not-favourite-btn" onClick={handleLove}>Favourite</p>
                        }
                        <p className="edit-btn" onClick={props.handleEdit}>Edit</p>
                        <p className="edit-btn" onClick={props.handleEdit}>Share</p>
                    </div>
                </div>
                :
                <div className="loading">
                    <p className="loading-message">Retrieving image tags...</p>
                </div>
            }
        </div>
    );
}

export default TagModal;