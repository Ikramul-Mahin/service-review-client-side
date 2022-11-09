import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';


const Register = () => {
    const { createUser, upadateUserProfile } = useContext(AuthContext)

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
    return (
        <div className=''>
            <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
                <div className="hero-content md:flex md:justify-center">
                    <div className="text-center">
                        <img className='w-3/6' src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000' alt="" />
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
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;