import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaBeer, FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';
import useTitle from '../../Hook/useTitle';
const Login = () => {
    const { loginUser, signWithGoggle } = useContext(AuthContext)
    let location = useLocation()
    useTitle('login')
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('successfully login')
                navigate(from, { replace: true })
                form.reset()

            })
            .catch(error => console.error(error))
    }
    const handleGoggle = () => {
        signWithGoggle()
    }
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center">

                        <img className='w-4/6  ml-20' src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000' alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
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
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <Link to='/register'>Please Register</Link>
                            <div className='btn outline bg-primary'>
                                <FaGoogle />
                                <button className='mx-3' onClick={handleGoggle}> Log In With Goggle</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;