import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewTable from '../Review/ReviewTable';

const SubjectCardDetails = () => {
    const cardDetails = useLoaderData()
    const { img } = cardDetails
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://assignment-server-11-flax.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className=''>
            <div className='flex justify-center'>
                <div className="card md:w-6/12 sm:w-6/12  bg-base-100 shadow-xl mx-20 my-12">
                    <img className='h-96' src={img} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            {cardDetails.topic}
                            <div className="badge badge-primary">NEW</div>
                        </h2>
                        <p>{cardDetails.text}</p>
                        <div className="card-actions justify-start my-4">
                            <div className="badge text-lg p-5 badge-primary">Price:${cardDetails.price}</div>
                            <div className="badge text-lg p-5 badge-primary">Ratings {cardDetails.rating}</div>
                        </div>
                        <div className='text-center'>
                            <Link to='/addReview'>
                                <button className='btn btn-primary'>Add A Review</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center text-4xl my-8'>Students Review</h2>
                {
                    reviews.map(review => <ReviewTable
                        key={review._id}
                        review={review}

                    ></ReviewTable>)
                }
            </div>
        </div>
    );
};

export default SubjectCardDetails;