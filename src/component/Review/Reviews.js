import React, { useEffect, useState } from 'react';
import ReviewTable from './ReviewTable';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-4xl my-8'>Students Review</h2>
            {
                reviews.map(review => <ReviewTable
                    key={review._id}
                    review={review}
                ></ReviewTable>)
            }
        </div>
    );
};

export default Reviews;