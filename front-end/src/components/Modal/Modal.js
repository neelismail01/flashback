import React, { useState } from 'react';
import axios from 'axios';
import './Modal.css';

const Modal = (props) => {
    const [file, setFile] = useState('Choose File')
    const [fileSelected, setFileSelected] = useState(false);
    const [who, setWho] = useState();
    const [where, setWhere] = useState();
    const [when, setWhen] = useState();
    const [what, setWhat] = useState();

    const handleFileInput = event => {
        event.preventDefault();
        setFile(event.target.files[0]);
        setFileSelected(true)
    }

    const handleDetails = event => {
        const {name} = event.target;
        const {value} = event.target;
        
        if (name === 'who') {
            setWho(value);
        } else if (name === 'where') {
            setWhere(value);
        } else if (name === 'when') {
            setWhen(value);
        } else if (name === 'what') {
            setWhat(value);
        }
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const data = new FormData();
        console.log(props.userId)
        data.append('userId', props.userId);
        data.append('file', file);
        data.append('who', who);
        data.append('where', where);
        data.append('when', when);
        data.append('what', what);
        axios.post('http://localhost:5000/post', data)
        .then(res => {
            console.log(res.statusText);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const closeModal = event => {
        props.closeModal()
        console.log("in modal component");
    }

    if (props.showModal) {
        console.log("modal should be shown")
        return (
            <div className="modal">
                <div className="modal-card">
                    <form>
                        <div className="file-container">
                            <div className="select-file">
                                <input type="file" id="file" className="file" onChange={handleFileInput} />
                                <label htmlFor="file">Upload an Image</label>
                            </div>
                            <div className="file-name">
                                {
                                    fileSelected
                                    ?
                                    <p>{file.name}</p>
                                    :
                                    <p>File Not Selected</p>
                                }
                            </div>
                            <div className="detail-inputs">
                                <input className="file-details" type="text" placeholder="Who" name="who" onChange={handleDetails} />
                                <input className="file-details" type="text" placeholder="Where" name="where" onChange={handleDetails} />
                            </div>
                            <div className="detail-inputs">
                                <input className="file-details" type="date" placeholder="When" name="when" onChange={handleDetails} />
                                <input className="file-details" type="text" placeholder="What" name="what" onChange={handleDetails} />
                            </div>
                        </div>
                        <button className="submit" onClick={handleFormSubmit}>Add Memory</button>
                    </form>
                    <input
                        type="button"
                        value="Upload Memory"
                        className="upload"
                        onClick={closeModal}
                    />
                </div>
            </div>
        );
    }
    console.log('no modal should be shown')
    return null;
};

export default Modal;