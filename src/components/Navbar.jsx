import Logo from '../assets/logo.png';
import Button from './Button';
export default function Navbar() {
    return(
        <nav className='flex flex-row justify-between items-center mx-[5%]'>
            <img src={Logo} alt="Logo" className=' h-20' />
            <div className='flex flex-row justify-around text-lg *:p-3 rounded-full w-[40%]  backdrop-blur-lg ring-1 ring-[#808082] '>
                <a href='#' className='text-[#6a6a6c] hover:text-zinc-200' >Home</a>
                <a href='#' className='text-[#6a6a6c] hover:text-zinc-200'>About</a>
                <a href='#' className='text-[#6a6a6c] hover:text-zinc-200'>Services</a>
                <a href='#' className='text-[#6a6a6c] hover:text-zinc-200'>Career</a>
                <a href='#' className='text-[#b373dd] hover:text-purple-300'>Work</a>
            </div>
            <Button />
        </nav>
    )
}