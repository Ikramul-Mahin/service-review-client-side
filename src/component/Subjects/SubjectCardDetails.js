import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SubjectCardDetails = () => {
    const cardDetails = useLoaderData()
    return (
        <div className='flex justify-center'>
            <div className="card md:w-6/12 sm:w-6/12  bg-base-100 shadow-xl mx-20 my-12">
                <img className='h-96' src={cardDetails.img} alt="Shoes" />
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
                </div>
            </div>
        </div>
    );
};

export default SubjectCardDetails;