import React, {useState} from 'react';
import axios from 'axios';
import './ImageModal.css';
import favouriteFile from './favourite.png';
import notFavouriteFile from './not-favourite.png';

const ImageModal = (props) => {
    const [favourite, setFavourite] = useState(props.postData.favourite);
    const who = props.postData.who;
    const where = props.postData.location;
    const when = props.postData.time_of_memory;
    const what = props.postData.what;

    const closeModal = (event) => {
        props.closeModal();
    }

    const handleLove = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:5000/favourite/${props.imgUrl.substring(30)}`, {favourite: !favourite})
        .then(res => {
            setFavourite(!favourite)
            console.log(favourite);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleEdit = (event) => {

    }
    
    if (props.showModal) {
        return (
            <div className="modal">
                <div className="image-modal-card">
                    <img className="modal-image" style={{width: '50%', height: '100%', objectFit: 'contain'}} src={props.imgUrl} />
                    <div className="details-container">
                        <div className="details">
                            {who && <p className="fact">{who}</p>}
                            {where && <p className="fact">{where}</p>}
                            {when && <p className="fact">{when}</p>}
                            {what && <p className="fact">{what}</p>}
                        </div>
                        <div className="love-close-btns">
                            <p className="love-edit" onClick={handleEdit}>Edit</p>
                        </div>
                        <div className="love-close-btns">
                            {
                                favourite
                                ?
                                <img className="favourite-img" src={favouriteFile} onClick={handleLove} />
                                :
                                <img className="favourite-img" src={notFavouriteFile} onClick={handleLove} />
                            }
                            <input
                                type="button"
                                value="Close"
                                className="upload-close"
                                onClick={closeModal}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

export default ImageModal;