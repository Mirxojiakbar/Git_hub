import React, { useState, useEffect } from 'react';
import "./style.scss";

import BefFooter from "../../UI/before_footer"

const index = () => {
    const [post, setPost] = useState([]);
    


    const fetchPost = async () => {
        const response = await fetch("https://api.github.com/users/Mirxojiakbar/repos");
        const result = await response.json();
        setPost(result);


    };
    post.splice(15);
    useEffect(() => {
        fetchPost()
    }, []);

    return (
        <>
            <div className='col-12 col-md-8 '>
                <div className='text-left  md-center'>
                    <div className='position-relative '>
                        <button className=' bg-success btn rounded md-yes text-white w-100 mt-3'><span className="me-2"><iconify-icon icon="pajamas:book" width="20"></iconify-icon></span>New</button>
                        <input type="text" placeholder='Find a repository...' className='w-50 px-3 mt-4 py-1 rounded some_input' />

                        <button className='rounded mt-2 btn border ms-2 fw-bolder'>Type <iconify-icon icon="gridicons:dropdown" width="20
                "></iconify-icon></button>
                        <button className='rounded btn border ms-1 fw-bolder'>Language <iconify-icon icon="gridicons:dropdown" width="20
                "></iconify-icon></button>
                        <button className='rounded btn border ms-1  fw-bolder'>Sort <iconify-icon icon="gridicons:dropdown" width="20
                "></iconify-icon></button>
                        <button className='rounded stick btn border ms-1 bg-success text-white fw-bolder'><span className="me-2"><iconify-icon icon="pajamas:book" width="20"></iconify-icon></span>New</button>
                    </div>
                </div>
                <div className=''>
                    <div className='col-12   rounded '>

                        {post.length > 0 &&
                            post.map((el) => {

                                return <div key={el.id} className='row  border-top p-4 ps-0  pb-1 border-bottom'>
                                    <div className="col-7 col-sm-10 ">
                                        <div className='align-center d-flex'>
                                            <iconify-icon icon="pajamas:book" width="20"></iconify-icon>
                                            <a href={el.html_url} className='text-decoration-none ms-1'>
                                                <strong>
                                                    {el.name}
                                                </strong> </a>
                                            <span className='border px-1 mx-1 rounded-pill text-secondary'>{el.visibility}</span>
                                        </div>
                                        <div className='mt-3'>
                                            <p className='text-secondary'>{el.description}</p>
                                        </div>
                                        <div className='d-flex jusitfy-content-center mt-4'>
                                            <span>
                                                <iconify-icon icon="openmoji:red-circle" width="25"></iconify-icon>
                                            </span>
                                            <p>{el.language}</p>
                                        </div>
                                    </div>
                                    <div className='col-4 col-sm-2  '>
                                        <button className='btn border  p-0 d-flex'>
                                            <button className='btn d-flex border-end'><iconify-icon icon="material-symbols:star-outline-rounded" width="20"></iconify-icon><strong className='ms-2'>Star</strong></button>

                                            <button className='btn border-start px-0 px-1 text-center d-flex align-center'><iconify-icon icon="material-symbols:arrow-drop-down" width="20"></iconify-icon></button>
                                        </button>
                                        <p className='some-line' ></p>
                                    </div>
                                </div>
                            })}


                    </div>

                </div>
            </div>
            <BefFooter />
        </>
    );
};

export default index;