import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { createPost } from '../../store/postSlice';

const CreatePost = () => {

    const [image,setImage] = useState('')
    const [title,setTitle]=useState('')
    const [text,setText]=useState('')
    const dispatch = useDispatch()
       
    const add = (e)=>{
        e.preventDefault()
        try{
                const data = new FormData()
                data.append('title',title)
                data.append('text',text)
                data.append('image',image)

                dispatch(createPost(data))
        }catch(err){
            console.log(err)
        }
    }



  
    return (
        <section>
            <h2>Добавление поста</h2>
            <form onSubmit={(e)=>add(e)}>
                <label>
                    Загрузить фото
                    <input onChange={(e)=>setImage(e.target.files[0])}   type="file" />
                    {image&&
                    <div>
                        <img src={URL.createObjectURL(image)} alt="" />
                    </div>}
                    
                </label>
                <label>
                    Название поста
                    <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Введите название' />
                </label>
                <label>
                    ТЕКСТ поста
                    <textarea onChange={(e)=>setText(e.target.value)}></textarea>
                </label>
                <button>добавить</button>
            </form>
        </section>
    );
};

export default CreatePost;