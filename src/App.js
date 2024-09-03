import {Routes,Route} from 'react-router-dom'
import Layout from './Layout/Layout'
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMe } from './store/userSlice';
import CreatePost from './Pages/CreatePost/CreatePost';
import OnePost from './Pages/OnePost/OnePost';
import MyPosts from './Pages/MyPosts/MyPosts';



function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getMe())
  },[])
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='createpost' element={<CreatePost/>}/>
        <Route path='onepost/:id' element={<OnePost/>}/>
        <Route path='myposts' element={<MyPosts/>}/>
      </Route>
     </Routes>
     <ToastContainer position='bottom-right'/>

    </div>
  );
}

export default App;
