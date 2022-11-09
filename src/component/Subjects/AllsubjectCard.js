import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllsubjectCard = ({ allSubject }) => {
    const { _id, img, price, text, rating, topic } = allSubject
    return (
        <div>
            <div className='w-full my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <figure className="px-10 pt-10">
                                <img src={img} alt="" className="rounded-xl h-60" />
                            </figure>
                        </PhotoView>
                    </PhotoProvider>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{topic}</h2>
                        <p>{text.slice(0, 120)}</p>
                        <div className="card-actions">
                            <Link to={`/allsubjects/${_id}`}>
                                <button className="btn btn-primary">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllsubjectCard;