import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../Hook/useTitle';


const Register = () => {
    const { createUser, upadateUserProfile, signWithGoggle } = useContext(AuthContext)
    useTitle('Register')
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const name = form.name.value
        const photoURL = form.photoURL.value
        console.log(email, password, name, photoURL)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                handleUpdateProfile(name, photoURL)
                toast.success('successfully Registered')
                form.reset()
            })
            .catch(error => console.error(error))
    }
    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        upadateUserProfile(profile)
            .then(() => { })
            .catch(err => console.error(err))
    }
    const handleGoggle = () => {
        signWithGoggle()
    }
    return (
        <div className='flex justify-center'>
            <div>
                <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center">
                            <img className='w-4/6 ml-20' src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000' alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h1 className="text-5xl font-bold">Register now!</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoUrl</span>
                                    </label>
                                    <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <Link to='/login' >Already Have an Account</Link>
                                <div className='btn outline bg-primary'>
                                    <button onClick={handleGoggle}>Register In With Goggle</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;