import React, {useState} from 'react';
import './ImageModal.css';
import EditModal from '../EditModal/EditModal';
import TagModal from '../TagModal/TagModal';
import axios from 'axios';

const ImageModal = (props) => {
    const [editVisible, setEditVisible] = useState(false);

    const closeModal = (event) => {
        props.closeModal();
    }

    const handleEdit = (event) => {
        setEditVisible(true);
    }

    const closeEdit = (event) => {
        setEditVisible(false);
    }

    const handleDelete = event => {
        event.preventDefault();
        console.log('here');
        axios.delete(`http://localhost:5000/delete/${props.imgUrl.substring(30)}`)
        .then(response => {
            console.log(response);
            props.closeModal();
        })
        .catch(err => console.log(err));
    }
    
    if (props.showModal) {
        return (
            <div className="modal">
                <div className="image-modal-card">
                    <img className="modal-image" style={{width: '50%', height: '100%', objectFit: 'contain'}} alt="post" src={props.imgUrl} />
                    <div className="details-container">
                        <div className="close-container">
                            <input
                                type="button"
                                value="X"
                                className="upload-close"
                                onClick={closeModal}
                            />
                        </div>
                            {
                                editVisible
                                ?
                                <EditModal closeEdit={closeEdit} imgUrl={props.imgUrl} />
                                :
                                <TagModal imgUrl={props.imgUrl} handleEdit={handleEdit} />
                            }
                        <div className="delete">
                            <button className="delete-btn" onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

export default ImageModal;