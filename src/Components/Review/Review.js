import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Review = ({ review }) => {
    const { name, picture, comment,star } = review;
    return (
        <div className="col">
            <div className="shadow rounded p-4">
            <div className=" d-flex">
                <img className='me-2 rounded-circle' width={'42px'} src={picture} alt="" />
                <h4 className=' d-flex align-items-center'>{name}</h4>
            </div>
            <div>
                <span>Rating: </span>
                <Rating
                    initialRating={star}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating>
            </div>
                <p>{comment.slice(0,150)}.</p>
            </div>
        </div>
    );
}; 

export default Review;