import React, { useState, useEffect } from "react";
import "./style.scss";



import Overview from "../../components/OverViev"
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
            <div className="stiky md-yes">
                <div className="Under_Nav  border-bottom ">
                    <div className="d-flex scrollbar  mt-3 justify-content-center">
                        <NavLink to="/" className={({ isActive }) => isActive ? "pointer border_bottom-orange" : "pointer"}>
                            <span className="me-2"><iconify-icon icon="ph:book-open-bold"></iconify-icon></span>
                            Overview
                        </NavLink>

                        <NavLink to="/repositories" className={({ isActive }) => isActive ? "pointer border_bottom-orange " : "pointer "}>
                            <span className="me-2"><iconify-icon icon="pajamas:book"></iconify-icon></span>
                            Repositories
                            <span className="rounded-pill bg-secondary ms-1 px-2 ">{post.public_repos}</span>
                        </NavLink>

                        <div className="pointer ">
                            <span className="me-2 "><iconify-icon icon="mdi:shape-square-plus"></iconify-icon></span>
                            Projects
                        </div>

                        <div className="pointer ">
                            <span className="me-2 "><iconify-icon icon="teenyicons:box-outline"></iconify-icon></span>
                            Packages
                        </div>

                        <div className="pointer ">
                            <span className="me-2"><iconify-icon icon="ic:round-star-outline"></iconify-icon></span>
                            Stars
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default index;