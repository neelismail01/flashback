import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './EditModal.css';

const EditModal = (props) => {
    const [loaded, setLoaded] = useState(false);
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

    useEffect(() => {
        axios.get(`http://localhost:5000/details/${props.imgUrl.substring(30)}`)
        .then(response => {
            setWho(response.data.who);
            setWhere(response.data.location);
            setWhen(response.data.time_of_memory);
            setWhat(response.data.what);
            setLoaded(true);
            console.log(`${who}, ${what}, ${where}, ${when}`);
        })
        .catch(err => console.log(err));
    })

    return (
        <div className="editmodal-container">
            {
                loaded
                ?
                <form>
                    <input className="details-input" type="text" value={who} name="who" onChange={handleDetails} />
                    <input className="details-input" type="text" value={where} name="where" onChange={handleDetails} />
                    <input className="details-input" type="date" value={when} name="when" onChange={handleDetails} />
                    <input className="details-input" type="text" value={what} name="what" onChange={handleDetails} />
                    <div className="buttons-row">
                        <button className="update-btn" onClick={handleCancel}>Cancel</button>
                        <button className="update-btn" onClick={handleFormSubmit}>Confirm</button>
                    </div>
                </form>
                :
                <div className="loading">
                    <p className="loading-message">Retrieving image tags...</p>
                </div>
            }
        </div>
    );
}

export default EditModal;