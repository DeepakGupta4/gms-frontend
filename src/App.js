
import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import DashBoard from './pages/Home/dashBoard/DashBoard';
import Home from './pages/Home/Home';
import {Routes,Route, useNavigate} from 'react-router-dom'
import Member from './pages/member/Member';

function App() {


  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)
  useEffect(()=>{
    let isLogedIn = sessionStorage.getItem("isLogin")
    if(isLogedIn){
      setIsLogin(true)
      // navigate('/dashboard')

    }else{
      navigate('/')
    }
  },[sessionStorage.getItem("isLogin")])


  return (
    <div className='flex'>
      {
        isLogin && <Sidebar />
      }
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/member' element={<Member />} />
      </Routes>
    </div>
  );
}

export default App;
