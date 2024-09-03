import React, { useState } from 'react';
import './Post.scss'
import { Link } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";





const Post = ({el}) => {
   


    return (
            
                <div className='post' key={el._id}>
                        <Link to={`/onepost/${el._id}`}>
                        <img className='post__img' src={`http://localhost:8080/${el.imgUrl}`} alt="" />
                        </Link>
                        <h2 className='post__title'>{el.title}</h2>
                        <p className='post__text'>{el.text}</p>
                        <div className='post__info'>
                            <span><IoMdEye /> {el.views}</span>
                            <span><AiOutlineLike /> 5</span>
                            <span><FaCommentDots /> {el?.comments.length}</span>
                        </div>
                        <h3>ИМЯ:{el.username}</h3>
                        

                </div>
    );
};

export default Post;