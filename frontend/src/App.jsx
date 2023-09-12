import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Messaging from './pages/Messaging'
import Profile from './pages/Profile'
import Signup from './pages/Sinup'
import Login from './pages/Login'

export default function App() {
  return(

    <div className='flex gap-10'>

      <Navbar />

      <Routes>

        <Route path='/login' element={<Login/>} />

        <Route path='/signup' element={<Signup/>} />

        <Route path='/home' element={<Home/>} />

        <Route path='/profile' element={<Profile/>} />

        <Route path='/messaging' element={<Messaging/>} />

      </Routes>

    </div>
  );
}