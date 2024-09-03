import React, { useEffect,useCallback, useState } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import axios from '../../axios/axios';
import {removePost} from '../../store/postSlice'
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const MyPosts = () => {

 
    
    const dispatch = useDispatch()

    // useEffect(()=>{
    //    dispatch(getMyPosts())
    // },[])
    // const data = useSelector(state=>state.post.posts)
    // console.log(data);

    const [myPosts,setMyPosts] = useState([])
    const fetchMyPosts = useCallback(async()=>{
        const {data} = await axios.get('posts/user/me')
        setMyPosts(data)
    })
    useEffect(()=>{
            fetchMyPosts()
    },[])
    console.log(myPosts);

    const navigate = useNavigate()
    

  
const deletePost = (id)=>{
    dispatch(removePost(id))
    toast('пост успешно удален')
    navigate('/')
}

    return (
        <section className='myposts'>
            <div className="container">
<h2>мои Посты</h2>
            {myPosts?.map((el)=>(
                <div>
                    <img src={`http://localhost:8080/${el.imgUrl}`} alt="" />
                    <h2>{el.title}</h2>

                    <button onClick={()=>deletePost(el._id)}>удалить</button>
                </div>
            ))}
            </div>
            
        </section>
    );
};

export default MyPosts;