import { NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { BsFillChatFill } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'

export default function Navbar() {
    return (
        <div>

            <div className='flex flex-col items-center justify-center w-16 h-screen gap-5 border'>

                <div className='flex flex-col items-center justify-center gap-3'>

                    <NavLink to='/signup'><button>SignUp</button></NavLink>

                    <NavLink to='/login'><button>Login</button></NavLink>

                </div>

                <div className='flex flex-col items-center justify-center gap-5'>

                    <NavLink to='/home'><span><AiFillHome /></span></NavLink>

                    <NavLink to='/messaging'><span><BsFillChatFill /></span></NavLink>

                    <NavLink to='/profile'><span><BiUser /></span></NavLink>

                </div>

                <div className='flex flex-col items-center justify-center gap-3'>

                    <button><FiSettings /></button>

                </div>

            </div>


        </div>
    )
}