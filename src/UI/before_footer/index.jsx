import React from 'react';
import { NavLink } from "react-router-dom";

const index = () => {
    return (
        <div className='d-flex  justify-content-center'>
            <NavLink to="/repositories"className={({ isActive }) => isActive ? "btn pt-3 d-flex text-secondary " : "btn pt-3 d-flex"}><span><iconify-icon icon="material-symbols:chevron-left-rounded" width="26"></iconify-icon></span> Previous</NavLink>
            <NavLink to="/repositories_two" className={({ isActive }) => isActive ? "btn pt-3 d-flex text-secondary " : "btn pt-3 d-flex"}>Next<span className='mt-'><iconify-icon icon="material-symbols:chevron-right-rounded" width="26"></iconify-icon></span> </NavLink>
        </div>

    );
};

export default index;