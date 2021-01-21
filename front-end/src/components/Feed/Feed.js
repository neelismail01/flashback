import React from 'react';
import './Feed.css';

const Feed = (props) => {

  return (
      <div className="feed-container">
        <table>
          <thead>
            <tr>
              <td className="name-of-poster">
                Neel posted:
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="post-text">
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}

export default Feed;