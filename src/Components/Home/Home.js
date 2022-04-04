import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Home = () => {
    const [ reviews ] = useReviews();
    const threeReviews = reviews.slice(0,3)
    const navigate = useNavigate()
    return (
        <div className='container'>
            <div className="row  my-5">
                <div className="col-12 col-md-7 d-flex align-items-center">
                    <div>
                    <h2 className='display-6 fw-bold text-uppercase'>Your choose is the best choose</h2>
                    <h2 className='display-6 fw-bold text-uppercase'>You are the best </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste dolorem accusamus ipsam aspernatur iure. 
                        Maiores eaque recusandae accusantium praesentium 
                        molestiae quod repellendus soluta expedita, sit illo labore saepe rerum dolor?</p>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <img src="https://img.freepik.com/free-photo/laptop-pencils-arrangement_23-2148128294.jpg?w=740&t=st=1649037983~exp=1649038583~hmac=71cea765a034a57a287e6332c718cd5a9fe2673d7ea257e7e80f51a3ddb65c32" className='img-fluid rounded-3' alt="" />
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                threeReviews.map(review => <Review key={review.id} review={review}></Review>)
            }
            </div>
            <div className="d-flex justify-content-center">
            <button onClick={() => navigate('/reviews')} className='btn text-white d-flex align-items-center rounded-pill px-4 py-2 mt-3 ' style={{backgroundColor:"rgb(236 72 153)"}}>
                See more
                <span><FontAwesomeIcon className=' ms-2' icon={(faArrowRight)}> </FontAwesomeIcon></span>
            </button>
            </div>
        </div>
    );
};

export default Home;