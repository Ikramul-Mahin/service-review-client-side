import React from 'react';

const MyReviewTable = ({ review }) => {
    const { _id, img, rating, text, name } = review
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure u want to confirm!')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }

    }
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
                            <label >
                                <button onClick={() => { handleDelete(_id) }} >X</button>
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

export default MyReviewTable;