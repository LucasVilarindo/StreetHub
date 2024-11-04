import React from 'react'
import "./style.css"
import logo from './assets/logoStreet.png'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <div>
                <div className='section-logo'>
                    <img src={logo} alt="" />
                    <input type="text" placeholder="O que você procura?" />
                    <div className="btn-entrar">
                        <FaUserCircle color='#000' size={40} />
                        <p>Entrar</p>
                    </div>
                </div>
                <div className='section-items'>
                    <ul>
                        <li> <Link to="/"> HOME</Link></li>
                        <li> <Link to="/Tenis"> TENIS</Link> </li>
                        <li>ROUPAS</li>
                        <li>ACESSORIOS</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}