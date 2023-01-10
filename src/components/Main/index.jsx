import React, { useState, useEffect } from 'react';
import "./style.scss";

import Overview from "../OverViev"
import { NavLink } from "react-router-dom";







const index = () => {
  const [scroll, setScroll] = useState(0);

  function logit() {
    setScroll(window.pageYOffset);
  }


  useEffect(() => {
    function eventScroll() {
      window.addEventListener("scroll", logit);
    }
    eventScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  })


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
      <div className="fixed-positsiya border-bottom">
        <div className="Under_Nav ms-5 ps-5 md-none">

          <div className="d-flex  justify-content-center ">
            <div className={!(scrollY > 200) ? "blyashka container" : "blyashka visble container"} >
              <p className="fw-bolder"><img src={post.avatar_url} className="rounded-circle me-2" alt="avatar" width="30px" />Mirxojiakbar</p>
            </div>
            <NavLink to="/" className={({ isActive }) => isActive ? "pointer border_bottom-orange " : "pointer"}>
              <span className="me-2 some-w"><iconify-icon icon="ph:book-open-bold"  ></iconify-icon></span>
              Overview
            </NavLink>

            <NavLink to="/repositories"  className={({ isActive }) => isActive ? "pointer border_bottom-orange " : "pointer"}>
              <span className="me-2 some-w"><iconify-icon icon="pajamas:book" ></iconify-icon></span>
              Repositories

              <span className="rounded-pill bg-secondary ms-1 px-2 ">{post.public_repos}</span>
            </NavLink>

            <a href='https://github.com/Mirxojiakbar?tab=projects' className="pointer">
              <span className="me-2 some-w"><iconify-icon icon="mdi:shape-square-plus" ></iconify-icon></span>
              Projects
            </a>

            <a href='https://github.com/Mirxojiakbar?tab=packages' className="pointer">
              <span className="me-2 some-w"><iconify-icon icon="teenyicons:box-outline" ></iconify-icon></span>
              Packages
            </a>

            <a href='https://github.com/Mirxojiakbar?tab=stars' className="pointer">
              <span className="me-2 some-w"><iconify-icon icon="ic:round-star-outline" ></iconify-icon></span>
              Stars
            </a>
          </div>

        </div>

      </div>
    </>
  );
};


export default index;