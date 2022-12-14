import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../Hook/useTitle';

const AddReview = () => {
    const [subject, setSubject] = useState([])
    useTitle('Add-Review')
    useEffect(() => {
        fetch('https://assignment-server-11-flax.vercel.app/allsubjects')
            .then(res => res.json())
            .then(data => {
                console.log(data[0].topic)
                setSubject(data)
            })
    }, [])


    const { user } = useContext(AuthContext)
    const handleAddReview = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const img = form.img.value
        const email = user?.email || 'unregistered'
        const rating = form.rating.value
        const text = form.text.value
        console.log(name, img, text, rating, email)

        const review = {

            email,
            name,
            img,
            rating,
            text
        }
        fetch('https://assignment-server-11-flax.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Successfully addded a Review')

            })
        form.reset()
    }
    return (
        <div>

            <div className="hero min-h-screen bg-base-200 text-center">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <form onSubmit={handleAddReview} className="card flex-shrink-0 w-96  shadow-2xl bg-base-100">
                        <h2 className='text-4xl'>Add Review </h2>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" defaultValue={user?.email} readOnly className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="Image" name='img' className="input input-bordered" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="Rateing" name='rating' className="input input-bordered" />

                            </div>
                            <div>
                                <textarea name='text' className="textarea textarea-primary" placeholder="Bio"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value='Add' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div >
    );
};

export default AddReview;