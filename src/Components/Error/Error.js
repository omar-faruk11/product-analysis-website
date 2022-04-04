import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='d-flex align-items-center flex-column justify-content-center' style={{height:'100vh'}} > 
            <p className="display-1 fw-bold">404</p>
            <p className="fs-4 fw-bold">Oopsie! Something's missing...</p>
            <p className='  justify-content-center'>It seems like we donut find what you searched. The page you were looking for <br/> doesn't exist, isn't avilable or was loading incorrectly.
            </p>
            <button onClick={() => navigate('/')} className='btn text-white d-flex align-items-center rounded-pill px-4 py-2 ' style={{backgroundColor:"rgb(236 72 153)"}}>
                Go to Home
                <span><FontAwesomeIcon className=' ms-2' icon={(faArrowRight)}> </FontAwesomeIcon></span>
            </button>
        </div>
    );
};

export default Error;