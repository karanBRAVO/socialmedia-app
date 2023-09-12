import {Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Messaging from './pages/Messaging'
import Profile from './pages/Profile'

export default function App() {
  return(

    <div className='flex gap-10'>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home/>} />

        <Route path='/profile' element={<Profile/>} />

        <Route path='/messaging' element={<Messaging/>} />

      </Routes>

    </div>
  );
}