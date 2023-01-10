import React, { useState, useEffect, useContext } from 'react';
import "./style.scss";
import { Context } from '../../context/Context';

const index = () => {
    const { apiValue } = useContext(Context);
    const [array, setArray] = useState([]);

    const api = async () => {
        const request = await fetch(`https://api.github.com/users/${apiValue}`);
        const result = await request.json();
        setArray([result]);
    }

    useEffect(() => {
        api();
    }, [apiValue]);
    console.log(array)

    return (
        <>
                {
                    array.length > 0 ?
                        array.map((item, index) => (

                            <div className='col-11 col-md-7 mx-auto rounded p-4 pb-1' key={index}>
                                <div className='row borderx mt-3'>
                                    <div className="col-10 col-md-11  ">
                                        <div className='align-center  d-flex'>
                                            <img src={item.avatar_url} className="rounded-circle" alt="avatar" width="40px" />
                                            <a href={item.html_url} target="_blank" className='text-decoration-none ms-1'><strong>{item.login}</strong> </a>
                                        </div>
                                        <div className='mt-3'>
                                        </div>
                                    </div>
                                    <div className='col-2 col-md-1  '>
                                        <button className='px-3 rounded border py-1'>Unfollow</button>
                                    </div>
                                </div>

                            </div>
                        )) : <h1 className='mt-5'>Loading . . .</h1>
                }

        </>
    );
};

export default index;