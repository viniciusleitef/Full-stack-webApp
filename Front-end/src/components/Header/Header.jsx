import "./Header.css"

import {Link} from "react-router-dom"


function Header(){
    return(
        <header>
            <div className="header-box">

                <div className="header-logo">
                    <h2>Velocity</h2>
                </div>

                <nav>
                    <p className="home-link"><Link className="nolink" to="/home">Home</Link></p>

                    <p className="contact-link"> Contact</p>
                </nav>
            </div>
        </header>
    )
}

export default Header