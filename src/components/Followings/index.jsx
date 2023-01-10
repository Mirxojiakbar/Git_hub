import React, { useState, useEffect }  from 'react';
import "./style.scss"

const index = () => {
    const [post, setPost] = useState([]);

    
    const fetchPost = async () => {
        const response = await fetch("https://api.github.com/users/Mirxojiakbar/following");
        const result = await response.json();
        setPost(result);



    };



    useEffect(() => {
        fetchPost()
    }, []);
    return (
        <>

            <div className='col-11 col-md-7  mx-auto rounded p-4 pb-1'>
                {post.length > 0 &&
                    post.map((el) => {
                    return <div key={el.id} className='row borderx mt-3'>
                            <div className="col-10 col-md-11  ">
                                <div className='align-center  d-flex'>
                                    <img src={el.avatar_url} className="rounded-circle" alt="avatar" width="40px" />
                                    <a href={el.html_url}
                                    className='text-dark text-decoration-none ms-1'><strong>{el.login}</strong> </a>
                                </div>
                                <div className='mt-3'>
                                </div>
                            </div>
                            <div className='col-2 col-md-1  '>
                                <button className='px-3 rounded border py-1'>Unfollow</button>
                            </div>
                        </div>
                    })}
            </div>

        </>
    );
};

export default index;