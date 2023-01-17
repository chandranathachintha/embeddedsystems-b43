import React from 'react';
import { Link } from 'react-router-dom';
import { cdata } from './cdata';
const DifTopics = () => {
    
      
  return (
    <div className='d-flex justify-content-around flex-wrap mt-3'>
      <div className="card mt-4" style={{width:200 }}>
            <img src="https://i.pinimg.com/originals/6e/46/e7/6e46e7dbe2bb73dacc055e5dbd85c3ad.png" className="card-img-top rounded" alt='' />
            <div className="card-body ">
            <h5 className="card-title">C Programming</h5>
            <p className="card-text">Recorded Videos</p>
            <Link to="/Cprogramming">
            View all
            </Link>
             </div>
      </div>
      
      
    </div>
  );
}

export default DifTopics;
