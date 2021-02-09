import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    return (
        <div className="sidebar-container">
            {
                props.currentPage === 'home'
                ?
                (
                    <div>
                        <div className="sidebar-item-current" onClick={() => props.onHome()}>Most Recent</div>
                        <div className="sidebar-item" onClick={() => props.onFavourite()}>Favourites</div>
                        <div className="sidebar-item">Memory Lane</div>
                    </div>
                )
                :
                (
                    props.currentPage === 'favourites'
                    ?
                    (
                        <div>
                            <div className="sidebar-item" onClick={() => props.onHome()}>Most Recent</div>
                            <div className="sidebar-item-current" onClick={() => props.onFavourite()}>Favourites</div>
                            <div className="sidebar-item">Memory Lane</div>
                        </div>
                    )
                    :
                    (
                        <div>
                            <div className="sidebar-item" onClick={() => props.onHome()}>Most Recent</div>
                            <div className="sidebar-item" onClick={() => props.onFavourite()}>Favourites</div>
                            <div className="sidebar-item-current">Memory Lane</div>
                        </div>
                    )

                )
            }
                <input
                    id="signout"
                    type="button"
                    onClick={() => props.onSignout('signout')}
                />
        </div>
    );
}

export default Sidebar;