import React, { useState, useEffect } from 'react';
import "./style.scss";


// import followers from "../Followers"
import { NavLink } from "react-router-dom";

const index = () => {
    const [post, setPost] = useState([]);

    const fetchPost = async () => {
        const response = await fetch("https://api.github.com/users/Mirxojiakbar");
        const result = await response.json();
        setPost(result);

    };



    useEffect(() => {
        fetchPost()
    }, []);
    return (
        <>
            <div className='col-lg-4 col-12 col-md-4 '>
                <div className='md-inline  position-relative'>
                    <img src={post.avatar_url} alt="Logo" className='rounded-circle avatar' width="85%" />
                    <p className='arrow md-none'>🎯 <span className='d-noe'>Focusing</span></p>
                </div>
                <div className='md-inline '>
                    <h2 className='md-inline'>
                        {post.name}
                    </h2>
                    <h4 className='text-secondary md-inline'>
                    {post.login}
                    </h4>
                </div>
                <p className='arrow2 md-yes'>🎯 <span>Focusing</span></p>
                <p className='mt-3'>{post.bio}</p>
                <button className='rounded buttons-width'>Edit Profile</button>
                <div className='d-flex mt-4'>
                    <p className=''><iconify-icon icon="mdi:human-queue" width=""></iconify-icon><strong>{post.followers}</strong>
                        <NavLink to="/followers" className={({ isActive }) => isActive ? "fw-bold text-decoration-none text-dark" : "text-dark text-decoration-none "}> followers</NavLink>

                    </p><strong> . </strong> <p><strong>{post.following}</strong> <NavLink to="/followings" className={({ isActive }) => isActive ? "fw-bold text-decoration-none text-dark" : "text-decoration-none text-dark"}> following</NavLink> </p>
                </div>
                <div className='d-flex text-white align-items-center border-bottom'>
                    <p><iconify-icon icon="material-symbols:location-on-outline-rounded" width="20"></iconify-icon> Uzbekistan</p>
                </div>
                <h5 className='mt-3'>Achievements</h5>
                <img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" className="ms-2 rounded-circle" alt="avatar" width="70px" />
                <img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" className="ms-2 rounded-circle" alt="avatar" width="70px" />

                <h6 className='text-success mt-4 cursor-pointer will-mb'><span className='border-lg  px-2 rounded-pill text-secondary'>Beta</span>Send Feedback</h6>
            </div>
        </>
    );
};

export default index;