import React, {useState} from 'react';
import axios from 'axios';
import './Post.css';

const Post = (props) => {
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

    const handleFormSubmit = async event => {
        event.preventDefault();
        console.log(where);
        const data = new FormData();
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

    return (
            <div className="post">
                <form>
                    <div className="file-container">
                        <input type="file" id="file" className="file" onChange={handleFileInput} />
                        <label htmlFor="file">Upload an Image</label>
                        <div className="file-name">
                            {
                                fileSelected
                                ?
                                <p>{file.name}</p>
                                :
                                <p>File Not Selected</p>
                            }
                        </div>
                    </div>
                    <input className="file-details" type="text" placeholder="Who" name="who" onChange={handleDetails} />
                    <input className="file-details" type="text" placeholder="Where" name="where" onChange={handleDetails} />
                    <input className="file-details" type="date" placeholder="When" name="when" onChange={handleDetails} />
                    <input className="file-details" type="text" placeholder="What" name="what" onChange={handleDetails} />
                    <button className="submit" onClick={handleFormSubmit} >
                        Add Memory
                    </button>
                </form>
            </div>
    );
}

export default Post;