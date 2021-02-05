import React, {useState} from 'react';
import axios from 'axios';
import './EditModal.css';

const EditModal = (props) => {
    const [who, setWho] = useState(props.who);
    const [where, setWhere] = useState(props.where);
    const [when, setWhen] = useState(props.when);
    const [what, setWhat] = useState(props.what);

    const imgUrl = props.imgUrl;

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
        axios.put('http://localhost:5000/edit', { who, what, where, when, imgUrl })
        .then(res => {
            props.closeEdit();
            props.refreshDetails({
                who: who,
                location: where,
                time_of_memory: when,
                what: what
            })
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleCancel = event => {
        event.preventDefault();
        props.closeEdit();
    }

    return (
        <div className="editmodal-container">
            <form>
                <input className="details-input" type="text" value={who} name="who" onChange={handleDetails} />
                <input className="details-input" type="text" value={where} name="where" onChange={handleDetails} />
                <input className="details-input" type="date" value={when} name="when" onChange={handleDetails} />
                <input className="details-input" type="text" value={what} name="what" onChange={handleDetails} />
                <div className="edit-row">
                    <button className="update-btn" onClick={handleCancel}>Cancel</button>
                    <button className="update-btn" onClick={handleFormSubmit}>Confirm</button>
                </div>
            </form>
        </div>
    );
}

export default EditModal;