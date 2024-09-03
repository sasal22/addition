import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { registerUser } from '../../store/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword]= useState('')
    const dispatch = useDispatch()
    const navigate= useNavigate()

    const {status} = useSelector(state=>state.user)

    useEffect(()=>{
        if(status){
            toast(status)
        }
    },[status])

    const registation = (e)=>{
        e.preventDefault()
        dispatch(registerUser({username,password}))
        setUsername('')
        setPassword('')
        navigate('/')
    }  


    return (
        <section>
            <div className="container">
                <form onSubmit={(e)=>registation(e)}>
                    <label>
                        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='введите имя' />
                    </label>
                    <label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='введите пароль' />
                    </label>
                    <button>зарегаться</button>
                </form>
                <Link to='/login'>
                <p>Уже есть аккаунт</p>
                </Link>
            </div>
        </section>
    );
};

export default Register;