import "./Header.css"

import {Link} from "react-router-dom"
import { useState } from "react"

import MenuImage from '../../assets/img/menu.png'
import ResponsiveMenu from "../../components/ResponsiveMenu/ResponsiveMenu"


function Header(props){

    const [mostarResponsiveMenu, setMostrarResponsiveMenu] = useState(false)

    const handleResponsiveMenu = ()=>{
        setMostrarResponsiveMenu(!mostarResponsiveMenu)
    }


    return(
        <header>
            <div className="header-box">

                <div className="header-logo">
                    <h2>VELOCITY</h2>
                </div>

                <nav>
                    <p><Link className="nolink nav-link" to="/home">Home</Link></p>
                    <p><Link className="nolink nav-link" to="#">Contact</Link></p>
                    <p onClick={props.logout}><Link className="nolink nav-link" to="#">Sair</Link></p>
                </nav>

                <div className="responsive-menu">
                    <img onClick={handleResponsiveMenu} src={MenuImage} alt="" />
                </div>
            </div>

            <ResponsiveMenu logout={props.logout} showMenu={mostarResponsiveMenu} e={setMostrarResponsiveMenu}></ResponsiveMenu>
        </header>
    )
}

export default Header