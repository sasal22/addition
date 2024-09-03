import React from 'react';
import './PopularPost.scss'
import { Link } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";





const PopularPosts = ({el}) => {
    return (
            
                <div className='popularPosts' key={el._id}>
                        <Link to={`/onepost/${el._id}`}>
                        <img className='popularPosts__img' src={`http://localhost:8080/${el.imgUrl}`} alt="" />
                        </Link>
                        <h2 className='popularPosts__title'>{el.title}</h2>
                        <p className='popularPosts__text'>{el.text}</p>
                        <div className='popularPosts__info'>
                            <span><IoMdEye /> {el.views}</span>
                            <span><AiOutlineLike /> 5</span>
                            <span><FaCommentDots /> 2</span>
                        </div>
                        <h3>ИМЯ:{el.username}</h3>
                </div>
    );
};

export default PopularPosts;