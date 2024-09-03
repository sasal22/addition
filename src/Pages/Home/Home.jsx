import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getPosts } from '../../store/postSlice';
import Post from '../../Components/Post';
import './Home.scss'
import PopularPosts from '../../Components/PopularPost';





const Home = () => {
   

    const dispatch = useDispatch()

    const alibek = useSelector(state=>state.post)
    

    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])
 


    return (
        <section className='home'>
            <div className="container">
               
                <div className="home__posts">
                {alibek.posts?.map((el)=>(
                    <Post el={el}/>
                    
                ))}
                </div>
                <div className="home__popular">
                {alibek.popularPosts?.map((el)=>(
                    <PopularPosts el={el}/>
                ))}
                </div>

            </div>
        </section>
    );
};

export default Home;