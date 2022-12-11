
import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css'




function Navbar() {
    return(
        <div className='sum'>
            <div className='logo'>
                UGRE
            </div>

      
        <nav className='item'>
            <ul className='ul'>
                <li>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li>
                    <Link to='/Programs' className='nav-link'>Programs</Link>
                </li>

                <li>
                    <Link to='/ToDoList' className='nav-link'>ToDoList</Link>
                </li>
                <li>
                    <Link to='/SlideShow' className='nav-link'>SlideShow</Link>
                </li>
                
                <li>
                    <Link to='/Contacts' className='nav-link'>Contacts</Link>
                </li>
            </ul>
        </nav>
    </div>

    );
}

export default Navbar ;