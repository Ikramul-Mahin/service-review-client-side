import React from 'react';

const ReviewTable = ({ review }) => {
    return (
        <div className="overflow-x-auto w-full my-5">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Review</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={review.img} alt="Avatar Tailwind CSS Component" />

                                    </div>
                                    <h2 className='text-2xl mt-2 ml-3'>{review.name}</h2>
                                </div>

                            </div>
                        </td>
                        <td>
                            {review.rating}
                            <br />

                        </td>
                        <td>
                            {review.text}
                        </td>

                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default ReviewTable;