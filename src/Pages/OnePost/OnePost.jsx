import { useParams } from 'react-router-dom';
import axios from '../../axios/axios';
import React, { useEffect, useState,useCallback } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { createComment, getPostComment } from '../../store/commentSlice';


const OnePost = () => {

    const commenty = useSelector(state=>state.comment.comments)
    console.log(commenty)
    const params = useParams()
    const [one,setOne] = useState({})


    const dispatch = useDispatch()
    const [comment,setComment] = useState(null)

    const addComment = (e)=>{
        const postId = params.id
        e.preventDefault()
dispatch(createComment({postId,comment}))



    }



    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/posts/${params.id}`)
        setOne(data)
    }, [params.id])

    useEffect(() => {
        fetchPost()
    }, [fetchPost]);


    const fetchComments = useCallback(async()=>{
        try{
            dispatch(getPostComment(params.id))
        }catch(err){
            console.log(err)
        }
    },[params.id,dispatch])

    useEffect(()=>{
        fetchComments()
    },[fetchComments])
    return (
        <section>
            <div className="container">
                <h1>ЭТО ОДИН ПОСТ</h1>
                <img src={`http://localhost:8080/${one.imgUrl}`} alt="" />
                <h2>{one.views}</h2>
                <ul>
                    {commenty[0]?.map((el)=>(
                        <li>{el.comment}</li>
                    ))}
                </ul>

                <form onSubmit={(e)=>addComment(e)}>
                            <label>
                                <input value={comment} onChange={(e)=>setComment(e.target.value)} type="text" placeholder='введите комментарий' />
                            </label>
                            <button>отправить</button>
                        </form>
            </div>
        </section>
    );
};

export default OnePost;