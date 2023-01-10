import React, { useState, useEffect } from 'react';
import "./style.scss";

const index = () => {
    const [post, setPost] = useState([]);

    const fetchPost = async () => {
        const response = await fetch("https://api.github.com/users/Mirxojiakbar/repos");
        const result = await response.json();
        setPost(result);


    };
    post.splice(0, 26);


    useEffect(() => {
        fetchPost()
    }, []);

    return (
        <div className='col-12  col-md-8  '>
            <div className='w-100 border mt-4 p-4 rounded'>
                <div className='row mb-3'>
                    <span className='col-11'>
                        Mirxojiakbar/README.md
                    </span>
                    <span className='col-1 cursor-pointer'>
                        <iconify-icon icon="uil:pen" width="20"></iconify-icon>
                    </span>
                </div>
                <h4 className='border-bottom pb-2'>
                    Mirxojiakbar Baxtiyorov | JavaScript developer
                </h4>
                <img className='videos' src="https://camo.githubusercontent.com/0b0ebdc4b9795af8ec7819ecaf3bb5c3df0e59c4deda48d833b11db6cb6e5633/68747470733a2f2f726561646d652d747970696e672d7376672e6865726f6b756170702e636f6d3f666f6e743d4d6f6e7473657272617426636f6c6f723d636f72616c266c696e65733d49276d2b612b46726f6e74656e642b446576656c6f7065723b49276d2b612b52656163742b4a532b446576656c6f706572" alt="I'm React JS Developer" />
                <h5 className='mb-3 mt-4 '>Follow me</h5>
                <div className='d-flex '>
                    <a href='https://t.me/mirxojiakbar' className='bg-dark text-white p-2 some-family'><iconify-icon icon="logos:telegram" width="20"></iconify-icon> <strong>T e l e g r a m</strong> </a>
                    <a href='https://www.instagram.com/mir.xojiakbar/' className='bg-dark text-white p-2 some-family'><iconify-icon icon="uil:instagram" style={{ color: "#e4405f" }} width="20"></iconify-icon><strong>I n s t a g r a m</strong> </a>
                    <a href='https://www.linkedin.com/' className='bg-dark text-white p-2 some-family ex-sm-none'><iconify-icon icon="bi:linkedin" style={{ color: "darkblue" }} width="20"></iconify-icon><strong>L i n k e d I n</strong> </a>
                    <a href='https://twitter.com/' className='bg-dark text-white p-2 some-family sm-none'><iconify-icon icon="logos:twitter" style={{ color: "#e4405f" }} width="20"></iconify-icon><strong>T w i t t e r</strong> </a>
                </div>
                <div className='d-flex mt-2'>
                    <a href='https://twitter.com/' className='bg-dark text-white p-2 sm-yes some-family'><iconify-icon icon="logos:twitter" style={{ color: "#e4405f" }} width="20"></iconify-icon><strong className='ms-2'>T w i t t e r</strong> </a>
                    <a href='https://www.linkedin.com/' className='bg-dark text-white ex-sm-yes p-2 some-family'><iconify-icon icon="bi:linkedin" style={{ color: "darkblue" }} width="20"></iconify-icon><strong className='ms-2'>L i n k e d I n</strong> </a>
                </div>
                <h5 className='mb-3 mt-5 '>
                    Contact With Me
                </h5>
                <div className='d-flex mb-3'>
                    <a href='#' className='bg-dark pochta text-white p-2 w-45 some-family' ><iconify-icon icon="simple-icons:gmail" style={{ color: "red" }} width="20"></iconify-icon> <strong>M i r x o j i a k b a r b 2 0 0 8 @ g m a i l . c o m</strong> </a>

                    <a href='https://t.me/mirxojiakbar' className='bg-dark text-white p-2 some-family sm-none'><iconify-icon icon="logos:telegram" width="20"></iconify-icon> <strong>T e l e g r a m</strong> </a>
                </div>
                <a href='https://t.me/mirxojiakbar' className='bg-dark text-white p-2 some-family  sm-yes'><iconify-icon icon="logos:telegram" width="20"></iconify-icon> <strong>T e l e g r a m</strong> </a>

            </div>


            <h3 className='mt-4'>
                Pinned
            </h3>


            <div className='row justify-content-between d-flex'>
                {post.length > 0 &&
                    post.map((el) => {
                        return <div key={el.id}  className='col-11 col-md-5 mt-4 border rounded p-4 pb-1'>
                            <div className='align-center d-flex'>
                                <iconify-icon icon="pajamas:book" width="20"></iconify-icon>
                                <a href={el.html_url} className='text-decoration-none ms-1'>
                                    <strong>{el.name}</strong>
                                </a>
                                <span className='border px-1 mx-1 rounded-pill text-secondary'>{el.visibility}</span>
                            </div>
                            <div className='mt-3'>
                                <p className='text-secondary'>{el.description}</p>
                            </div>
                            <div className='d-flex jusitfy-content-center mt-4'>
                                <span><iconify-icon icon="openmoji:yellow-circle" width="26"></iconify-icon></span>
                                <p>{el.language}</p>
                            </div>
                        </div>
                    })}
            </div>
        </div>
    );
};

export default index;