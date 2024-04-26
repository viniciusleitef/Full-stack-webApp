import { useEffect, useState } from "react";
import "./ResponsiveMenu.css"
import {Link} from "react-router-dom"

function ResponsiveMenu(props){
    const [showRMenu, setShowRMenu] = useState()

    const closeResponsiveMenu = () => {
        setShowRMenu(false)
        props.e(false)
    }

    useEffect (() => {
        setShowRMenu(props.showMenu)
    },[props.showMenu])

    return(
        <div className="responsiveMenu-box" style={{display: showRMenu ? 'block' : 'none'}}>
            <p onClick={closeResponsiveMenu}><Link className="nolink nav-link responsive-link" to="/home">Home</Link></p>
            <p onClick={closeResponsiveMenu}><Link className="nolink nav-link responsive-link" to="#">Contact</Link></p>
            <p onClick={props.logout}><Link className="nolink nav-link responsive-link" to="#">Sair</Link></p>
        </div>
    )
}

export default ResponsiveMenu;