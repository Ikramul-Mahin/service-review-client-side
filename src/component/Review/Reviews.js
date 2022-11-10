import React, { useEffect, useState } from 'react';
import ReviewTable from './ReviewTable';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://assignment-server-11-flax.vercel.app/reviews')
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