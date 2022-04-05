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
            <div className="row gy-5 g-md-5 mt-1 mb-5 my-md-5 " >
                <div className="col-12 col-md-7 order-1 order-md-0 d-flex align-items-center ">
                    <div>
                    <h2 className='display-6 fw-bold text-uppercase'>Your Next Laptop <br /> <span style={{color :"rgb(236 72 153)"}}>best Laptop</span></h2>
                    <p>The Best product for you. our product may the best proudct for you.You can buy. <br /> we have good collection of various brands for Laptops</p>
                        <button className='btn text-white' style={{backgroundColor:"rgb(236 72 153)"}}> Live demo</button>
                    </div>
                    
                </div>
                <div className="col-12 col-md-5 order-0 order-md-1 ">
                    <img src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/139319-laptops-news-buyer-s-guide-which-apple-macbook-is-best-for-you-macbook-air-or-macbook-pro-image13-gpzfht5rnc.jpg" className='img-fluid rounded-3' alt="" />
                </div>
            </div>
            <h3 className=' text-center mb-5'>Customer Reviews(3)</h3>
            <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                threeReviews.map(review => <Review key={review.id} review={review}></Review>)
            }
            </div>
            <div className="d-flex justify-content-end mb-5">
            <button onClick={() => navigate('/reviews')} className='btn text-white d-flex align-items-center rounded-pill px-4 py-2 mt-3 ' style={{backgroundColor:"rgb(236 72 153)"}}>
                See All Reviews
                <span><FontAwesomeIcon className=' ms-2' icon={(faArrowRight)}> </FontAwesomeIcon></span>
            </button>
            </div>
        </div>
    );
};

export default Home;