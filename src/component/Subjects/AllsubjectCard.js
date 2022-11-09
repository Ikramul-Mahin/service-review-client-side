import React from 'react';

const AllsubjectCard = () => {
    return (
        <div>
            <div className='w-full my-10'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img alt="Shoes" className="rounded-xl h-60" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"></h2>
                        <p></p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllsubjectCard;