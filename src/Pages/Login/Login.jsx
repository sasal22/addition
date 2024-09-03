import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { login, registerUser } from '../../store/userSlice';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword]= useState('')
    const dispatch = useDispatch()

    const {status} = useSelector(state=>state.user)

    useEffect(()=>{
        if(status){
            toast(status)
        }
    },[status])

    
    const loginUser = (e)=>{
        e.preventDefault()
        dispatch(login({username,password}))
        setUsername('')
        setPassword('')
    } 
    return (
        <section>
            <div className="container">
                <form onSubmit={(e)=>loginUser(e)}>
                    <label>
                        <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='введите имя' />
                    </label>
                    <label>
                        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" placeholder='введите пароль' />
                    </label>
                    <button>Войти</button>
                </form>
                <Link to='/register'>
                <p>Нет аккаунта</p>
                </Link>
            </div>
        </section>
    );
};

export default Login;