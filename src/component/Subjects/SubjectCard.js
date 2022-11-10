import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const SubjectCard = ({ subject }) => {
    const { _id, topic, img, price, text } = subject

    return (
        <div className='w-full my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                {/* 
                    <img src={img} alt="Shoes"  />
                < */}
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure className="px-10 pt-10">
                            <img src={img} alt="" className="rounded-xl h-60" />
                        </figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{topic}</h2>
                    <h2 className='text-lg font-semibold'>Price:${price}</h2>

                    <p>{text.slice(0, 100)}</p>
                    <div className="card-actions">
                        <Link to={`/subjects/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SubjectCard;