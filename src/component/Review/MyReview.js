import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../Hook/useTitle';
import MyReviewTable from './MyReviewTable';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [myreview, setmyReview] = useState([])
    useTitle('my-Review')
    useEffect(() => {
        fetch(`https://assignment-server-11-flax.vercel.app/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setmyReview(data))
    }, [user?.email])

    return (
        <div>
            <h2 className='text-center text-4xl my-8 ' >My Reviews</h2>
            {
                myreview.map(review => <MyReviewTable
                    key={review._id}
                    review={review}
                ></MyReviewTable>)
            }
        </div>
    );
};

export default MyReview;