import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <div className='container'>
            <h3 className="text-center mt-3 mb-5">What our customers says!</h3>
            <div className="row row-cols-1 row-cols-md-3 g-3">
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;