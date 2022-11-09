import React from 'react';

const SubjectCard = ({ subject }) => {
    const { _id, topic, img, price, rating, text } = subject
    return (
        <div className='w-full my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-60" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{topic}</h2>
                    <p>{text.slice(0, 100)}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubjectCard;