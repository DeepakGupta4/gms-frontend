
import { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import DashBoard from './pages/Home/dashBoard/DashBoard';
import Home from './pages/Home/Home';
import {Routes,Route, useNavigate} from 'react-router-dom'
import Member from './pages/member/Member';
import GeneralUser from './pages/generalUser/GeneralUser';
import MemberDetail from './pages/MemberDetail/MemberDetail';

function App() {


  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)
  useEffect(()=>{
    let isLogedIn = sessionStorage.getItem("isLogin")
    if(isLogedIn){
      setIsLogin(true)
      // navigate('/dashboard')

    }else{
      setIsLogin(false)
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
        <Route path='/specific/:page' element={<GeneralUser />} />
        <Route path='/member/:id' element={<MemberDetail />} />
      </Routes>
    </div>
  );
}

export default App;
