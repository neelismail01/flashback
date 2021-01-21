import React, {useState} from 'react';
import axios from 'axios';
import './Post.css';

const Post = (props) => {
    const [file, setFile] = useState('Choose File')

    const handleFileInput = event => {
        setFile(event.target.files[0]);
    }

    const handleFormSubmit = async event => {
        const data = new FormData();
        data.append('file', file);
        axios.post('http://localhost:5000/post', data, {

        }).then(res => {
            console.log(res.statusText);
        })
    }

    return (
        <div className="post">
            <form>
                <input type="file" name="file" onChange={handleFileInput} />
                <button type="submit" onClick={handleFormSubmit}>
                    Upload
                </button>
            </form>
        </div>
    );
}

export default Post;