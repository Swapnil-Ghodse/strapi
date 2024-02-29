import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../Context'
import Navlinks from './Navlinks';
function Navbar() {
  const {isSidebaropen, openSidebar, setPageId} = useGlobalContext();

  const handleSubMenu = (e) =>{
    // console.log(e.target)

    if(!e.target.classList.contains('nav-link')){
        setPageId(null)
    }

  }

  return (
    <nav onMouseEnter={handleSubMenu}>
        <div className='nav-centre' >
            <h3 className='logo'>strapi</h3>
            <button className='toggle-btn' onClick={openSidebar}>
                <FaBars />
            </button>
            <Navlinks />
        </div>
    </nav>
    )
}

export default Navbar