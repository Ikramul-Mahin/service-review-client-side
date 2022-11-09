import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllSubjectCardDetails = () => {
    const allDetails = useLoaderData()
    return (
        <div>
            <div className='flex justify-center'>
                <div className="card md:w-6/12 sm:w-6/12  bg-base-100 shadow-xl mx-20 my-12">
                    <img className='h-96' src={allDetails.img} alt="Shoes" />
                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            {allDetails.topic}
                            <div className="badge badge-primary">NEW</div>
                        </h2>
                        <p>{allDetails.text}</p>
                        <div className="card-actions justify-start my-4">
                            <div className="badge text-lg p-5 badge-primary">Price:${allDetails.price}</div>
                            <div className="badge text-lg p-5 badge-primary">Ratings {allDetails.rating}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllSubjectCardDetails;