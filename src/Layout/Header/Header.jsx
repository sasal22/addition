import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut,toggleGetMe } from '../../store/userSlice';


const Header = () => {
    let toggle = useSelector(toggleGetMe)

    const dispatch = useDispatch()
    return (
        <header className='header'>
            <div className="container">
                <h1>MetaLabs</h1>
                <ul>
                    <Link to='/'>
                    <li>Главная</li>
                    </Link>
        <Link to='/myposts'>
        <li>МОИ Посты</li>
        </Link>
                    <Link to='/createpost'>

                    <li>Добавить пост</li></Link>
                </ul>
                
               {toggle
               ?
               <button  onClick={()=>dispatch(logOut())}>Выйти</button>
               :<Link to='login'>
                <button>Войти</button>
                </Link>}
                
            </div>
        </header>
    );
};

export default Header;