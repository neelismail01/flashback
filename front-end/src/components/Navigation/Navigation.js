import React from 'react';
import './Navigation.css';

const Navigation = (props) => {


    return (
        <div className="navbar">
            <input 
                className="search-bar"
                type="text"
                placeholder="Search your memories..."
            />
            <p onClick={() => props.onRouteChange('signout')}>Sign Out</p>
        </div>
    );
}

export default Navigation;