import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/pngwing.com.png'
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext)
    const handleSignOut = () => {
        userSignOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            <li> <Link to='/'><button className="btn btn-active ">Home</button> </Link> </li>
                            <li> <Link to='/blog'><button className="btn btn-active ">Blog</button> </Link> </li>
                            {
                                user?.email ?
                                    <>
                                        <li><Link> <button onClick={handleSignOut} className="btn btn-active ">Log Out</button></Link> </li>
                                        <li> <Link to='/myReview'><button className="btn btn-active ">My Review</button> </Link> </li>
                                    </> :
                                    <>
                                        <li> <Link to='/login'><button className="btn btn-active ">Login</button> </Link> </li>
                                        <li> <Link to='/register'><button className="btn btn-active ">Register</button> </Link> </li>
                                        <li> <Link to='/addService'><button className="btn btn-active ">Add Service</button> </Link> </li>

                                    </>
                            }



                        </ul>
                    </div>

                    <Link to='/' className="btn btn-ghost normal-case text-xl"> <img className='w-10 bg-white text-white rounded-lg' src={logo} alt="" />   Super | Tutor</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li> <Link to='/'><button className="btn btn-active ">Home</button> </Link> </li>
                        <li> <Link to='/blog'><button className="btn btn-active ">Blog</button> </Link> </li>
                        <li> <Link to='/myReview'><button className="btn btn-active ">My Review</button> </Link> </li>
                        {
                            user?.email ?
                                <>
                                    <li><Link> <button onClick={handleSignOut} className="btn btn-active ">Log Out</button></Link> </li>

                                </> :
                                <>
                                    <li> <Link to='/login'><button className="btn btn-active ">Login</button> </Link> </li>
                                    <li> <Link to='/register'><button className="btn btn-active ">Register</button> </Link> </li>
                                    <li> <Link to='/addService'><button className="btn btn-active ">Add Service</button> </Link> </li>

                                </>
                        }







                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;