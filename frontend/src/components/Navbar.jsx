import {NavLink} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BsFillChatFill} from 'react-icons/bs'

export default function Navbar() {
    return(
        <div>

            <ul className='flex flex-col items-center justify-center h-screen gap-5 border w-14'>

                <NavLink to='/'><li><AiFillHome/></li></NavLink>

                <NavLink to='/messaging'><li><BsFillChatFill/></li></NavLink>

                <NavLink to='/profile'><li><BiUser/></li></NavLink>

            </ul>

        </div>
    )
}